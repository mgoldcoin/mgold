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



