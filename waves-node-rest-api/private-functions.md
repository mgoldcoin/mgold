## Private Functions

All private functions below require API Key to be provided in every HTTP request using`X-Api-Key`header. The default value is`ridethewaves!`. Securely hashed header value is stored in`rest-api.api-key-hash`setting in the waves.conf configuration file. See [/utils/hash/secure](https://github.com/wavesplatform/Waves/wiki/Waves-Node-REST-API#post-utilshashsecure) for more information on how to obtain a secure hash.

### POST /assets/issue

Issue a new Asset for an address that exists in the node's wallet.

**Request params:**

    The same as in [Broadcast Issue Assets] besides `senderPublicKey`, `timestamp` and `signature` params.
    "sender" - Sender account's address that exists in the node's wallet, Base58-encoded

**Request JSON example:**

```js
{
  "name": "Test Asset 1",
  "quantity": 100000000000,
  "description": "Some description",
  "sender": "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
  "decimals": 8,
  "reissuable": true,
  "fee": 100000000
}
```

**Response params:**

```
The same as in [Broadcast Issue Assets]
```

**Response JSON example:**

```
The same as in [Broadcast Issue Assets]
```

### POST /assets/reissue

Re-issue an additional quantity of the Asset

**Request params:**

    The same as in [Broadcast Reissue Assets] besides `senderPublicKey`, `timestamp` and `signature` params.
    "sender" - Sender account's address that exists in the node's wallet, Base58-encoded


**Request JSON example:**

```js
{
  "quantity": 22300000000,
  "assetId": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
  "sender": "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
  "reissuable": true,
  "fee": 100000
}
```

**Response params:**

```
The same as in [Broadcast Reissue Assets]

```

**Response JSON example:**

```
The same as in [Broadcast Reissue Assets]

```

### 

  


