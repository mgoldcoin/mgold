# Sponsored Fee Transactions

### Use Cases

* Users can fee in accet but nodes owner don't need to allow payments in this asset. 

### Implementation

#### Start sponsorship

Binary format of a SponsorFee transaction is as follows:

| Field | Size in Bytes | Comment |
| ----- | -------------:| ----- |
| type | 1 | == 14
| version | 1 | == 1 at this time
| sender's public key | 32
| Asset ID | 32     |
| minimal fee in assets | 8 |
| timestamp | 8 |
| fee | 8 |
| proofs | ? | currently only signature is supported

#### Cancel sponsorship

Binary format of a CancelFeeSponsorship transaction is as follows:

| Field | Size in Bytes | Comment |
| ----- | -------------:| ----- |
| type | 1 | == 15
| version | 1 | == 1 at this time
| sender's public key | 32
| Asset ID | 32     |
| timestamp | 8 |
| fee | 8 |
| proofs | ? | currently only signature is supported


### Fees

Fee is payable in WAVES only and is configured in node settings file as usual:

```
fees {
    sponsor-fee {
      WAVES = 100000000
    }
    cancel-fee-sponsorship {
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
  "quantity": 100000,
  "fee": 100000
}
```

`POST /asset/cancel` signs and sends a canceling sponsorship transaction. This endpoint requires API key. Sample input is as follows:
```js
{
  "version": 1,
  "sender": "3FjTpAg1VbmxSH39YWnfFukAUhxMqmKqTEZ",
  "asettId":"AP5dp4LsmdU7dKHDcgm6kcWmeaqzWi2pXyemrn4yTzfo",
  "fee": 100000
}
```

Sponsorship information for the asset present in [asset description](docs.wavesplatform.com/development-and-api/waves-node-rest-api/asset-transactions/public-functions.md#get-assetsdetailsassetId)
`GET /assets/details/{assetId}` returns asset description included sponsorship information:
```js
{
  "assetId" : "8tdULCMr598Kn2dUaKwHkvsNyFbDB1Uj5NxvVRTQRnMQ",
  "issueHeight" : 140194,
  "issueTimestamp" : 1504015013373,
  "issuer" : "3NCBMxgdghg4tUhEEffSXy11L6hUi6fcBpd",
  "name" : "name",
  "description" : "Sponsored asset",
  "decimals" : 1,
  "reissuable" : true,
  "quantity" : 1221905614,
  "script" : "",
  "scriptText" : "",
  "sponsorship" : 100000     // minimal token number for fee, zero if not sponsored. 
}
```

### Constraints

Only issuer may sponsor asset.

### Related Changes

Minimal fee was moved to consensus.

### Open Questions

* Should we allow sponsorship by non issuer?
