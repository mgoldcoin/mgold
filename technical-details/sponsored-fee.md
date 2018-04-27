# Sponsored Fee Transactions

### Use Cases

* Users can fee in accet but nodes owner don't need to allow payments in this asset. 

### Implementation

#### Sponsored Fee Transaction representations

Binary format of a SponsorFee transaction is as follows:

| Field | Size in Bytes | Comment |
| ----- | -------------:| ----- |
| type | 1 | == 14
| version | 1 | == 1 at this time
| sender's public key | 32
| Asset ID | 32     |
| minimal fee in assets | 8 | Zero value assume canceling sponsorship.
| timestamp | 8 |
| fee | 8 |
| proofs | ? | currently only signature is supported


Json representation

```js
{
  "type" : 14,
  "id" : "CwHecsEjYemKR7wqRkgkZxGrb5UEfD8yvZpFF5wXm2Su",
  "sender" : "3FjTpAg1VbmxSH39YWnfFukAUhxMqmKqTEZ",
  "senderPublicKey" : "5AzfA9UfpWVYiwFwvdr77k6LWupSTGLb14b24oVdEpMM",
  "minSponsoredAssetFee": 100000, // null assume canceling sponsorship, number - minimum amount assets require to fee.
  "fee" : 100000000,
  "timestamp" : 1520945679531,
  "proofs" : [ "4huvVwtbALH9W2RQSF5h1XG6PFYLA6nvcAEgv79nVLW7myCysWST6t4wsCqhLCSGoc5zeLxG6MEHpcnB6DPy3XWr" ],
  "version" : 1,
  "height" : 303
}
```

### Fees

Fee is payable in WAVES only and is configured in node settings file as usual:

```
fees {
    sponsor-fee {
      WAVES = 100000000
    }
  ...
}
```

### API

`POST /asset/sponsor` signs and sends a start/update sponsorship transaction. This endpoint requires API key. Sample input is as follows:
```js
{
  "version": 1,
  "sender": "3FjTpAg1VbmxSH39YWnfFukAUhxMqmKqTEZ",
  "asettId":"AP5dp4LsmdU7dKHDcgm6kcWmeaqzWi2pXyemrn4yTzfo",
  "minSponsoredAssetFee": 100000,
  "fee": 100000000
}
```

`POST /asset/sponsor` signs and sends a canceling sponsorship transaction. This endpoint requires API key. Sample input is as follows:
```js
{
  "version": 1,
  "sender": "3FjTpAg1VbmxSH39YWnfFukAUhxMqmKqTEZ",
  "asettId":"AP5dp4LsmdU7dKHDcgm6kcWmeaqzWi2pXyemrn4yTzfo",
  "minSponsoredAssetFee": null,
  "fee": 100000000
}
```

Sponsorship information for the asset present in [asset description](/development-and-api/waves-node-rest-api/asset-transactions/public-functions.md#get-assetsdetailsassetid).

### Constraints

Only issuer may sponsor asset.

### Related Changes

Minimal fee was moved to consensus.

### Open Questions

* Should we allow sponsorship by non issuer?
