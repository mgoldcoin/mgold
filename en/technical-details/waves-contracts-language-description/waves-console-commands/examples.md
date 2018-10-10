# Compiling a MultiSig smart contract using Waves Console:

let's write a multiSig smart contract and show how to compile it using waves console commands and let's include two transactions in our example, which are setScript Transaction and Data Transaction.

* The first step to do is to create a new account, which will later become smart account in the test network. To do this, we can simply change the seed in the settings console  to "industry unable prison house cram toast produce panda slow position coffee energy awesome route quarter".
* Then we need to have some Waves on our account through [Faucet](https://testnet.wavesexplorer.com/faucet) , We need this Waves, because the contract itself pays for the outgoing transactions. To get the address of the created account, we can use the console function **address**:
  ```js
   address()
  ```
* Then we need to create three accounts, i.e. three pairs of keys, which will be Alice, Bob and Cooper. The smart account will verify that at least two of the three have signed the transaction, if not, the transaction will be rejected.

  ```js
  address('alice')
  keyPair('alice')

  address('bob')
  keyPair('bob')

  address('cooper')
  keyPair('cooper')
  ```

* Now we can create a contract from a template from New-&gt; Sample-&gt; Multisig \(2of3\).

```js
let alicePubKey  = base58'5AzfA9UfpWVYiwFwvdr77k6LWupSTGLb14b24oVdEpMM'
let bobPubKey    = base58'2KwU4vzdgPmKyf7q354H9kSyX9NZjNiq4qbnH2wi2VDF'
let cooperPubKey = base58'GbrUeGaBfmyFJjSQb9Z8uTCej5GzjXfRDVGJGrmgt5cD'

let aliceSigned  = if(sigVerify\(tx.bodyBytes, tx.proofs[0], alicePubKey  )) then 1 else 0  
let bobSigned    = if(sigVerify\(tx.bodyBytes, tx.proofs[1], bobPubKey    )) then 1 else 0  
let cooperSigned = if(sigVerify\(tx.bodyBytes, tx.proofs[2], cooperPubKey )) then 1 else 0

aliceSigned + bobSigned + cooperSigned >= 2
```

* We can get a contract in the IDE console through a call:

```js
 contract()
```

* We can compile the contract like this:

```js
compile(contract())
```

* Now We can create a transaction to set the script to our current account and broadcast the transaction to the blockchain      network:

```js
const Tx = setScript({script: compile (contract())})
broadcast(Tx)
```

* The script now is on the account, Now we want to create a data transaction by signing it correctly\(at least 2 signatures  because of our smart contract condition\).
  Here, We must obviously specify an increased fee \(find the formula for the calculation\) and we can explicitly specify senderPublicKey and in the second parameter we need to specify valid SEEDs \(2 of 3\):

```js
const setScriptTx = setScript({script:compile (contract()),senderPublicKey:publicKey(),fee:1400000},[null, 'bob', 'cooper'])
broadcast(setScriptTx)
```

* We can also remove the script of our account by assigning a null value to the script parameter:

```js
setScriptTx2 = setScript({script:null,senderPublicKey:publicKey(),fee:1400000},[null, 'bob', 'cooper'])
```



