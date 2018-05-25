# Language description


## Introduction

Waves Contracts language is:

* Lazy
* Strong typed
* Statically typed
* Expression-based.

Operations and constructs available are:

* Binary operations:`>=`, `>`, `<`, `<=`, `+`, `-`, `&&`, `||`
* Unary operations `-`, `!`
* Constants declaration via `let`
* `if-then-else` clause
* Accessing fields of any of instances of predifined sctructures via `.`
* Accessing list element by index `[]`
* Calls to predefined functions via `()`

## Available data types

* `Long`
* `String`
* `Boolean`
* `ByteArray`
* `Option[T]`
* `List[T]`
* Predefined non-recursive data structure like `Transaction`, `Block`etc
* `Nothing`- "bottom type", no instance of this type can exist

### Option\[T\]

`Option[T]` can be represented as

* `Some(t)` for any `t` of type `T`
* `None`

It is higher-kind data type indicating a possibility of absence of value of inner type. This rather popular construct from functional programming languages\(Haskell, Scala, Clojure\) nowdays gets included in majority of standard libraries for many popular languages like Java, C\#, etc.

### List\[T\]

User can't create `List[T]` instances but input data can contains some `List[T]` fields.
Now all of transactions contain field `proofs: List[ByteArray]` and MassTransfer transactions contain field `transfers: List[Transfer]`.

To determinate count of lists elements you cat use function `size`.
To access lists element you can use syntax `list[index]`.

## Predefined data structures

1. `Address` and `AddressOrAlias` \(case for recipient\) contains `bytes`

2. `Transaction`contains all possible transaction fields like:

`type` : `Long`

`id` : `ByteArray`

`fee` : `Long`

`feeAssetId` : `Option[ByteArray]`

`timestamp` : `Long`

`amount` : `Long`

`bodyBytes` : `ByteArray`

`senderPk` : `ByteArray`

`assetId` : `Option[ByteArray]`

`recipient` : `AddressOrAlias`

`proofs` : `List[ByteArray]`

`transfers` : `List[Transfer]`

Note that if transaction doesn't contain certain field, like `PaymentTransaction` doesn't contain `assetId` , the script execution will fail and result in exectution result being `false`.

In order to protect from that failure, good practice is to check tx type upront, e.g.

```java
if (tx.type == 4) then (tx.assetId == base58'8Pm...') else false
```

In every script, available instances are

* `tx` : `Transaction`
* `height` : `Long`
* `None` : `Option[Nothing]`

3. `Transfer` represent earch transfer of MassTransfer transaction and contains fields:

`amount` : `Long`

`address` : `AddressOrAlias`

## Predefined functions

WavesContracts standard library not only contains predefined data types and instances, but also predefined functions that can be called. Some of them are pure, others can access blockchain state.

* `sigVerify`:`(body: ByteArray, signature: ByteArray, pubKey: ByteArray) => Boolean`
* `keccack`,`blake2b`and other hashing algorithms:`ByteArray => ByteArray`
* `extract`:`Option[T] => T`,`isDefined`:`Option[T] => Boolean`defined over`Option[_]`
* `isDefined` : `Option[T] => Boolean`
* `Some `: `T` =&gt; Option\[T\]\`
* `size `: `ByteArray => Long`
* `size `: `List[T] => Long`

### Accessing blockchain state and Oracle data

WavesContracts can access last transacion for a given account address. Note last transaction may or may no exist:

* `getTransactionById` provides tx in blockchain by id, `ByteArray => Option[Transaction]`
* \[NOT IMPLEMENTED\] `accountBalance`, `accountAssetBalance` provide balance info for any account, `Address => Long`
* \[NOT IMPLEMENTED\] `transactionHeight` provides height of tx in blockchain by id, `ByteArray => Option[Long]`

`DataTransaction`can set/overwrite a typed primitive value for a key on account of sender.

 These fields can be accessed from WavesContracts via

* `getLong`:`(accountAddress: ByteArray, key: String) => Option[Long]`
* `getBoolean`:`(accountAddress: ByteArray, key: String) => Option[Boolean]`
* `getByteArray`:`(accountAddress: ByteArray, key: String) => Option[ByteArray]`

# Examples

Here's a complete multisig 2 of 3 example. Keep in mind all`let`s could actually be inlined, they exist only for the sake of readability.

```
let alicePubKey  = base58'B1Yz7fH1bJ2gVDjyJnuyKNTdMFARkKEpV'
let bobPubKey    = base58'7hghYeWtiekfebgAcuCg9ai2NXbRreNzc'
let cooperPubKey = base58'BVqYXrapgJP9atQccdBPAgJPwHDKkh6A8'

let aliceSigned  = if(sigVerify(tx.bodyBytes, tx.proofs[0], alicePubKey  )) then 1 else 0
let bobSigned    = if(sigVerify(tx.bodyBytes, tx.proofs[1], bobPubKey    )) then 1 else 0
let cooperSigned = if(sigVerify(tx.bodyBytes, tx.proofs[2], cooperPubKey )) then 1 else 0

aliceSigned + bobSigned + cooperSigned >= 2
```



