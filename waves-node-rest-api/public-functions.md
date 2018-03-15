### GET /assets/balance/{address}

Balances for all assets that the given account ever had \(besides WAVES\).

```
  "address" - account's address in Base58 format
```

**Response params:**

```
"address" -  Account's address in Base58 format
"balances" - List of balance objects for assets that the given account has ever
"assetId" - Asset ID in Base58 format
"balance" - Balance of that Asset on account
"issued" - Boolean flag whether this asset was issued by that account
```

**Response JSON example:**

```js
{
  "address": "3Mv61qe6egMSjRDZiiuvJDnf3Q1qW9tTZDB",
  "balances": [
    {
      "assetId": "Ax9T4grFxx5m3KPUEKjMdnQkCKtBktf694wU2wJYvQUD",
      "balance": 4879179221,
      "issued": true
    },
    {
      "assetId": "49KfHPJcKvSAvNKwM7CTofjKHzL87SaSx8eyADBjv5Wi",
      "balance": 0,
      "issued": false
    }
  ]
}
```

### GET /assets/balance/{address}/{assetId}

Account's balance for the given asset.

```
  "address" - account's address in Base58 format
  "assetId" - Asset ID in Base58 format
```

**Response JSON example:**

```js
{
  "address": "3Mv61qe6egMSjRDZiiuvJDnf3Q1qW9tTZDB",
  "assetId": "Ax9T4grFxx5m3KPUEKjMdnQkCKtBktf694wU2wJYvQUD",
  "balance": 4879179221
}
```

### POST /assets/broadcast/issue

Publish signed Asset issue transaction to the network.

**Request params:**

```
"name" - Asset name, can be not unique, length from 4 to 16 bytes, in plain text.
"description" - Asset description, max length is 1000 bytes, in plain text.
"sender" - Sender account's address that exists in the node's wallet, Base58-encoded
"senderPublicKey" - Sender account's public key, Base58-encoded
"fee" - Transaction fee for Asset issue, min = 100000000 (1WAVES).
"decimals" - Number of decimals to represent a piece of asset, max = 8.
"quantity" - Quantity of asset'lets to issue (number of indivisible pieces of assets).
"reissuable" - Boolean flag whether it is possible to issue additional assets.
"signature" - Signature of all transaction data, Base58-encoded

```

**Request JSON example:**

```js
{
  "name": "Test Asset 1",
  "description": "Some description",  
  "sender": "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
  "senderPublicKey": "CRxqEuxhdZBEHX42MU4FfyJxuHmbDBTaHMhM3Uki7pLw",
  "quantity": 100000000000,
  "decimals": 8,
  "reissuable": true,
  "fee": 100000000,
  "timestamp": 1479287120875,
  "signature": "3cCKi3D17ysyEVg2cd3JGpCzm6ovL3HF8qDksX41oPLEqiRmMVZ2C8QJjs2Utd9YfQfzuEVRyzLsqPer89qAfo1A"
}
```

**Response params:**

```
"type" - Transaction type (3 for IssueTransaction)
"id" - Id(hash) of transaction in Base58 format
"assetId" - Asset ID in Base58 format, effectively equals tx id 
"fee" - Transaction fee
"timestamp" - Transaction timestamp
"sender" - Sender account's address, Base58-encoded
"senderPublicKey" - Sender account's public key, Base58-encoded
"name" - Asset name
"description" - Asset description
"quantity" - Quantity of asset'lets
"decimals" - Number of decimals to represent a piece of asset
"reissuable" - Boolean flag whether it is possible to issue additional assets.
"signature" - Signature of all transaction data, Base58-encoded

```

**Response JSON example:**

```js
{
  "type": 3,
  "id": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
  "sender": "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
  "senderPublicKey": "CRxqEuxhdZBEHX42MU4FfyJxuHmbDBTaHMhM3Uki7pLw",
  "assetId": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
  "name": "2bNcNL6HTQeVaJe9v",
  "description": "BJa6cfyHD5f9r6B4A9kEmB",
  "quantity": 100000000000,
  "decimals": 8,
  "reissuable": true,
  "fee": 100000000,
  "timestamp": 1479210401734,
  "signature": "4AKyeVcMMx9hUNpqQpeF5QPf5oWquyWk8avy524ZCXM6KdbYWpQZYf72NidzqSF3Prc6HA3DKEgdrCEhCcqw6Xbq"
}
```



