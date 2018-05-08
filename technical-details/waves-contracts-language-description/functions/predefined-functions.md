# Predefined Functions in Smart Account language

| Function | Description |
| :--- | :--- |
| IsDefined\(opt\) | It checks if the option contains some value \(opt - optionT\) |
| Extract\(opt\) | Extract the value from the option \(opt - optionT\) |
| Some\(obj\) | To create the option \(obj - TYPEPARAM\('T'\)\) |
| Size\(byteVector\) | It returns the size of byte array \(byteVector - BYTEVECTOR\) |
| txById\(id\) | It returns the transaction by ID \(id - tx id\) |
| getLong\(DataType.Long\) | It gets Long value from Data Transaction by Key |
| getBoolean\(DataType.Boolean\) | It gets boolean value from Data Transaction by Key |
| getByteArray\(DataType.ByteArray\) | It gets byte array fro Data Transaction by Key |
| addressFromPublicKey\(publicKey\) | It gets the address from a public key \(pk - BYTEVECTOR\) |
| addressFromString\(String\) | It gets the address from string \(string - STRING\) |

There is an important property that the **smart account** does not store any data on the blockchain. A **smart account** will only have access to blockchain state values that can be retrieved and executed relatively fast, in a “constant” time, for example to such fields as:

* Balances of accounts;

* Access to account state;

* Current Block’s properties \(e.g. height and timestamp\);

* Data stored in other transactions referenced by transactions \(e.g. proofs, DataTransaction\).

The types which will be used to predicate are **LONG, BOOLEAN, STRING, Option\[T\], byteVector, Nothing**.

An **Option\[T\] **can be either **Some\[T\]** or **None **object, which represents a missing value.

For example, if we want to get some transactions that do not exist in the blockchain we should receive **None**, but if this transaction is contained in the blockchain, the method should return **Some\(transaction\)**.

**Note.** A user cannot create new types; only predefined ones are available.

All constants will be declared in lazy **let** constructions, which delays the evaluation of an expression until its value is needed, and does it at most once. For instance: **let hash = blake2b\(preImage\)**.

The hash is not a variable: once created its values never change.

**SetScriptTransaction **sets the script which verifies all outgoing transactions. The set script can be changed by another **SetScriptTransaction** call unless it’s prohibited by a previously set script.

