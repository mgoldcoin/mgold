1. [Smart Accounts](#smart-accounts)
2. [Set Script to an Account](#set-script-to-an-account)
3. [Script Costs](#script-costs)
4. [Trading With Smart Accounts](#trading-with-smart-accounts)

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

## Script Costs

We conducted performance tests for all aspects of our scripts. For this purpose, we developed an benchmark subproject with [JMH](http://openjdk.java.net/projects/code-tools/jmh/), that **computes a complexity of scripts** after compilation phase by AST \(Abstract Syntax Tree\) traversal in special _complexity units_. _Complexity units_ is a measure of the script's relative cost: we found out the most expensive operation in terms of computational complexity and defined it equal to **100 complexity units**. The most expensive functions:

* `fromBase58String` / `toBase58String`
* `sigVerify`

**In every test**, we conducted 10 tests and calculated the average cost.

As a result, We define the following constraint for a _**script cost**_:

* A script must have a size _**no more 8 kB**_.
* The fixed cost for each scripted unit is equal to **400000 **_**wavelets**_ \(Waves coins, 100000000 wavelets = 1 Wave\).

## Trading With Smart Accounts

![master](https://img.shields.io/badge/node->%3D0.15.0-4bc51d.svg)

The feature of trading with smart account Scripts provides the ability to validate ExchangeTransaction and Orders.

When an exchange transaction broadcasts to the UTX Pool and then to the blockchain:

* Orders are checked by traders’ account scripts \(in case they are smart\).
* Exchange Transaction is checked by transaction sender’s \(Matcher’s\) script account if it’s set.

Waves also added trader’s script check in Matcher. When it receives an order from a smart account, it executes the script for the order.

### Examples

1. An account can trade only with BTC:

```js
let cooperPubKey = base58'BVqYXrapgJP9atQccdBPAgJPwHDKkh6A8'
let BTCId = base58'8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS'
match tx {
   case o: Order =>
      sigVerify(tx.bodyBytes, tx.proofs[0], cooperPubKey ) && (o.assetPair.priceAsset == BTCId || o.assetPair.amountAsset == BTCId)
   case _ => sigVerify(tx.bodyBytes, tx.proofs[0], cooperPubKey )
}
```

1. Buy back custom asset on specified price in WAVES:

```js
let myAssetId = base58'BVqYXrapgJP9atQccdBPAgJPwHDKkh6B9'
let cooperPubKey = base58'BVqYXrapgJP9atQccdBPAgJPwHDKkh6A8'

match tx {
   case o: Order =>
      o.assetPair.priceAsset == base58'' && o.assetPair.amountAsset == myAssetId && o.price == 500000 && o.amount == 1000 && o.orderType == Buy
   case _ => sigVerify(tx.bodyBytes, tx.proofs[0], cooperPubKey )

}
```



**Note.** To understand our language better, you can check our [_**RIDE Language Section**_](/technical-details/ride-language.md) and go through our [_**Video Tutorials and Articles**_](/technical-details/video-tutorials-and-articles.md).



