## Address

### GET /addresses

Get list of all accounts addresses in the node's wallet.

**Response:**

```js
[
"3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
"3Mx2afTZ2KbRrLNbytyzTtXukZvqEB8SkW7"
]
```

### GET /addresses/seq/{from}/{to}

Get list of accounts addresses with indexes at this range in the node's wallet.

**Response:**

```js
[
"3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",  
"3Mx2afTZ2KbRrLNbytyzTtXukZvqEB8SkW7"
]
```

### POST /addresses

Generate a new account address in the wallet._Requires API\_KEY to be provided_

**Request:**

```

```

**Response JSON example:**

```js
{

"address": "3Mx2afTZ2KbRrLNbytyzTtXukZvqEB8SkW7"

}
```

### GET /addresses/balance/{address}

Get account balance in WAVES in {address}:

```
  "address" - account's address in Base58 format
```

**Response JSON example:**

```js
{

  "address": "3N3keodUiS8WLEw9W4BKDNxgNdUpwSnpb3K",
  "confirmations": 0,
  "balance": 100945889661986

}
```

### GET /addresses/balance/{address}/{confirmations}

Get account balance in WAVES by {address} after {confirmations} from now:

```
  "address" - account's address in Base58 format
  "confirmations" - N of confirmations
```

**Response JSON example:**

```js
{

"address": "3N3keodUiS8WLEw9W4BKDNxgNdUpwSnpb3K",

"confirmations": 500,

"balance": 100945388397565

}
```

### POST /assets/broadcast/reissue

Re-issue additional quantity of the Asset. Publish signed Asset re-issue transaction to the network.

**Request params:**

```
"assetId" - Asset ID previously issued, Base58-encoded
"senderPublicKey" - Sender account's public key, Base58-encoded
"fee" - Transaction fee for Asset issue, min = 100000
"quantity" - Additional quantity of asset'lets to issue (number of indivisible pieces of assets)
"reissuable" - Boolean flag whether it is possible to issue additional assets
"timestamp" - Transaction timestamp
"signature" - Signature of all transaction data, Base58-encoded
```

**Request JSON example:**

```js
{
  "quantity": 22300000000,
  "assetId": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
  "senderPublicKey": "CRxqEuxhdZBEHX42MU4FfyJxuHmbDBTaHMhM3Uki7pLw",
  "reissuable": true,
  "fee": 100000,
  "timestamp": 1479221697312,
  "signature": "49Gp5qit4GF5723LxQLjsBRoyJKKH41LpNUzwwi2ZM6dXuE9a18ApAJt9sfK3uMpjD1PiHXshS31nN9NtpYm8veu"
}
```

**Response params:**

```
"type" - Transaction type (5 for ReissueTransaction)
Others the same as in [Broadcast Issue Assets]
```

**Response JSON example:**

```js
{
  "type": 5,
  "id": "2fA4nzfCXrPmpAscwGrLoL6JHTa1u4eRLv5vbohzVxBn",
  "sender": "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
  "senderPublicKey": "CRxqEuxhdZBEHX42MU4FfyJxuHmbDBTaHMhM3Uki7pLw",
  "assetId": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
  "quantity": 22300000000,
  "reissuable": true,
  "fee": 100000,
  "timestamp": 1479221697312,
  "signature": "49Gp5qit4GF5723LxQLjsBRoyJKKH41LpNUzwwi2ZM6dXuE9a18ApAJt9sfK3uMpjD1PiHXshS31nN9NtpYm8veu"
}
```

### POST /assets/broadcast/burn

Burn quantity of the Asset. Publish signed Asset burn transaction to the network.

**Request params:**

```
"assetId" - Asset ID previously issued, Base58-encoded
"senderPublicKey" - Sender account's public key, Base58-encoded
"fee" - Transaction fee for Asset issue, min = 100000
"quantity" - amount of asset'lets to burn (number of indivisible pieces of assets)
"timestamp" - Transaction timestamp
"signature" - Signature of all transaction data, Base58-encoded
```

**Request JSON example:**

```js
{
  "senderPublicKey" : "EHDZiTW9uhZmpfKRyJtusHXCQ3ABwJ3t9dxZdiPp2GZC",
  "fee" : 100000000,
  "timestamp" : 1495623946088,
  "signature" : "4sWPrZFpR379XC4Med1y8AK2Avmx8nVUxVAzsE4QMzEeMtQyHgjzfQsi2Y5VY7diCqMAzohy9ZSTP3yfiB3QPQMd",
  "assetId" : "AP5dp4LsmdU7dKHDcgm6kcWmeaqzWi2pXyemrn4yTzfo",
  "amount" : 50000
}
```

**Response JSON example:**

```js
{
  "type" : 6,
  "id" : "AoqmyXSurAoLqH5zbcKPtksdPwadgudhE7tZ495cQDWs",
  "sender" : "3HRUALDoUaWAmAndWRqhbiQFoqgamhAVggE",
  "senderPublicKey" : "EHDZiTW9uhZmpfKRyJtusHXCQ3ABwJ3t9dxZdiPp2GZC",
  "fee" : 100000000,
  "timestamp" : 1495623946088,
  "signature" : "4sWPrZFpR379XC4Med1y8AK2Avmx8nVUxVAzsE4QMzEeMtQyHgjzfQsi2Y5VY7diCqMAzohy9ZSTP3yfiB3QPQMd",
  "assetId" : "AP5dp4LsmdU7dKHDcgm6kcWmeaqzWi2pXyemrn4yTzfo",
  "amount" : 50000
}
```

### POST /assets/broadcast/transfer

Publish signed Asset transfer from one address to another as a transaction to the network.

**Request params:**

```
"assetId" [optional] - Asset ID to transfer or omit that param when transfer WAVES, Base58-encoded
"senderPublicKey" - Sender account's public key, Base58-encoded
"recipient" - Recipient account's address, Base58-encoded
"fee" - Transaction fee for Asset transfer, min = 100000 (WAVElets)
"feeAssetId" [optional] - Asset ID of transaction fee. WAVES by default, if empty or absent 
"amount" - amount of asset'lets (or wavelets) to transfer
"attachment" - Arbitrary additional data included in transaction, max length is 140 bytes, Base58-encoded
"timestamp" - Transaction timestamp
"signature" - Signature of all transaction data, Base58-encoded
```

**Request JSON example:**

```js
{
  "assetId": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
  "senderPublicKey": "CRxqEuxhdZBEHX42MU4FfyJxuHmbDBTaHMhM3Uki7pLw",
  "recipient": "3Mx2afTZ2KbRrLNbytyzTtXukZvqEB8SkW7",
  "fee": 100000,
  "amount": 5500000000,
  "attachment": "BJa6cfyGUmzBFTj3vvvaew",
  "timestamp": 1479222433704, 
  "signature": "2TyN8pNS7mS9gfCbX2ktpkWVYckoAmRmDZzKH3K35DKs6sUoXHArzukV5hvveK9t79uzT3cA8CYZ9z3Utj6CnCEo"
}
```

**Response params:**

```
"type" - Transaction type (4 for TransferTransaction)
"id" - Id(hash) of transaction, Base58-encoded
"assetId" - Asset ID in Base58 format, effectively equals transaction id 
"timestamp" - Transaction timestamp
"sender" - Sender account's address, Base58-encoded
"senderPublicKey" - Sender account's public key, Base58-encoded
"recipient" - Recipient account's address, Base58-encoded
"feeAsset" - Asset ID of transaction fee, currently is null, i.e. WAVES
"fee" - Amount of transaction fee
"attachment" - Attachment, Base58-encoded
"signature" - Signature of all transaction data, Base58-encoded
```

**Response JSON example:**

```js
{
  "type": 4,
  "id": "3xPyT73TGV7c5PKEJpicwSsX7PXyi3Lm1JFNQivFRLuy",
  "sender": "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
  "senderPublicKey": "CRxqEuxhdZBEHX42MU4FfyJxuHmbDBTaHMhM3Uki7pLw",
  "recipient": "3Mx2afTZ2KbRrLNbytyzTtXukZvqEB8SkW7",
  "assetId": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
  "amount": 5500000000,
  "feeAsset": null,
  "fee": 100000,
  "timestamp": 1479222433704,
  "attachment": "BJa6cfyGUmzBFTj3vvvaew",
  "signature": "2TyN8pNS7mS9gfCbX2ktpkWVYckoAmRmDZzKH3K35DKs6sUoXHArzukV5hvveK9t79uzT3cA8CYZ9z3Utj6CnCEo"
}
```

### POST /assets/broadcast/batch-transfer

Publish many signed Asset transfer from one address to another as a transaction to the network. The current limit on the size of the JSON object sent is 1 megabyte.

**Request params:**

```
Array of JSON Objects:
"assetId" [optional] - Asset ID to transfer or omit that param when transfer WAVES, Base58-encoded
"senderPublicKey" - Sender account's public key, Base58-encoded
"recipient" - Recipient account's address, Base58-encoded
"fee" - Transaction fee for Asset transfer, min = 100000 (WAVElets)
"feeAssetId" [optional] - Asset ID of transaction fee. WAVES by default, if empty or absent
"amount" - amount of asset'lets (or wavelets) to transfer
"attachment" - Arbitrary additional data included in transaction, max length is 140 bytes, Base58-encoded
"timestamp" - Transaction timestamp
"signature" - Signature of all transaction data, Base58-encoded

```

**Request JSON example:**

```js
[{
  "assetId": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
  "senderPublicKey": "CRxqEuxhdZBEHX42MU4FfyJxuHmbDBTaHMhM3Uki7pLw",
  "recipient": "3Mx2afTZ2KbRrLNbytyzTtXukZvqEB8SkW7",
  "fee": 100000,
  "amount": 5500000000,
  "attachment": "BJa6cfyGUmzBFTj3vvvaew",
  "timestamp": 1479222433704, 
  "signature": "2TyN8pNS7mS9gfCbX2ktpkWVYckoAmRmDZzKH3K35DKs6sUoXHArzukV5hvveK9t79uzT3cA8CYZ9z3Utj6CnCEo"
}]
```

**Response params:**

```
Array of JSON Objects:
"type" - Transaction type (4 for TransferTransaction)
"id" - Id(hash) of transaction, Base58-encoded
"assetId" - Asset ID in Base58 format, effectively equals transaction id 
"timestamp" - Transaction timestamp
"sender" - Sender account's address, Base58-encoded
"senderPublicKey" - Sender account's public key, Base58-encoded
"recipient" - Recipient account's address, Base58-encoded
"feeAsset" - Asset ID of transaction fee, currently is null, i.e. WAVES
"fee" - Amount of transaction fee
"attachment" - Attachment, Base58-encoded
"signature" - Signature of all transaction data, Base58-encoded

```

**Response JSON example:**

```js
[{
  "type": 4,
  "id": "3xPyT73TGV7c5PKEJpicwSsX7PXyi3Lm1JFNQivFRLuy",
  "sender": "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
  "senderPublicKey": "CRxqEuxhdZBEHX42MU4FfyJxuHmbDBTaHMhM3Uki7pLw",
  "recipient": "3Mx2afTZ2KbRrLNbytyzTtXukZvqEB8SkW7",
  "assetId": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
  "amount": 5500000000,
  "feeAsset": null,
  "fee": 100000,
  "timestamp": 1479222433704,
  "attachment": "BJa6cfyGUmzBFTj3vvvaew",
  "signature": "2TyN8pNS7mS9gfCbX2ktpkWVYckoAmRmDZzKH3K35DKs6sUoXHArzukV5hvveK9t79uzT3cA8CYZ9z3Utj6CnCEo"
}]
```



