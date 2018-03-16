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



