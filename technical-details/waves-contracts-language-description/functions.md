# Overview

* The high-level Smart account code is a logic formula that combines predicates over a context \(blockchain state and transaction\) and [cryptographic statements](/technical-details/waves-contracts-language-description/functions/cryptographic-functions.md) and [functions](/technical-details/waves-contracts-language-description/functions/predefined-functions.md).
* For standard actions the binary operations: **&gt;=, &gt;, &lt;, &lt;=, +, &&, \|\|, ==** are available. 
* Lazy constants declaration are implemented via the **let** keyword, as in the F\# language. 
* There is an if-then-else clause, and access to fields of any instances of predefined structures is implemented via.\(e.g. someInstance.feldOne\). Calls to predefined functions is implemented via \(\).



