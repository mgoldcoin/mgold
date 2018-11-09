# The Guide Structure

1. [Smart Accounts](/technical-details/waves-contracts-language-description/approach-and-capabilities.md)
2. [Smart Assets](/technical-details/smart-assets.md)
3. [RIDE Language](../technical-details/ride-language.md)
4. [RIDE Language Description](../technical-details/ride-language/language-description.md)
5. [Effective RIDE Examples](../technical-details/waves-contracts-language-description/examples/lang-stlib-usage-examples.md)
6. [RIDE Maven Compiler Package](../technical-details/ride-language/maven-compiler.md)
7. [Syntax Processor and Executor Implementation Details](../technical-details/waves-contracts-language-description/implementation-details.md)
8. [Functions and Standard Library](../technical-details/waves-contracts-language-description/standard-library.md)
9. [Creating and Deploying a Script Manually](../technical-details/waves-contracts-language-description/creating-and-deploying-a-script-manually.md)
10. [Script Performance Tests](../technical-details/waves-contracts-language-description/script-performance-tests.md)
11. [Waves Console Commands](../technical-details/waves-contracts-language-description/waves-console-commands.md)
12. [Video Tutorials and Articles](../technical-details/video-tutorials-and-articles.md)

# 1. Benefits of Smart Contracts on Waves Platform

![master](https://img.shields.io/badge/TESTNET-available-4bc51d.svg) ![master](https://img.shields.io/badge/node->%3D0.12.0-4bc51d.svg)

**Smart contracts** will bring new benefits to the Waves ecosystem:  
1. [Smart accounts](/technical-details/waves-contracts-language-description/approach-and-capabilities.md) will allow for **multisignature** wallets, which cannot be controlled by one user only. This will be useful for token sales, since funds can be held safely during deployment.  
2. [Smart assets](/technical-details/smart-assets.md) will allow for a script to be attached to the asset. Transactions for such assets are valid only if the script returns True.  
3. Waves smart contracts **do not use gas** for non-Turing complete smart contracts which means that fixed costs are always known upfront.  
4. Decentralized applications \(**DApps**\) which are based on Turing-complete smart contracts will be able to complete complicated processes on the Waves blockchain, meeting a wide range of different criteria.

We see [the syntax of our language](/technical-details/ride-language.md) as functional, similar to F\#: strong and statically typed.

**Note.** [_**Here**_](https://wavesplatform.com/files/docs/white_paper_waves_smart_contracts.pdf?cache=b) you can find our [_**White Paper**_](https://wavesplatform.com/files/docs/white_paper_waves_smart_contracts.pdf?cache=b) which describes Waves Smart Contracts.

## 2. Stages of Waves Smart Contracts Implementation

Our realisation of smart contracts will contain two Stages:

1. **Non-Turing Complete Smart Contracts** which cover a large proportion of use cases, including smart accounts.

2. **Turing Complete Smart Contracts** which will allow the creation of decentralised applications on the blockchain.

## 3. The idea of Smart Accounts \(SA\)

A **Smart Account** language implementation, It is an important property that the smart account does not store any data on the blockchain. A smart account will only have access to blockchain state values that can be retrieved and executed relatively fast, in a “constant” time.  
**The main idea **that Before the transaction is submitted to be included in the next block, the account checks if the transaction meets certain requirements, defined in a **script**. The script is attached to the account so the account can validate every transaction before confirming it.

### 3.1 **The Main Requirement for Smart Accounts**

The smart accounts can be run for the price of normal transactions with a predefined fee, **without** any additional **“gas”** or other costs.

### 3.2 **Smart Accounts Restrictions**

Smart accounts cannot send transactions themselves or transfer funds according to given conditions, but can read data from the blockchain \(for example, the height of a block or signatures from the transaction\) and return the result of a predicate obtained on the basis of this data.

## 4. The idea of Smart Assets

If we plan to apply constraints on all operations for a specific asset, we cannot use a smart account. In our paradigm, we have smart assets for this purpose: the script will be attached to the asset and will work in a similar way. Transactions for such assets are valid only if the script returns True. For example, a script can verify proofs from a transaction, check if a notary/escrow approves the transaction, and that operations with the asset are not locked for a specified time. The script for the token is invoked upon the following operations with an asset:

* Transfer Transaction
* MassTransfer Transaction
* Reissue Transaction
* Burn Transaction
* ExchangeTransaction
* SetAssetScriptTransaction



