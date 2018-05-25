# Overview

* The high-level Smart account code is a logic formula that combines predicates over a context \(blockchain state and transaction\) and cryptographic statements and functions.
* For standard actions the binary operations: **&gt;=, &gt;, &lt;, &lt;=, +, -, &&, \|\|, ==** and the unary operations: **-, !** are available. 
* Lazy constants declaration are implemented via the **let** keyword, as in the F\# language. 
* There is an if-then-else clause, and access to fields of any instances of predefined structures is implemented via.\(e.g. someInstance.feldOne\). Calls to predefined functions is implemented via \(\).
* There is a list structure, access to list's element by index `[]`, with the first element at index 0.

Waves Smart Contracts contain these types of functions:

1. [Predefined Functions](/technical-details/waves-contracts-language-description/functions/predefined-functions.md)
2. [Cryptographic Functions](/technical-details/waves-contracts-language-description/functions/cryptographic-functions.md)



