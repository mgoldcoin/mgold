# Smart Asset With Notary Proof Example

Suppose that we want to transfer some assets only when we receive proof of possession from the notary, who we can trust.

Also, we want to check that the recipient is able to accept the transfer. For this purposes we can write a script for our smart asset:

```js
let notary = addressFromBytes(base583PM...)
let notaryAcceptsTransfer = checkProof(tx.body, tx.proofs[7], notary)
let maybeAccepted = getBoolean(tx.recipient, tx.id)
let recipientAcceptsTransfer = isDefined(maybeAccepted)
    then extract(maybeAccepted) else false
notaryAcceptsTransfer && recipientAcceptsTransfer
```

Here there is the notary **notary**. In **notaryAcceptsTransfer**, here is a check to confirm that the transfer transaction has the signature of the notary. In **maybeAccepted**, we check that the recipient allows the current transaction, and in the end we return **true** if both of these conditions are satisfied, or **false** otherwise.

**Note**. Please check the example on our [IDE](https://ide.wavesplatform.com/).

