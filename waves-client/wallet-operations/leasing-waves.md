# Leasing WAVES

Leasing essentially means giving your forging power to a running full node without your WAVES actually leaving the wallet. This enables anyone to participate in the forging process without having to operate a node himself.  In order to get more details about Waves Leased-Proof-of-Stake protocol please click [here](https://docs.wavesplatform.com/platform-features/leased-proof-of-stake-lpos.html).

Waves implemented balance leasing within its lite client to allow every user to take part in securing the network and profit from transaction fees — without requiring any additional technical knowledge or the need to download the blockchain. Leased WAVES remain in the full control of the account holder.

You can think of leasing your WAVES as a little like depositing money in a bank account. You receive income from them but can still withdraw them at any time.

# Leasing Transactions {#LeasingWAVES-LeasingTransactions}

When creating or cancelling a lease, it always takes 1000 blocks for the forging power to be actually transferred \(your leasing will start to generate rewards after 1000 blocks in order for it to be fully in effect\).

Most importantly, this increases the amount of WAVES actively forging and, therefore, strengthens the network considerably.

## Create Leasing Transaction

Start leasing your funds by leasing any sum of your WAVES balance.The leasing transaction will require to specify the amount of WAVES that you want to lease and also requires to define the recipient address that you want to lease WAVES to.

When you decide to lease some amount of your WAVES, the WAVES leased amount will be blocked but at the same time your funds will remain in your wallet.

This Transaction contains the Id, sender address, the transaction fee, amount of leased waves and the node recipient address.

**Important.**Waves cannot be transferred to another Waves address or sold on the DEX exchange as long as they are being leased.

## Cancel Leasing Transaction {#LeasingWAVES-CancelLeasingTransaction}

User can cancel the lease and unlock the WAVES for his own use at any time.

By canceling leasing, you unblock the amount of WAVES which you have put for leasing so you will regain access to your leased amount of WAVES.

This Transaction contains the sender address and the corresponding leasing Id for canceling.

# Leasing Nodes {#LeasingWAVES-LeasingNodes}

It is possible for users to lease their balance to a node, giving them additional ‘weight’ in the network. The extra rewards earned by the node are then shared with those who have leased balances to them.

You can lease your WAVES through Waves Client or through other participant nodes by putting the recipient address which represent one of the participant nodes \([https://wavesplatform.com/leasing\#nodes](https://wavesplatform.com/leasing#nodes)\).

You can find the full list of Waves nodes for leasing with their corresponding address here [http://dev.pywaves.org/generators-weekly/](http://dev.pywaves.org/generators-weekly/) :

* [**wavesgo.com**](http://wavesgo.com/)
* [**wavesfullnode.com**](http://wavesfullnode.com/)
* [**wavescommunitynode.com**](http://wavescommunitynode.com/)
* [**wavesnode.com**](http://wavesnode.com/)
* [**wavespool.net**](http://wavespool.net/)
* [**pospool.io**](http://pospool.io/)
* [**wavesnode.net**](http://wavesnode.net/)
* [**bearwaves.nl**](http://bearwaves.nl/)

Depending on which pool you use and depending on the conditions set by the leasing pool,you may receive your WAVES rewards each week or month.

# Step-by-Step Guide for Leasing your Waves {#LeasingWAVES-Step-by-StepGuideforLeasingyourWaves}

Once the user have created his Waves account and have some WAVES in his Wallet, then the user can begin leasing his WAVES, Figure 1.

To lease your Waves, all you have to do is:

* Click the **“Leasing” **tab at the top.
* Enter the address of the node that you have chosen into the Recipient field \( for example
  3P2HNUd5VUPLMQkJmctTPEeeHumiPN2GkTb\).
* Enter the amount of Waves to lease.
* Be aware that the leasing fees is 0.001 WAVES.
* Click “Start Lease” button.

![](/_assets/Screen Shot 2018-01-16 at 5.24.48 PM.png)Figure 1, GUI for Leasing your WAVES.

Once you Clicked **Start Leasing **button, Your leasing transaction will be completed, Figure 2.

![](/_assets/Screen Shot 2018-01-17 at 6.18.06 PM.png)Figure 2, Leasing Completed.

You can see the full details about your leasing transaction by clicking on **View Details**, Figure 3.

![](/_assets/Screen Shot 2018-01-17 at 6.18.31 PM.png)Figure 3, Leasing Transaction Details.

You will always be able to cancel your leasing transaction by going to the **Leasing **tab in main menu, then to the right end click the transactions details and click **Cancel Leasing**, Figure 4.

![](/_assets/Screen Shot 2018-01-24 at 3.38.08 PM.png)Figure 4, Cancel Leasing.

