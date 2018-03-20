# Waves Contracts

_Disclaimer: WavesContracts are in early development phase at the moment. This is an incomplete list of not completely implemented features of WavesContracts. Some features may be changed, added or removed completely._

# Introduction

WavesContracts language is

* lazy
* strong typed
* statically typed
* expression-based.

Operations and constructs available are:

* Binary operations:`>=`,`>`,`<`,`<=`,`+`,`&&`,`||`
* Constants declaration via`let`
* `if-then-else`clause
* Accessing fields of any of instances of predifined sctructures via`.`
* Calls to predefined functions via`()`

Avaliable data types are

* `Long`
* `String`
* `Boolean`
* `ByteArray`
* `Option[T]`
* Predefined non-recursive data structure like`Transaction`,`Block`etc
* `Nothing`- "bottom type", no instance of this type can exist

### Option\[T\]

`Option[T]`can be represented as

* `Some(t)`for any`t`of type`T`
* `None`

It is higher-kind data type indicating a possibility of absence of value of inner type. This rather popular construct from functional programming languages\(Haskell, Scala, Clojure\) nowdays gets included in majority of standard libraries for many popular languages like Java, C\#, etc.

# Predefined data structures

1. `Transaction`contains all possible transaction fields like

* `sender`:`ByteArray`

* `recipient`:`ByteArray`

* `assetId`:`ByteArray`
* `alias`:`String`
* `id`:`ByteArray`
* `amount`:`Long`
* `proof0`:`ByteArray`
* `proof1`:`ByteArray`
* `proof2`:`ByteArray`
* etc

  2. `Block`data type contains

* `timestamp`:`Long`

* `height`:`Long`

In every script, available instances are`tx`:`Transaction`and`prevBlock`:`Block`

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



