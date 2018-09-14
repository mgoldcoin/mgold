# Waves Platform Components

# 1. Waves Client

[The Waves Client](https://client.wavesplatform.com) can be [easily installed](/waves-client/install-waves-client.md) and used to perform most actions in the Waves Platform where users can issue, transfer and trade assets.

# 2. Waves Wallet

* It’s a fully-featured client that lets you access all features of the Waves platform.

* It offers fiat integration, fast speeds, an intuitive interface, and custom tokens. It’s also constantly being updated.

* It allows to store, track, transfer and manage your cryptocurrencies, the Tokens that you issue or the Tokens that you acquire.

* The wallet has a built-in decentralized exchange platform that can be used to exchange assets, cryptocurrencies and fiat tokens.

# 3. Decentralized cryptocurrency exchange \(DEX\)

[DEX](/platform-features/decentralized-cryptocurrency-exchange-dex.md) allows to place and execute orders for buying or selling cryptocurrency or Tokens for another cryptocurrency or exchanging them to other Tokens.

# 4. Mobile apps

* Waves Wallet is a mobile client to WavesPlatform available on [Android](https://play.google.com/store/apps/details?id=com.wavesplatform.wallet) and [IOS](https://itunes.apple.com/us/app/waves-wallet/id1233158971?mt=8).
* The wallet is connected to public Waves nodes in order to retrieve your transactions and send payments.
* Get started with Waves wallet for [iOS](en/waves-client/mobile-apps/iOS.md) and [Android](en/waves-client/mobile-apps/android.md)

# 5. Waves Gateways

Fiat Gateways such as USD/EUR will allow you to exchange any token issued on the Waves platform \(or any other cryptocurrency like BTC/ETH/LTC/ZCash/BCH/Dash\) for “real” money, which can be deposited in a bank. All transactions between cryptocurrency to fiat or fiat to cryptocurrency will be recorded on the Waves blockchain. This is like mixing the best of both worlds \(i.e. centralized systems and decentralized systems\).

## 6.1 Fiat Gateways

The Waves US dollar and EUR gateways are available within the Waves Client — allowing anyone to deposit and withdraw USD, EUR and use the backed token within the Waves ecosystem. Waves users can deposit USD and EUR via the secure gateways, receiving in return a token that is 100% backed by USD or EUR reserves. This can be held, transferred and exchanged for other tokens quickly and at low cost, and withdrawn back through the gateway into the traditional financial system when required.

the USD and EUR gateways offer Waves users an easy way to move money into the blockchain ecosystem, enabling them to invest in tokens and ICOs with fiat. This was always one of the key propositions for the Waves platform: the ability to send and trade with fiat-backed tokens.

**Note.** KYC/AML verification is needed to deposit and withdraw fiat money. However, KYC is not necessary for cryptocurrency transactions.

## 6.2 Crypto Gateways

All currencies listed below are integrated in Waves through gateways. You can see gateways as a means to transfer a currency to a platform.

Current List of crypto gateways:

* [Bitcoin](/waves-client/transfers-and-gateways/bitcoin-transfers.md)
* [Ethereum](/waves-client/transfers-and-gateways/ethereum-transfers.md)
* [Litecoin](/waves-client/transfers-and-gateways/litecoin-transfers.md)
* [Zcash](/waves-client/transfers-and-gateways/zcash-transfers.md)
* [Bitcoin Cash](/waves-client/transfers-and-gateways/bitcoin-cash-transfers.md)
* [Dash](/waves-client/transfers-and-gateways/dash-transfers.md)
* [Monero](/waves-client/transfers-and-gateways/monero-transfers.md)

Cryptocurrency gateways can be used to move external currencies into and out of the Waves blockchain. Once the currencies have been confirmed as received by the gateway, the user’s wallet is credited with a Waves token that is 1:1 backed by the cryptocurrency held within the server. See more [What is a payment gateway](/waves-client/frequently-asked-questions-faq/transfers-and-gateways/payment-gateway.md)

Fees are minimal and the only delays are those required by blockchain confirmation times. We are planning to integrate more payment gateways in the future.

![](/_assets/Waves Gateways.png)Figure 1, Waves Crypto Gateways \(current and upcoming\).

# 7. Nodes

Nodes are a critical part of our ecosystem. [Run a Waves node](/waves-full-node/how-to-install-a-node/how-to-install-a-node.md), help process transactions, ask the community to [lease their WAVES](/waves-client/account-management/waves-leasing.md) to you and get paid for securing the network.

**Features:**

* A hosted server is adequate to run a node and no mining rigs or specialist hardware are required.
* It allows to mine WAVES and MRTs \(Miners Reward Tokens\) and to act as a leasing pool to aggregate mining power from other users.
* Receiving rewards from the network by leasing your balance to a full node.

**Note.** The current number of nodes is 168 in 23 different countries.

# 7.1 Mining nodes \(pools\)

You don’t need any fancy hardware, just a simple hosted server and at least 1,000 WAVES.

You can also run a public mining pool and have users lease their funds to you, thereby increasing your profits and sharing them with the community.

You can find the full list of Waves nodes for leasing with their corresponding address here [http://dev.pywaves.org/generators-weekly/](http://dev.pywaves.org/generators-weekly/) :

* [**wavesgo.com**](http://wavesgo.com/)
* [**wavesfullnode.com**](http://wavesfullnode.com/)
* [**wavescommunitynode.com**](http://wavescommunitynode.com/)
* [**wavesnode.com**](http://wavesnode.com/)
* [**wavespool.net**](http://wavespool.net/)
* [**pospool.io**](http://pospool.io/)
* [**wavesnode.net**](http://wavesnode.net/)
* [**bearwaves.nl**](http://bearwaves.nl/)

# 7.2 Official nodes with open API

1. [**WavesGo**](http://www.wavesgo.com) is the foremost Waves node, with the biggest balance \(16,214,530 WAVES\) and a thriving community of supporters. The node distributes the WavesGo token to anyone who leases their funds to it.
2. [**Wavesnode.NET**](https://wavesnode.net)** **represents a developing community in Netherlands with a balance of 10,589,578 WAVES. The node accepts multiple tokens for fees and has a growing list of supporters — as well as offering unique Waves merchandise.

**Note.** You can find a full nodes list at [dev.pywaves.org](http://dev.pywaves.org/generators/) and [Here](https://wavesplatform.com/leasing#nodes) you can find a list of the top nodes by WAVES balance.

# 7.3 Matcher nodes

Matcher nodes are responsible for pairing orders and executing trades quickly, whilst they are still settled on the blockchain. You’ll need to send your orders to a Matcher. Orders are transferred to the matcher across an encrypted channel and will not be visible to others until it is executed. This largely eliminates the possibility of market manipulation. These nodes connect the seller to the buyer for a commission, and then fix the transaction in the Waves blockchain.

In principle, **any full node** can become a **Matcher**. Waves client connects to Matchers at [nodes.wavesnodes.com](https://nodes.wavesnodes.com/) by default.

Matchers will receive fees for the service they provide, adding an additional revenue stream for Waves full nodes.

**Note.** Waves node contains DEX Matcher which can be enabled while settings [the Waves node configuration file](/waves-full-node/how-to-configure-a-node.md) in the section of Matcher Settings.

# 8. MainNet / TestNet

1. **MainNet** - this is the real deal, the live Waves blockchain where you in the worst case could lose money if you are not careful. You can access the mainnet via a full node. it's integrated with the GUI in the Waves client, allowing anyone to use it without any technical knowledge or blockchain downloads.
2. **TestNet **- this is the test version of the Waves blockchain. [here](https://github.com/wavesplatform/Waves/releases) you'll find always the latest versions and newest futures before they go live.
