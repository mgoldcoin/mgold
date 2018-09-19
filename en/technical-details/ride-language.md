# RIDE Language for Waves Smart contracts

Turing-completeness of a blockchain system can be achieved through unwinding the recursive calls between multiple transactions and blocks instead of using a single one, and it is not necessary to have loops and recursion in the language itself.  
A script \(contract\) should be written using our RIDE language. Scala \(Waves node is written in it\) along with F\# influenced RIDE.  
For now,** **[**RIDE language**](https://wavesplatform.com/files/docs/white_paper_waves_smart_contracts.pdf?cache=b)** **has these main characteristics which makes it simple, expressive and bug-free:

* Non-Turing Complete lazy

* Strong typed

* Statically typed expression-based language

* RIDE has **no cycle** and recursion possibility, unlike Solidity. RIDE as a language is not Turing-complete due to the lack of the possibility of creating loops or any other jump-like constructions.

* RIDE can be Turing-complete when it's used in conjunction with a blockchain, since theoretically the blockchain has an infinite length.

* **DataTransaction**, This kind of transaction provides data for smart contracts to work with. For example, if an oracle publishes some data once in a while using a publicly known account, smart contracts can use that data in their logic.

# Declare Constants

All constants are declared in lazy `let` constructions, which delays the evaluation of an expression until its value is needed, and does it at most once. For instance:

`let hash = blake2b256(preImage)`

The hash is not a variable: once created its values never change, and all structures are immutable.

# What is Set Script Transaction

`SetScriptTransaction` sets the script which verifies all outgoing transactions. The set script can be changed by another `SetScriptTransaction` call unless it’s prohibited by a previous set script.

# Matching Expression

There is a mechanism for checking a value against a pattern and you can handle the different expected types in a match expression. A match expression has a value, the match keyword, and at least one case clause:

```js
match tx {
case t:TransferTransaction => t.recepient
case t:MassTransferTransaction => t.transfers
case _ => throw()
}
```

Here the method **throw\(\)** signals the occurrence of an exception during a script execution. In case of throw the transaction does not pass into the blockchain.

