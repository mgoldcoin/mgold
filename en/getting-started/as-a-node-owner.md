# Getting Started as a Node Owner

1. [Overview](#overview)
2. [Running a Node](#running-a-node)
3. [Installing a Node](#installing-a-node)
4. [Getting Actual Blockchain](#getting-actual-blockchain)
5. [Already a Node Owner](#already-a-node-owner)
6. [Upgrade Your Node](#upgrade-your-node)
7. [Dealing with Forks](#dealing-with-forks)

## Overview

[_**Get to understand what is a Waves full node**_](/README.md), Nodes are a critical part of Waves ecosystem. By Running a Waves node, you help in processing transactions and you will increase your profit for securing the network if users start leasing their funds to your node.

The Waves full node serves **two critical roles**:

1. To relay blocks and transactions to miners
2. To answer queries for end users about the state of the blockchain.

## Running a Node

There're different options when you want to deal with Waves full node and you will need to [_**check the node configuration**_](/waves-full-node/configuration-parameters.md) before following any option.

### _**Installing a node**_

* The easiest way to run a Waves Node is by using the new [_**Waves Docker container**_](/waves-full-node/waves-node-in-docker.md). It requires just **one command** to enable everything or to change the settings of the node.
* The another way is to [_**download the latest version**_ ](https://github.com/wavesplatform/Waves/releases)of `waves.jar` and the required `.conf` configuration file \(for mainnet or testnet\) to any folder, for example `~/waves`. You can [_**follow these steps**_](/waves-full-node/how-to-install-a-node/how-to-install-a-node.md) of installing a node depending on your operating system.

**Note. **Please check the [_**activation process of new features**_](/waves-full-node/how-to-install-a-node/how-to-install-a-node.md).

### _**Getting actual blockchain**_

After installing a node, you will have different ways to get the blockchain. follow the [_**getting blockchain guide**_](/waves-full-node/options-for-getting-actual-blockchain.md).

## Already a node owner

If you're already a node owner, you will need to check the new updates and then go for one of these two options:

### _**Upgrade your node**_

Basically, the node should be upgraded by following the [_**upgrading instructions**_](/waves-full-node/upgrading.md).

### Dealing with Forks

The rolling back can be implemented no more than 2000 blocks. please go through [_**rollback instructions**_](/waves-full-node/how-to-rollback-a-node.md).

**Note. **Please check the blockchain height or the last 100 signatures of blocks to understand if your node is on fork or not. If you're interested in joining the Testnet, you will need to follow the steps for [_**joining Testnet.**_](/waves-full-node/joining-testnet.md)

