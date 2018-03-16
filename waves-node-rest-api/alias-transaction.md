### POST /leasing/lease

Creates lease transaction.

**Request params**

```
"sender" - Sender address, Base58-encoded
"fee" - Amount of transaction fee
"amount" - amount of leased waves
```

**Request JSON example**

```js
 {
  "sender" : "3HgqG68qfeVz5dqbyvqnxQceFaH49xmGvUS",
  "fee" : 500000000,
  "amount" : 500000000,
  "recipient" : "address:3HQanDJhZSsSLbCjTCsMYpPvuj2ieGwKwQ9"
}
```

**Response JSON example**

```js
{
 "type":10,
 "id":"9q7X84wFuVvKqRdDQeWbtBmpsHt9SXFbvPPtUuKBVxxr",
 "sender":"3MtrNP7AkTRuBhX4CBti6iT21pQpEnmHtyw",
 "senderPublicKey":"G6h72icCSjdW2A89QWDb37hyXJoYKq3XuCUJY2joS3EU",
 "fee":100000000,
 "timestamp":46305781705234713,
 "signature":"4gQyPXzJFEzMbsCd9u5n3B2WauEc4172ssyrXCL882oNa8NfNihnpKianHXrHWnZs1RzDLbQ9rcRYnSqxKWfEPJG",
 "alias":"dajzmj6gfuzmbfnhamsbuxivc"
}
```

### POST /leasing/cancel

Creates lease cancel transaction.

**Request params**

```
"sender" - Sender address, Base58-encoded
"fee" - Amount of transaction fee
"leaseId" - lease id for cancel
```

**Request JSON example**

```js
{
  "sender" : "3HgqG68qfeVz5dqbyvqnxQceFaH49xmGvUS",
  "fee" : 500000000,
  "leaseId" : "CYPYhYe9M94t958Nsa3DcYNBZTURwcFgQ3ojyjwEeZiK"
}
```

**Response JSON example**

```js
{
  "type" : 9,
  "id" : "895ryYABK7KQWLvSbw8o8YSjTTXHCqRJw1yzC63j4Fgk",
  "sender" : "3HgqG68qfeVz5dqbyvqnxQceFaH49xmGvUS",
  "senderPublicKey" : "DddGQs63eWAA1G1ZJnJDVSrCpMS97NH4odnggwUV42kE",
  "fee" : 500000000,
  "timestamp" : 1495625418143,
  "signature" : "2SUmFj4zo7NfZK7Xoqvqh7m7bhzFR8rT7eLtqe9Rrp18ugFH9SSvoTx1BtekWhU7PN1uLrnQCpJdS8JhmcBAjmb9",
  "leaseId" : "CYPYhYe9M94t958Nsa3DcYNBZTURwcFgQ3ojyjwEeZiK"
}
```

### POST /leasing/broadcast/lease

Creates signed lease transaction.

**Request params**

```
"senderPublicKey" - Sender account's public key, Base58-encoded
"fee" - Amount of transaction fee
"amount" - amount of leased waves
"timestamp" - Transaction timestamp
"signature" - Signature of all transaction data, Base58-encoded
```

**Request JSON example**

```js
 {
  "senderPublicKey" : "DddGQs63eWAA1G1ZJnJDVSrCpMS97NH4odnggwUV42kE",
  "fee" : 500000000,
  "timestamp" : 1495625416995,
  "signature" : "rpvX5xpSZBxHSp8bais3MAzi4RbqiSWiCUQsgTt392ni8xEoohXv9TaHNYcXG4AsYNs8iUi8jQ5kLNokZiYDV1f",
  "amount" : 500000000,
  "recipient" : "address:3HQanDJhZSsSLbCjTCsMYpPvuj2ieGwKwQ9"
}
```

**Response JSON example**

```js
{
  "type" : 8,
  "id" : "CYPYhYe9M94t958Nsa3DcYNBZTURwcFgQ3ojyjwEeZiK",
  "sender" : "3HgqG68qfeVz5dqbyvqnxQceFaH49xmGvUS",
  "senderPublicKey" : "DddGQs63eWAA1G1ZJnJDVSrCpMS97NH4odnggwUV42kE",
  "fee" : 500000000,
  "timestamp" : 1495625416995,
  "signature" : "rpvX5xpSZBxHSp8bais3MAzi4RbqiSWiCUQsgTt392ni8xEoohXv9TaHNYcXG4AsYNs8iUi8jQ5kLNokZiYDV1f",
  "amount" : 500000000,
  "recipient" : "address:3HQanDJhZSsSLbCjTCsMYpPvuj2ieGwKwQ9"
}
```

### POST /leasing/broadcast/cancel

Creates signed lease cancel transaction.

**Request params**

```
"senderPublicKey" - Sender account's public key, Base58-encoded
"fee" - Amount of transaction fee
"txId" - lease id for cancel
"timestamp" - Transaction timestamp
"signature" - Signature of all transaction data, Base58-encoded
```

**Request JSON example**

```js
{
  "senderPublicKey" : "DddGQs63eWAA1G1ZJnJDVSrCpMS97NH4odnggwUV42kE",
  "fee" : 500000000,
  "timestamp" : 1495625418143,
  "signature" : "2SUmFj4zo7NfZK7Xoqvqh7m7bhzFR8rT7eLtqe9Rrp18ugFH9SSvoTx1BtekWhU7PN1uLrnQCpJdS8JhmcBAjmb9",
  "txId" : "CYPYhYe9M94t958Nsa3DcYNBZTURwcFgQ3ojyjwEeZiK"
}
```

**Response JSON example**

```js
{
  "type" : 9,
  "id" : "895ryYABK7KQWLvSbw8o8YSjTTXHCqRJw1yzC63j4Fgk",
  "sender" : "3HgqG68qfeVz5dqbyvqnxQceFaH49xmGvUS",
  "senderPublicKey" : "DddGQs63eWAA1G1ZJnJDVSrCpMS97NH4odnggwUV42kE",
  "fee" : 500000000,
  "timestamp" : 1495625418143,
  "signature" : "2SUmFj4zo7NfZK7Xoqvqh7m7bhzFR8rT7eLtqe9Rrp18ugFH9SSvoTx1BtekWhU7PN1uLrnQCpJdS8JhmcBAjmb9",
  "txId" : "CYPYhYe9M94t958Nsa3DcYNBZTURwcFgQ3ojyjwEeZiK"
}
```

### POST /alias/broadcast/create

Creates signed alias transaction for sender's address.

**Request params**

```
"senderPublicKey" - Sender account's public key, Base58-encoded
"fee" - Amount of transaction fee
"alias" - alias for a sender's address
"timestamp" - Transaction timestamp
"signature" - Signature of all transaction data, Base58-encoded
```

**Request JSON example**

```js
 {
 "senderPublicKey": "CRxqEuxhdZBEHX42MU4FfyJxuHmbDBTaHMhM3Uki7pLw",
 "fee": 100000,
 "alias": "ALIAS",
 "timestamp": 1488807184731,
 "signature": "3aB6cL1osRNopWyqBYpJQCVCXNLibkwM58dvK85PaTK5sLV4voMhe5E8zEARM6YDHnQP5YE3WX8mxdFp3ciGwVfy"
}
```

**Response JSON example**

```js
{
 "type":10,
 "id":"9q7X84wFuVvKqRdDQeWbtBmpsHt9SXFbvPPtUuKBVxxr",
 "sender":"3MtrNP7AkTRuBhX4CBti6iT21pQpEnmHtyw",
 "senderPublicKey":"G6h72icCSjdW2A89QWDb37hyXJoYKq3XuCUJY2joS3EU",
 "fee":100000000,
 "timestamp":46305781705234713,
 "signature":"4gQyPXzJFEzMbsCd9u5n3B2WauEc4172ssyrXCL882oNa8NfNihnpKianHXrHWnZs1RzDLbQ9rcRYnSqxKWfEPJG",
 "alias":"dajzmj6gfuzmbfnhamsbuxivc"
}
```

### POST /alias/create

**Request params**

```
"sender" - Sender's addresss, Base58-encoded
"fee" - Amount of transaction fee
"alias" - alias for a sender's address
```

**Request JSON example**

```js
 {
 "sender": "3MtrNP7AkTRuBhX4CBti6iT21pQpEnmHtyw",
 "fee": 100000,
 "alias": "ALIAS",
}
```

**Response JSON example**

```js
{
 "type":10,
 "id":"9q7X84wFuVvKqRdDQeWbtBmpsHt9SXFbvPPtUuKBVxxr",
 "sender":"3MtrNP7AkTRuBhX4CBti6iT21pQpEnmHtyw",
 "senderPublicKey":"G6h72icCSjdW2A89QWDb37hyXJoYKq3XuCUJY2joS3EU",
 "fee":100000000,
 "timestamp":46305781705234713,
 "signature":"4gQyPXzJFEzMbsCd9u5n3B2WauEc4172ssyrXCL882oNa8NfNihnpKianHXrHWnZs1RzDLbQ9rcRYnSqxKWfEPJG",
 "alias":"dajzmj6gfuzmbfnhamsbuxivc"
}
```

### GET /alias/by-alias/{alias}

**Request params**

```
"alias" - alias
```

**Response JSON example**

```js
{

"address": "address:3Mx2afTZ2KbRrLNbytyzTtXukZvqEB8SkW7"

}
```

### GET /alias/by-address/{address}

**Request params**

```
"address" - address
```

**Response JSON example**

```js
[

"alias:HUMANREADABLE1",
"alias:HUMANREADABLE2",
"alias:HUMANREADABLE3",

]
```



