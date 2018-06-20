# Effective RIDE Examples

RIDE's [Introduction](/technical-details/waves-contracts-language-description/language-description.md#introduction)

## Formatting

You can use the following recommendations to make your scripts readable, maintainable and useful.

### Spaces

We support the following chars `" ", "\r", "\t", "\n"`. Try to avoid long lines, sometimes you'll work with  
scripts from terminals or browsers frames. For readability you can use blank lines between logic blocks.

### Constant Naming

Language Version 1.0 supports only a constants. To define constant you should use `let` structure  
 `let = constName (";"|"\r"|"\n") BLOCK`. For multi definition structure is  
 `let = constName (";"|"\r"|"\n")[let = constName (";"|"\r"|"\n")]+ BLOCK`.  
Use clear and understandable names, avoid using keywords of the language such as `height`, `tx`, `None`,  
`if-then-else`,  or functions names. Main points are: clearness, understandable and shortness. The language parser  
uses rules:

```
number = [+-]?['0'-'9']+

string = """, [1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-]*, """

byteVector = "base58'", [123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]* , "'"

constName = {latin-numeric string strating with char, excluding keywords}
```

Prefer:

```
let txHeight = height; true

let hash = "some secret message"

let one = 1; let two = 2; let three = 3;  one + two + three >= 8

let alicePubKey  = base58’B1Yz7fH1bJ2gVDjyJnuyKNTdMFARkKEpV’ (...)

let isAccepted = getBoolean(tx.recipient, tx.id) (...)
```

To:

```
let x = tx.attachment (...)

let none = MyFunc($Then) (...)
```

### Braces

Braces are used to create logical expressions or functions calls:

```
let notaryAgreement = if(isDefined(tx.proof[1])) then (...)

let massTransferAttrs = ((tx.type == 11) && (size(tx.transfers) == 2)) (...)

(...) (txToGovAttrsAllow && sig && txToGov)  || (txToUsers && sig)
```

### Comments

will be implemented soon :\)

## Types

As described in [Available data types](/technical-details/waves-contracts-language-description/language-description.md#available-data-types),  
language has the following types: `Bottom Type, Primitive Types, Complex Types`. Users shouldn't specify type,  
the language will do it automatically, but remember basic rules:

* don't mix up different types `100500 + true` or `Some(tx.timestamp) - "hash"` 
* a full type checking is the second stage of a language engine, the parser builds untyped AST\(abstract syntax tree\) on 
  the first stage
* language engine will always try to find common type for expression, so \`\`\` let isTxDefined = 
  if\(isDefined\(massTransferTx\)\) then Some\(extract\(massTransferTx\).timestamp\) else None`will be defined as`Option\[T\]\`\`\`

## Collections

Details are available by link [List\[T\]](/technical-details/waves-contracts-language-description/language-description.md#listt),  
and below is examples of `List[T]` usage:

```
let commonAmount = (tx.transfers[0].amount + tx.transfers[1].amount) (...)

let accSig = sigVerify(tx.bodyBytes,tx.proofs[0],accountPK) (...)
```

## Control structures

### Binary Operations

Operations include `">=", ">", "<", "<=", "+", "-", "&&", "||", "=="`. Consider examples for binary operators  
in RIDE:

```
let amountTxCorrect = tx.amount == 300000 (...)

let sig = ((tx.type == 8) || sigVerify(tx.bodyBytes,tx.proofs[0],sigA)) (...)

(...) height <= 15000000
```

### Getter structures

You can use getter structures for field access of transactions or something with a complicated structure, just use  
`"."` symbol:

```
(...) extract(mTx).bodyBytes (...)

(...) tx.transfers[1].amount (...)
```

### Recursion

RIDE doesn't support recursion in scripts, because each contract's run is stateless. But you can read stored data from  
blockchain, and validate it as you need. For example you can read some  attached data by address or from a previous  
transactions.

Here is example of ID extraction of a previous transaction:

```
let massTx = getTransactionById(tx.proofs[1])

let txToGovComplete = if(isDefined(massTx)) then (((tx.timestamp > (extract(massTx).timestamp) + 30000)) && 

sigVerify(extract(massTx).bodyBytes,extract(massTx).proofs[0],accountPK)) else false (...)
```

or extraction from data filed name:

```
let notary1 = addressFromPublicKey(extract(getByteArray(king,"notary1PK"))) (...)
```

### IF-THEN-ELSE

IF-THEN-ELSE works in the same way as defined in many program languages. Structure of if-then-else is `"if(BLOCK) then BLOCK else BLOCK`

```
let isRecipientAgreed = if(isDefined(recipientAgreement)) then extract(recipientAgreement) else false (...)

let numberOfRecipients = if(isDefined(Oracle)) then 5 else 1 (...)
```

### Pattern matching

As Scala's documentation says: "Pattern matching is a mechanism for checking a value against a pattern. A successful  
match can also deconstruct a value into its constituent parts. It is a more powerful version of the switch statement  
in Java and it can likewise be used in place of a series of if/else statements."

RIDE also inherits such functionality but in a more simple mode, a basic statement for usage:

```java
match tx {
    case a: TypeA => 0
    case b: TypeB => 1
 }
```

## Union Types, Case Types and Type Matching

It's very important to check transaction type before accessing field:

```js
if (tx.type == 4) tx.recipent == ...
```

But that's error-prone, because

```js
if (tx.type == 44) tx.recipent == ...
```

would still compile and result in execution error.

With this change, each transaction type has its own fields, and you have to match transaction type first:

```js
match tx {
 case t: TransferTransaction => t.recipient = ...          # works
 case d: DataTransaction =>     d.recipient = ...          # won't compile!
 case _ => false
}
```

In this example,`tx`, `d` don't have `recipient` field, but `t` has. All calls to transaction fields are now exception-free.

### Crypto functions

Sometimes users need operate confidential information, for such needs RIDE has crypto functions `"sha256", "blake2b256",     
"keccak256"`. In very popular use case as AtomicSwap, you can find an example of such usage:

```
let Bob = extract(addressFromString("3N5GRqzDBhjVXnCn44baHcz2GoZy5qLxtTh")).bytes
let Alice = extract(addressFromString("3MrEzc1mfWdk9SUkeremcsPLRWhViT9R9XF")).bytes
let AlicesPK = base58'FM5ojNqW7e9cZ9zhPYGkpSP1Pcd8Z3e3MNKYVS5pGJ8Z'

let txRecipient = addressFromRecipient(tx.recipient).bytes
let txSender = addressFromPublicKey(tx.senderPk).bytes

let txToBob = (txRecipient == Bob) && (sha256(tx.proofs[0]) == base58'$shaSecret') && ((20 + $beforeHeight) >= height)
let backToAliceAfterHeight = ((height >= (21 + $beforeHeight)) && (txRecipient == Alice))

txToBob || backToAliceAfterHeight
```

where `$shaSecret` is `sha256"BN6RTYGWcwektQfSFzH8raYo9awaLgQ7pLyWLQY4S4F5"` of `"some secret message from Alice"`,  
`$beforeHeight` is some predefined height.

For example transaction's list will be:  
1\) TransferTransactionV2 from AliceBC1 to swapBC1  
2\) TransferTransactionV2 from swapBC1 to BobBC1 OR after some height from swapBC1 to AliceBC1

