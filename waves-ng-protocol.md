# **1. Scalability Limits and Challenges in Current Blockchain Systems** {#Waves-NGProtocol-1.ScalabilityLimitsandChallengesinCurrentBlockchainSystems}

## **1.1 Problem Statment and Motivation** {#Waves-NGProtocol-1.1ProblemStatmentandMotivation}

Blockchains protocols have some scalability limits and challenges that tradeoff between throughput and latency.

The current blockchain technology is not fast enough and does not scale to inculde more transactions into the system so we have a performance challenge to be considered.

There is a united agreement between miners, consumers, and developers with several perspectives that we need to deploy scalability measures, and there has been an ongoing argument on how to improve Bitcoin’s scalability. Current proposals have focused around how big to make the blocks and how to handle the block size increases in the future.

All proposals suffer from a major scalability bottleneck:  
no matter what block size is chosen, the blockchain system can at best reach a proper transaction throughput, increasing from ~3 transactions per second to ~7 transactions per second. This is so far from the 30,000 transactions per second which necessary to compete with the existing systems such as VISA transactions. The same major limitations apply to litecoin, Ethereum and all other currencies that share Bitcoin’s blockchain protocol.  
Waves-NG will address the scalability bottleneck by making the network to reach the highest throughput depends on the network conditions. It will not only enhance the transaction throughput, it will also reduce transaction latencies. So it will be possible to get an initial transaction confirmation in seconds rather than in minutes.

|  | Latency\(Block Interval\) | Block Size | Speed |
| :--- | :--- | :--- | :--- |
| Bitcoin | 10 minutes | 1 Mb | 3-7 Tx/Second |
| Ethereum | 10 minutes | 1 Mb | 5-20 Tx/Second |
| Waves | 1 minute | 1 Mb.100 Tx/block | 1.6 Tx/Second |
| Waves-NG | 1 minute between key blocks.3 seconds between micro blocks. | 1 Mb.65535Tx/KeyBlock.200 Tx/MicroBlock | 100 Tx/second |

Table1, Scalability comparison between Bitcoin, Ethereum, Waves and Waves-NG.

## **1.2 Weaknesses of Current Proposals to Improve Scalability** {#Waves-NGProtocol-1.2WeaknessesofCurrentProposalstoImproveScalability}

Blockchain Systems can process transactions and the maximum rate of these transactions is limited by the choice of two parameters: block size and block interval.

* The block interval defines the average amount of time that passes between the creation of two blocks. By deciding to reduce the block interval to solve the latency limit, the system will have less security \(increase forks probability\) due to the reason of new miner for every second which will lead to instability where the blockchain is subject to reorganization and the system is in disagreement \(Figure 1\). If we reduce the time per block, then we will have a situation where a significant number of blocks are solved in less time than it takes to relay a solved block throughout the network. So there will be no way to know which block is the "real" one and which one is a "fork" because the transactions that appeared to have multiple confirmations suddenly have less confirmations \(or possibly go back to being unconfirmed\).

![](/assets/BlockInterval.PNG)

Figure1, Increasing block frequency with Static blocksize will result to less security.

* The throughput of a system is bounded by the maximum blocksize \(given a fixed block interval\), as the maximum number of included transactions is directly dependent on the block size.

  Larger blocks do however cause slower propagation speeds, which causes more discarded blocks \(orphaning risk\). An unlimited blocksize could, for example, result in a DoS attack on the system by creating a block that takes a long time to validate. If the choice is to Increase block size in order to improve throughput, there will be Network spikes with longer time to propagate in the network \(Figure 2\).

![](/assets/Block Size.JPG)

Figure2, Increasing block size with Static block frequency will lead to more discarded blocks and network spikes.

## **1.3 Brief Summary of Bitcoin-NG** {#Waves-NGProtocol-1.3BriefSummaryofBitcoin-NG}

It isa next-generation blockchain protocol which is an alternative bitcoin scaling solution that does not involve increasing the size of blocks or decreasing the block time interval. This reduces the risk of forks amongst other advantages. Bitcoin-NG describes that the basic tradeoffs in Bitcoin can be reduced with an alternative blockchain protocol, offering a consensus delay and bandwidth limited only by the Network Plane. The protocol splits time into time periods\(epoch\). In each time period, a particular leader is responsible for serializing transactions \(Figure 3\).

The leaders take the rule of generating blocks:

* Key blocks for the election of a leader.
* Micro blocks for ledger records.

![](/assets/Serialization.JPG)

Figure 3: Bitcoin-NG time periods structure with serializing transactions.

# **2. Waves-NG Overlay** {#Waves-NGProtocol-2.Waves-NGOverlay}

Waves-NG is based on bitcoin next generation protocol that serializes transactions and offers important improvements in the transaction latency\(lower latency\) and bandwidth\(higher throughput\) in comparison to Bitcoin without sacrificing other properties.

Waves approach this scalability matter by providing the miner with the ability to farm a block during the time of mining in continuous approach. This block continues increments called liquid block. This liquid block isunchangeable over timeonce the next block referencing is created and appended.

## **2.1 Waves-NG operations** {#Waves-NGProtocol-2.1Waves-NGoperations}

The main and core idea of Waves-NG is to split the Liquid block into two types, Key blocks and Micro blocks. The process of creating liquid block works as follows:

* The miner node gets the permission to create a block.
* The miner node creates and sends the key block \(which does not contain transactions\).
* The miner node creates and sends the micro blocks \(which contain transactions just as in normal block with a reference to previous micro bloc or key block\) with mining time interval of three seconds.
* Miners will mine those micro blocks and propagate them directly to the network until the next new key block appears with a referencing to the liquid block.

All of the transactions are part of the same block and are contributed all toghther. In between blocks, the traditional Bitcoin system appears idle to an onlooker, as miners are working to discover the next block, but without apparent progress on the consensus front.

In contradiction, in Waves-NG, the key-blocks can be small because they need to contain only the coinbase transaction, which defines the public key that the miner will be using to sign microblocks.  
Because a key-block requires proof of stake, miners can not just produce one and expropriate the leadership at will.

Following the key-block, the lead miner can quickly issue microblocks, simply by signing them with the private key corresponding to the public key named in the key-block’s coinbase \(Figure 4\).

![](/assets/Bitcoin Blocks.JPG)

Figure 4: Key-blocks and Micro-blocks signing process.

## **2.1.1 Leader blocks** {#Waves-NGProtocol-2.1.1Leaderblocks}

It's also called "Key Blocks", these blocks are generated with proof of stake but does not contain transactions.

They serve as a leader election mechanism and contain a public key that identifies the chosen leader.

Each block has a header that contains, among other fields, the unique reference of its predecessor which is a cryptographic hash of the predecessor header \(either a key block or a microblock\).

As in Bitcoin, for a key block to be valid, the cryptographic hash of its header must be smaller than the target value. Unlike Bitcoin, a key block contains a public key that will be used in subsequent microblocks.

## **2.1.2 Micro blocks** {#Waves-NGProtocol-2.1.2Microblocks}

Once a node generates a key block it becomes the leader. As a leader, the node is allowed to generate microblocks at a set rate smaller than a predefined maximum.

These micro blocks will contain the ledger entries with no requirment for any Proof of Stake and they're generated by the elected leader in every block-generation cycle.

This block-generation cycle is initiated by a leader block.

The only requirement is to sign the micro blocks with the elected leader's private key.

The micro blocks can be generated at a very high speed by the elected leader\(miner\), thus resulting in increased performance and transaction speed.

For a microblock to be valid, all its entries must be valid according to the specification of the state machine, and the signature has to be valid. Figure 5 illustrates the structure.  
Note that microblocks do not affect the weight of the chain, as they do not contain proof of stake.

When all micro blocks have been validated, they will be merged with their key block into one block.

## **2.2 Waves-NG reward mechanisms** {#Waves-NGProtocol-2.2Waves-NGrewardmechanisms}

Remuneration is comprised of two parts. First, each key block entitles its generator a set amount. Second, each ledger entry carries a fee.

This fee is split by the leader that places this entry in a microblock and the subsequent leader that generates the next key block.

In order to motivate participants to follow the protocol, Waves-NG uses the following mechanisms:

Each transaction pays a fee to the system, but unlike Bitcoin, this fee is distributed, with 40% to the leader, and 60% to the subsequent leader.

Finally, if a leader forks the chain by generating two microblocks with the same parent, it is punished by revoking the subsidy revenue; whoever detects the fraud wins a nominal fee, \(Figure 5\).

![](/assets/Capture 4.jpg)

Figure 5: chain structure of the Waves-NG protocol.Microblocks \(circles\) are signed with the private key matching with the public key in the last key block \(squares\). Fee is distributed 40% to the leader and 60% to the next one.

In practice, the remuneration is implemented by having each key block contain a single coinbase transaction that mints new coins and deposits the funds to the current and previous leaders.

As in Bitcoin, this transaction can only be spent after a maturity period of 100 key blocks, to avoid non-mergeable transactions following a fork.

# 3. Reasoning

Maximum rate of transactions in blockchain systems is limited by the choice of two parameters: block size and block interval.

* The block interval defines the average amount of time that passes between the creation of two blocks. If we reduce this time, forks will appear more frequently, which will lead to either non-resolved forks or to decreased throughput since considerable amount of time would be spent on resolving these forks.
* Larger blocks lead to huge network usage spikes during block propogation, which in turn will lead to throughput problems and huge forks.

# 3.1 Waves-NG Solution and Technical Details

Waves addresses this issue by allowing miner to continuously farm a block during time of mining. This continuously increasing block is calledliquid block, which becomes immutable when next block refecrencing it is built and appended.Liquid blockconsists ofkeyblockand chain ofmicroblocks. The proccess of creatingliquid blockgoes as follows:

* When miner node observes it has the right to create a block, it creates and sends
  keyBlock, which is regularly just an empty block.
* After that, it creates and sends microblocks every 3 seconds. Microblock is very similar to regular block: it's a non-empty pack of transactions, which references its parent: previous microblock or keyblock.
* Microblocks are continously mined and propogated to network until a new keyblock, referencing current liquidBlock appears.

# 3.2 Microblock Structure

```
generator: PublicKeyAccount 
transactionData: Seq[Transaction]
prevResBlockSig: BlockId
totalResBlockSig: BlockId
signature: ByteStr
```

`totalResBlockSig`is the new total signature of a block with all transcations from blockId=`prevResBlockSig`and own`transactionData`. This means that having a\_liquid block\_consisting of 1\_keyblock\_and 3\_microblock\_s:

**KEYBLOCK**\(\) &lt;-**MICRO1**\(tx1,tx2\) &lt;-**MICRO2**\(tx3,tx4\) &lt;-**MICRO3**\(tx5,tx6\)

We have 4 versions of last block:

| ID | Transactions |
| :--- | :--- |
| `KEYBLOCK.uniqueId` | - |
| `MICRO1.totalResBlockSig` | tx1,tx2 |
| `MICRO2.totalResBlockSig` | tx1,tx2,tx3,tx4 |
| `MICRO3.totalResBlockSig` | tx1,tx2,tx3,tx4,tx5,tx6 |

Next miner can reference **ANY **of these ids in its_keyBlock_.

# 4. Economy

For a miner, it might seem a good idea to reference`KEYBLOCK`from previous example and pack all txs from microblocks to its own \(micro\)block\(s\). In order to make 'stealing' transactions less profitable than referencing the best known version of liquid block\(= the last known microblock\), we change the mechanics of fees: After activating NG, miner will recieve 40% of fees from the block it creates and 60% of fees from the block he references.

# 5. Related Protocol Changes

* New block version \(=3\) which can contain up tp 65535 transactions and doesn't require transaction sorting.
* By default miners will first create an empty keyblock. It's a regular block, propogated by`BlockForged`message, but it now gets broadcasted if it's empty.
* Microblocks are propogated by broadcasting its header for every node which applied it \(`MicroBlockInv`\)`MicroBlockInv`
  contains verifiable signature to prevent node from being flooded. Microblock will be requested afterwards via `MicroBlockRequest`and recieved back within`MicroBlockResponse.`Microblocks will be re-requested from other node which has it if a node doesn't respond.

# 6. Configuration

The following miner parameters can be tuned\(though it's best not to change them in order to maximize final version of your liquid block in the resulting blockchain\):

* KeyBlock size \(`maxTransactionsInKeyBlock`, default = 0\). If changed, it won't be rebroadcasted and the usual extension requesting mechanics will be used.
* Microblock mining interval \(`microBlockInterval`, default = 3s\).
* Max amount of transactions per microblock \(`maxTransactionsInMicroBlock`, default = 200\).
* Miner will try to reference the best known microblock with at least`minMicroBlockAge`age\(default = 3s\). This is required in order for miner to reference already-propogated block so its keyblock doesn't get orphaned.
* Microblock synchronization mechanism can be tuned with`waitResponseTimeout`\(default = 2s\) , `processedMicroBlocksCacheTimeout`\(default = 10s\),`invCacheTimeout`\(default = 10s\) whcich are basically time of awaiting a microblock and times to cache a processed microblock ids and a list of nodes which have a microblock\(by id\).

# 7. API changes

* Upon applying every microblock, last block gets changed, which means`/blocks/last`and`/blocks/at/...`will reflect that.
* `/peers/blacklisted`now expose ban reason, one can clear a node's blacklist via`/peers/clearblacklist`
* `/debug/`and`/consensus/`section are expanded, \_stateHash \_doesn't take \_liquid block \_into consideration.



