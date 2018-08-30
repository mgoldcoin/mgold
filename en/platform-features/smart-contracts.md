# Waves Smart Contracts

![master](https://img.shields.io/badge/TESTNET-available-4bc51d.svg) ![master](https://img.shields.io/badge/node->%3D0.12.0-4bc51d.svg)

**Smart contracts** are an important mechanism for any blockchain platform and their realisation should be convenient and understandable for people.

## Benefits of Smart Contracts on Waves Platform

**Smart contracts** will bring new benefits to the Waves ecosystem:

1. Smart accounts will allow for **multisignature** wallets, which cannot be controlled by one user only. This will be useful for token sales, since funds can be held safely during deployment.
2. Waves smart contracts **do not use gas** for non-Turing complete smart contracts which means that fixed costs are always known upfront.
3. Decentralized applications \(**DApps**\) which are based on Turing-complete smart contracts will be able to complete complicated processes on the Waves blockchain, meeting a wide range of different criteria.

## Stages of Waves Smart Contracts Implementation

There are two Stages:

1. **Non-Turing Complete Smart Contracts** which cover a large proportion of use cases, including smart accounts.

2. **Turing Complete Smart Contracts** which will allow the creation of decentralised applications on the blockchain.

## The idea of Smart Accounts \(SA\)

Before the transaction is submitted to be included in the next block, the account checks if the transaction meets certain requirements, defined in a **script**. The script is attached to the account so the account can validate every transaction before confirming it.

**The main requirement for our smart accounts:**

The smart accounts can be run for the price of normal transactions with a predefined fee, **without** any additional **“gas”** or other costs.

**Smart accounts restrictions:**

Smart accounts cannot send transactions themselves or transfer funds according to given conditions, but can read data from the blockchain \(for example, the height of a block or signatures from the transaction\) and return the result of a predicate obtained on the basis of this data.

## Script's Cost

We conducted performance tests for all aspects of our scripts. For this purpose, we developed an benchmark subproject with [JMH](http://openjdk.java.net/projects/code-tools/jmh/), that **computes a complexity of scripts** after compilation phase by AST \(Abstract Syntax Tree\) traversal in special _complexity units_. _Complexity units_ is a measure of the script's relative cost: we found out the most expensive operation in terms of computational complexity and defined it equal to **100 complexity units**. The most expensive functions:

* `fromBase58String` / `toBase58String`
* `sigVerify`

**In every test**, we conducted 10 tests and calculated the average cost. The full results of performance tests that we conducted are presented [here](//technical-details/waves-contracts-language-description/script-performance-tests.md).

**As a result, we define the following constraint for a script cost:**

a script must have a size no more 8 kB.  
The fixed cost for each scripted unit is equal to 400000 _wavelets_ \(Waves coins, 100000000 wavelets = 1 Wave\).

**Note.** you can find more technical details about our smart contracts implementation [**here**](/technical-details/waves-contracts-language-description.md).

## Tutorials

1. [Waves Console Example](https://www.youtube.com/watch?v=sOZuE9Ebfko&t=571s)
2. [Multi Signature Example](https://www.youtube.com/watch?v=o2msjSo0y0o&t=18s)
3. [Escrow Example](https://www.youtube.com/watch?v=31dwYcgb65M&t=7s)
4. [Waves Console Commands](https://www.youtube.com/watch?v=tcBGaS-N_1g&t=4s) \(You can check the commands details [here](/technical-details/waves-contracts-language-description/waves-console-commands.md)\)



