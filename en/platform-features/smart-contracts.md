
---

# Waves Smart Contracts

![master](https://img.shields.io/badge/TESTNET-available-4bc51d.svg) ![master](https://img.shields.io/badge/node->%3D0.12.0-4bc51d.svg)

## Getting Started

You can start writing your Waves Smart Contract by watching the following video Tutorial and by reading our guide.

## Video Tutorials

1. [_**Using Smart Contracts with Waves Console**_](https://www.youtube.com/watch?v=sOZuE9Ebfko&t=557s)

2. [_**Multi Signature Using Waves IDE & WavesJ**_](https://www.youtube.com/watch?v=o2msjSo0y0o&t=32s)

3. [_**Escrow Using Waves IDE & WavesJ**_](https://www.youtube.com/watch?v=31dwYcgb65M&t=381s)

4. [_**Waves Console Commands Example**_](https://youtu.be/WzhTk_rpngI)

## Hitchhiker’s Guide to Waves Smart Contracts {#hitchhikers-guide-to-waves-smart-contracts-part1}

1. [_**The First Part**_](https://blog.wavesplatform.com/the-hitchhikers-guide-to-waves-smart-contracts-part-1-b80aa47a745a)
2. [_**The second Part**_](https://blog.wavesplatform.com/the-hitchhikers-guide-to-waves-smart-contracts-part-2-44621fd5a007)

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

**In every test**, we conducted 10 tests and calculated the average cost.

**As a result, we define the following constraint for a script cost:**  
a script must have a size no more 8 kB.  
The fixed cost for each scripted unit is equal to 400000 _wavelets_ \(Waves coins, 100000000 wavelets = 1 Wave\).

