# Introduction

Waves Contracts language is:

* Lazy
* Strong typed
* Statically typed
* Expression-based.

Operations and constructs available are:

* Binary operations:`>=`, `>`, `<`, `<=`, `+`, `&&`, `||`
* Constants declaration via `let`
* `if-then-else` clause
* Accessing fields of any of instances of predifined sctructures via `.`
* Calls to predefined functions via `()`

Avaliable data types are

* `Long`
* `String`
* `Boolean`
* `ByteArray`
* `Option[T]`
* Predefined non-recursive data structure like `Transaction`, `Block`etc
* `Nothing`- "bottom type", no instance of this type can exist

### Option\[T\]

`Option[T]` can be represented as

* `Some(t)` for any `t` of type `T`
* `None`

It is higher-kind data type indicating a possibility of absence of value of inner type. This rather popular construct from functional programming languages\(Haskell, Scala, Clojure\) nowdays gets included in majority of standard libraries for many popular languages like Java, C\#, etc.

# Predefined data structures

1. `Address` and `AddressOrAlias` \(case for recipient\) contains `bytes`

2. `Transaction`contains all possible transaction fields like:

* `type` : `Long`
* `id` : `ByteArray`
* `fee` : `Long`
* `feeAssetId` : `Option[ByteArray]`
* `timestamp` : `Long`
* `amount` : `Long`
* `bodyBytes` : `ByteArray`
* `senderPk` : `ByteArray`
* `assetId` : `Option[ByteArray]`
* `recipient` : `AddressOrAlias`
* `proof0` : `ByteArray`
* `proof1` : `ByteArray`
* `proof2` : `ByteArray`
* `proof3` : `ByteArray`
* `proof4` : `ByteArray`
* `proof5` : `ByteArray`
* `proof6` : `ByteArray`
* `proof7` : `ByteArray`

Note that if transaction doesn't contain certain field, like `PaymentTransaction` doesn't contain `assetId` , the script execution will fail and result in exectution result being `false`.

In order to protect from that failure, good practice is to check tx type upront, e.g.

```java
if (tx.type == 4) then (tx.assetId == base58'8Pm...') else false
```

In every script, available instances are

* `tx` : `Transaction`
* `height` : `Long`
* `None` : `Option[Nothing]`

# Predefined functions

WavesContracts standard librarty not only contains predefined data types and instances, but also predefined functions that can be called. Some of them are pure, others can access blockchain state.

* `sigVerify`:`(body: ByteArray, pubKey: ByteArray, signature: ByteArray) => Boolean`
* `keccack`,`blake2b`and other hashing algorithms:`ByteArray => ByteArray`
* `extract`:`Option[T] => T`,`isDefined`:`Option[T] => Boolean`defined over`Option[_]`
* etc

### Accessing blockchain state and Oracle data

WavesContracts can access last transacion for a given account address. Note last transaction may or may no exist:

* `lastTransaction`:`(accountAddress: ByteArray) => Option[Transaction]`
* `accountBalance`,`accountAssetBalance`provide balance info for any account
* etc

`DataTransaction`can set/overwrite a typed primitive value for a key on account of sender. These fields can be accessed from WavesContracts via

* `getLong`:`(accountAddress: ByteArray, key: String) => Option[Long]`
* `getBoolean`:`(accountAddress: ByteArray, key: String) => Option[Boolean]`
* `getByteArray`:`(accountAddress: ByteArray, key: String) => Option[ByteArray]`
* etc

# Examples

Here's a complete multisig 2 of 3 example. Keep in mind all`let`s could actually be inlined, they exist only for the sake of readability.

```
let alicePubKey  = base58'B1Yz7fH1bJ2gVDjyJnuyKNTdMFARkKEpV'
let bobPubKey    = base58'7hghYeWtiekfebgAcuCg9ai2NXbRreNzc'
let cooperPubKey = base58'BVqYXrapgJP9atQccdBPAgJPwHDKkh6A8'

let aliceSigned  = if(checkSig(tx.bodyBytes, tx.proof0, alicePubKey  )) then 1 else 0
let bobSigned    = if(checkSig(tx.bodyBytes, tx.proof1, bobPubKey    )) then 1 else 0
let cooperSigned = if(checkSig(tx.bodyBytes, tx.proof2, cooperPubKey )) then 1 else 0

aliceSigned + bobSigned + cooperSigned >= 2
```



