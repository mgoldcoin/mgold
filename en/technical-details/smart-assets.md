# Smart Assets

![master](https://img.shields.io/badge/node->%3D0.15.1-4bc51d.svg)

1. [Smart Assets Definition](#smart-assets-definition)
2. [Smart Assets Features](#smart-assets-features)
3. [Smart Assets Use Cases](#smart-assets-use-cases)
4. [Transaction Fee](#transaction-fee)
5. [Trading](#trading)
6. [Validation](#validation)
7. [Examples of Scripts for Smart Assets](#examples-of-scripts-for-smart-assets)

## Smart Assets Definition

_**Smart assets**_ are unique virtual currency tokens that may represent a tangible real-world asset, or a non-tangible ownership that can be purchased, sold, or exchanged as _**defined by the rules of a script**_ on the Waves blockchain network.

In simple words, **Smart assets **are assets with an attached script which validates every transaction within that asset.

**Note. **A smart asset’s script can be changed via [_**SetAssetScriptTransaction**_](/technical-details/data-structures.md).

## Smart Assets Features

* **Smart assets** will allow to apply constraints on all operations for a specific asset.
* **Smart assets **will offer a great degree of autonomy, anonymity, and low-cost of transactions.

## Smart Assets Use Cases

Smart assets can be used in the following cases:

1. **Freezing assets: **It is similar to keeping the assets untouched for a particular interval of time or for a certain height, This is useful in case of having multiple funding rounds.
2. **Whitelist/blacklist:** Giving the possibility to allow/deny making a transfer for specific addresses.
3. **Taxation:** The issuer can get a share after each transaction.
4. **Multi-signature:** It's a digital signature scheme which allows a group of users to sign a transaction, It requires another user or users to sign a transaction before it can be broadcast onto the blockchain.
5. **Controlling Asset Pairs:** Tokens interchangeable with a certain currency only.
6. **Gaming:** The smart asset can be used to transfer an asset only under certain conditions \(holder has a certain attributes in a certain location\).
7. A token that indicates some commitment/debt \(unburnable, may only be transferred back with permission of the issuer\).
8. Require asset's owners to use a specific matcher.

# Set Asset Script Transaction Fee

The transaction fee is calculated in the same way as for [smart accounts](/technical-details/waves-contracts-language-description/approach-and-capabilities.md): for each time the script is called, total transaction’s fee increases by 0.004 WAVES.

**Note. **If a scripted account transfers a smart asset, then the fee is increased twice \(the fee increases _**+0.004**_ every time the transaction is validated by account’s script or asset’s script\).

## Trading

Trading on SmartAssets is allowed \(node validates every ExchangeTransaction using scripts of the two assets in AssetPair\).

## Validation

A smart asset’s script validates any of the following transaction types with the asset:

1. ReissueTransaction
2. BurnTransaction
3. TransferTransaction
4. MassTransferTransaction
5. ExchangeTransaction
6. SetAssetScriptTransaction

**Note.** Smart Assets’ scripts **do not validate orders**. Therefore, although RIDE allows to use `case t : Order => …` branch, in fact this branch does not validate anything when used in SmartAssets’ scripts and will be ignored. So all the logic regarding orders should be moved to `case t : ExchangeTransaction => …` branch.

## Examples of Scripts for Smart Assets

A smart asset’s script can be changed via [_**SetAssetScriptTransaction**_](/technical-details/data-structures.md).

### Issue an unburnable asset

```js
match tx {
  case t : BurnTransaction => false
  case _ => true
}
```

### Taxation

```js
match tx {
  case t : MassTransferTransaction =>
    let twoTransfers = size(t.transfers) == 2
    let issuerIsRecipient = t.transfers[0].recipient == addressFromString("3MgkTXzD72BTfYpd9UW42wdqTVg8HqnXEfc")
    let taxesPaid = t.transfers[0].amount >= t.transfers[1].amount / 10
    twoTransfers && issuerIsRecipient && taxesPaid
  case _ => false
}
```

### Freeze your assets till the certain height

```js
let targetHeight = 1500000
height >= targetHeight
```

### Whitelist transfer recipients

```js
match tx {
  case t : TransferTransaction =>
    let trustedRecipient1 = addressFromString("3P6ms9EotRX8JwSrebeTXYVnzpsGCrKWLv4")
    let trustedRecipient2 = addressFromString("3PLZcCJyYQnfWfzhKXRA4rteCQC9J1ewf5K")
    let trustedRecipient3 = addressFromString("3PHrS6VNPRtUD8MHkfkmELavL8JnGtSq5sx")
    t.recipient == trustedRecipient1 || t.recipient == trustedRecipient2 || t.recipient == trustedRecipient3
  case _ => false
}
```

### Blacklist transfer recipients

```js
match tx {
  case t : TransferTransaction =>
    let bannedRecipient1 = addressFromString("3P6ms9EotRX8JwSrebeTXYVnzpsGCrKWLv4")
    let bannedRecipient2 = addressFromString("3PLZcCJyYQnfWfzhKXRA4rteCQC9J1ewf5K")
    let bannedRecipient3 = addressFromString("3PHrS6VNPRtUD8MHkfkmELavL8JnGtSq5sx")
    t.recipient != bannedRecipient1 && t.recipient != bannedRecipient2 && t.recipient != bannedRecipient3
  case _ => false
}
```

### Require a fee in a certain asset to get a share after each transfer

```js
match tx {
  case t : TransferTransaction =>
    t.feeAssetId == base58'oWgJN6YGZFtZrV8BWQ1PGktZikgg7jzGmtm16Ktyvjd'
  case _ => true
}
```

### Token that can be only transferred with the issuer’s permission \(commitment/debt label\)

```js
match tx {
  case t : TransferTransaction =>
    let issuer = addressFromString("3P6ms9EotRX8JwSrebeTXYVnzpsGCrKWLv4")
    isDefined(getInteger(issuer, toString(t.id)))
  case _ => false
}
```

### Issue an untransferable asset

```js
match tx {
  case t : TransferTransaction | MassTransferTransaction | ExchangeTransaction => false
  case _ => true
}
```

### Asset tradable only with BTC

```js
let BTCId = base58'8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS'
match tx {
  case t : ExchangeTransaction =>
    t.sellOrder.assetPair.priceAsset == BTCId || t.sellOrder.assetPair.amountAsset == BTCId
  case _ => true
}
```

### Require using a certain matcher

```js
match tx {
  case t : ExchangeTransaction =>
    t.sender == addressFromString("3PJaDyprvekvPXPuAtxrapacuDJopgJRaU3")
  case _ => true
}
```



