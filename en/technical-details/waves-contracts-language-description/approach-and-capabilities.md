## Smart Accounts

Basically, the smart account is an account with attached transactions checking **script**. In other words, a **script** which is attached to an account so the account can validate every transaction before confirming it.  
An account can be restricted with any outgoing transaction based on:

* Signatures and other supplied data
* Proofs
* Current blockchain height
* An arbitrary data existing in a blockchain, like data from Oracles, which post the data via `DataTransaction`.

## Set Script to an Account

In order to setup an Smart Account, The account needs to issue [`SetScriptTransaction`](https://ebceu4.github.io/waves-transactions/interfaces/setscripttransaction.html) which contains the predicate. Upon success, every outgoing transaction will be validated not by the default mechanism of signature validation, but according to the predicate logic.  
`AccountScript` can be changed or cleared if the script installed allows the new [`SetScriptTransaction`](https://ebceu4.github.io/waves-transactions/interfaces/setscripttransaction.html) to process.  
The default account has no script, which is equivalent to this script:

```go
sigVerify(tx.bodyBytes, tx.proofs[0], tx.senderPk)
```

**Note.** [`SetScriptTransaction`](https://ebceu4.github.io/waves-transactions/interfaces/setscripttransaction.html) sets the script which verifies all outgoing transactions. The set script can be changed by another [`SetScriptTransaction`](https://ebceu4.github.io/waves-transactions/interfaces/setscripttransaction.html) call unless it’s prohibited by a previous set script.

## Denied Actions for Smart Accounts

* Since supporting multi-signature, Mining blocks looks like  unnecessary complication.
* Trading on DEX, since that will require multi-signature orders.
  These restriction can be considered as temporary one.

To understand our language better, you can check our [_**RIDE Language Section**_](/technical-details/ride-language.md) and go through our [_**Video Tutorials and Articles**_](/technical-details/video-tutorials-and-articles.md).

