# Waves Smart Contract

Our realisation of smart contracts will contain two parts:

1. A **Smart Account** language implementation, It is an important property that the smart account does not store any data on the blockchain. A smart account will only have access to blockchain state values that can be retrieved and executed relatively fast, in a “constant” time. these smart accounts can be run for the price of normal transactions with a predefined fee, **without any additional “gas” or other costs**.
2. A **Foundational Layer** for developing various decentralised applications and smart contracts on the blockchain, with a built-in Turing-complete programming language.

We see the syntax of our language as functional, similar to F\#: strong and statically typed.

**Note.** [**Here**](https://wavesplatform.com/files/docs/white_paper_waves_smart_contracts.pdf) you can find our White Paper which describes Waves Smart Contract.

More technical details you can find in the articles below:

1. [Approach and Capabilities](./waves-contracts-language-description/approach-and-capabilities.md)
2. [Language and Standard Library Documentation](waves-contracts-language-description/language-description.md)
3. [Syntax Processor and Executor Implementation Details](waves-contracts-language-description/implementation-details.md)

## Creating and deploying a script manually

Without `Waves Client` or any API libraries. We will try to make manually a simple 2FA here.

Assumptions:
1. We have own node. For example, it has the `example.org` domain
2. We set up a script for a [generated](../development-and-api/waves-node-rest-api/address.md#post-addresses) account

For example, we generated these addresses:
* `3MxjWXEUcVCeiaEUqNcorB5HxSpLsgJCGxE` - Alice's account;
* `3MqGVvfgqdqqU6P9mTAsLSxyRoRjrHF18Mf` - Bob's account;
* `3N13xTzVpM2ukPLwyP46KJcuTxZ7mSf8ieN` - Shared account with waves we want to spend.

### Creating a script

You can create a script at our [IDE site](http://ide.wavesplatform.com/).

1. Start with examples: try to click on menu and choose `Multisig (2 of 3)`
2. Edit a way you want. For this example we will use the following script:

  ```

  let alicePubKey  = base58'3MxjWXEUcVCeiaEUqNcorB5HxSpLsgJCGxE'
  let bobPubKey    = base58'3MqGVvfgqdqqU6P9mTAsLSxyRoRjrHF18Mf'

  let aliceSigned  = if(sigVerify(tx.bodyBytes, tx.proof0, alicePubKey)) then 1 else 0
  let bobSigned    = if(sigVerify(tx.bodyBytes, tx.proof1, bobPubKey  )) then 1 else 0

  aliceSigned + bobSigned >= 2

  ```

3. Switch to the `BINARY` tab
4. Click on `COPY TO CLIPBOARD` button. A compiled and Base58-encoded script should be copied into your clipboard. It will be required later.

For example, compiled and Base58-encoded script is (separated by lines):
```
wR9LfQrBFkyRVWqKkdjJAFEmgEYSPPJ37wysd6ABjDnvKBBwmoGUhuKj7n79eXe6Y8UTPmZsdAGTcu84xMDwXPXcKbcHbahS9QXsySCUYWnkaeWsVvoPmrmDMaPZakqpy
T7zx8VciYLtfznKrTdaeD81eDsK9jdMDbpWN3ZfbW48u5nyFMmm7rtt3Bv4S83bj8ENAWub16qUeGUzMEvTWDogd1rWPuXz2HZxpjYoYDaat9TmoxhXbAvT91MWSzL3mi
awRnwh3yC5SVxT6hxqYSav3rDZ1q7zdyW1VLgN62uwALEWVcVa6MyFCNt1Yqw3SFkbF5CmV7NVVTaeVbPdf4QLi9zn8W1ZReArHhuxj9G6zxDWdJ1vgKEYypMXQQQZUum
FUMxA38ELyrGiS7VgqakeEUf3mJCKCGry6QRFoqdDrgmKpPcWbLNYvNQeko6mLsPhXB9hFjGMMsXUycBtuHtd3UbShdK3Hwmj4e5fRVfstjhXPHP35JUCrKkFwYrcsHom
n3WK6fvPn6TtVxb6sbV6WHCaMVKqyH3w8N8Y7qBSfe4UH8aXdvJ2U3nc16jzJhSjXXJZdjYGCLoJM3GzAvyh99q6kNE3fRbweuEW4SECKkCJNWDMvBghBjhVTgoDkuQvr
wTBQXKun5nx9tSBf
```

I'll replace this huge script with `<our huge script>` to make examples cleaner.

### Attaching a script to account

1. Now we prepare a JSON request to sign a SetScriptTransaction for shared account with the given script:

  ```json
  {
    "type": 13,
    "version": 1,
    "sender": "3N13xTzVpM2ukPLwyP46KJcuTxZ7mSf8ieN",
    "fee": 100000,
    "script": "<our huge script>"
  }
  ```

  Note, `fee` is `100000` - a minimal required fee to deploy your script

2. And send it to [/transactions/sign](../development-and-api/waves-node-rest-api/transactions.md#post-transactionssign):

  ```bash
  $ curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-API-Key: <it is a secret>' \
  -d '{ "type": 13, "version": 1, "sender": "3N13xTzVpM2ukPLwyP46KJcuTxZ7mSf8ieN", "fee": 100000, "script": "<our huge script>" }' \
  'https://example.org/transactions/sign'
  ```

  and receive a JSON ready to broadcast:
  ```json
  {
    "type": 13,
    "id": "HnqsUwKu8iWLzWUFowbfNe55hABM9tBwqyD7kynVU45f",
    "sender": "3N13xTzVpM2ukPLwyP46KJcuTxZ7mSf8ieN",
    "senderPublicKey": "J33iZ1GztmNEtW3ecmp9hjaDz77s1n5HwPoNvsMAMkfn",
    "fee": 100000,
    "timestamp": 1525451702956,
    "proofs": [
      "4RVefCGCjZSvndCXWsGPFhEU3Jt5uJRocJByKScdHWkhzyJcFVgWZJtZAXif78yowsU4qfbzYCPa52KuGcY3C8Rc"
    ],
    "version": 1,
    "script": "<our huge script>"
  }
  ```

3. Then we [broadcast](../development-and-api/waves-node-rest-api/transactions.md#post-transactionsbroadcast) a prepared request:

  ```bash
  $ curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-API-Key: <it is a secret>' \
  -d '{ "type": 13, "id": "HnqsUwKu8iWLzWUFowbfNe55hABM9tBwqyD7kynVU45f", "sender": "3N13xTzVpM2ukPLwyP46KJcuTxZ7mSf8ieN", \
    "senderPublicKey": "J33iZ1GztmNEtW3ecmp9hjaDz77s1n5HwPoNvsMAMkfn", "fee": 100000, "timestamp": 1525451702956, \
    "proofs": [ "4RVefCGCjZSvndCXWsGPFhEU3Jt5uJRocJByKScdHWkhzyJcFVgWZJtZAXif78yowsU4qfbzYCPa52KuGcY3C8Rc" ], \
    "version": 1, "script": "<our huge script>" }' \
  'https://example.org/transactions/broadcast'
  ```

4. And check it was applied:

  ```bash
  $ curl http://example.org/addresses/scriptInfo/3N13xTzVpM2ukPLwyP46KJcuTxZ7mSf8ieN
  {
    "address" : "3N13xTzVpM2ukPLwyP46KJcuTxZ7mSf8ieN",
    "script" : "<our huge script>",
    "scriptText" : "<a text of our huge script>",
    "complexity" : 27,
    "extraFee" : 400000
  }
  ```

Fine! Now we able to make transfers from this account.

### Trying to transfer waves with bad request 

2. Alice gives JSON to Bob
3. Bob signs it by his private key
4. Bob [broadcasts](../development-and-api/waves-node-rest-api/transactions.md#post-transactionsbroadcast) the transaction
