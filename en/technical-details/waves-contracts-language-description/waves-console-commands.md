# Waves Console Commands

[Waves IDE](https://ide.wavesplatform.com) has a Waves console feature which supports different commands:

**Note. **Using [Waves Transactions library ](/development-and-api/client-libraries/waves-transactions.md)you can easily create and sign transactions for Waves blockchain. It also allows you to multi-sign existing transactions or create them without signature at all.



# MultiSig Example

[_**Here**_](/technical-details/waves-contracts-language-description/waves-console-commands/examples.md) you can check the MultiSig smart contract example using Waves Console

## Creates signed Issue Transaction

* issue\({name: string; description: string; decimals: number; quantity: number; reissuable: boolean; senderPublicKey?: string; fee?: number; version?: number; chainId?: string;}, seed?: string\)

**Example:**

```js
const coin = issue({name: 'test', description: 'ico', decimals: 8, quantity:1000000, reissuable: true})
broadcast(coin)
```

**Function Details:**

```js
 /**
 * Creates signed issue transaction.
 * @param {string} name - Name of asset, max 16 symbols.
 * @param {string} description - Description of asset, max 1000 symbols.
 * @param {number} decimals - How many decimals your asset will have, range 0-8.
 * @param {number} quantity - The total supply of your token.
 * @param {boolean} reissuable - Re-issuable defines if an asset issuer can increase the token's supply at a later point or not.
 * @param {number} fee - Transaction fee, default: 100000000.
 * @param {number} timestamp - Transaction timestamp, default: Date.now().
 * @param {number} version - Transaction version, default: 1.
 * @param {string} seed - Seed to sign transaction, default: env.SEED.
 */

declare function issue(
  name: string,
  description: string,
  decimals: number,
  quantity: number,
  reissuable: boolean,
  fee: number = 100000000,
  timestamp: number = Date.now(),
  version: number = 1,
  seed: string = env.SEED
)
```

## Creates signed Reissue Transaction

* reissue\({ assetId: string; quantity: number; reissuable: boolean; senderPublicKey?: string; fee?: number; version?: number; chainId?: string; }, seed?: string\)

Example:

```js
const reissueTx= reissue({assetId:'5bZthE81r32StbxvT33a7S7nSZdcKqGHFRaVprizimuV', quantity: 1000, reissuable: true})
broadcast(reissueTx)
```

```js
 /**
 * Creates signed reissue transaction.
 * @param {string} assetId - Id of earlier issued asset.
 * @param {number} quantity - The total supply of your token (will be added to the old one).
 * @param {boolean} reissuable - Re-issuable defines if an asset issuer can increase the token's supply at a later point or not.
 * @param {number} fee - Transaction fee, default: 100000000.
 * @param {number} timestamp - Transaction timestamp, default: Date.now().
 * @param {number} version - Transaction version, default: 1.
 * @param {string} seed - Seed to sign transaction, default: env.SEED.
 */

declare function reissue(
  assetId: string,
  quantity: number,
  reissuable: boolean,
  fee: number = 100000000,
  timestamp: number = Date.now(),
  version: number = 1,
  seed: string = env.SEED
)
```

## Creates signed Burn Transaction

* burn\({ assetId: string; quantity: number; senderPublicKey?: string; fee?: number; version?: number; }, seed?: string\)

**Example:**

```js
const coinburn= burn({assetId:'5bZthE81r32StbxvT33a7S7nSZdcKqGHFRaVprizimuV', quantity: 1000})
broadcast(coinburn)
```

**Function Details:**

```js
 /**
 * Creates signed burn transaction.
 * @param {string} assetId - Id of earlier issued asset.
 * @param {number} quantity - Amount to burn.
 * @param {number} fee - Transaction fee, default: 100000.
 * @param {number} timestamp - Transaction timestamp, default: Date.now().
 * @param {number} version - Transaction version, default: 1.
 * @param {string} seed - Seed to sign transaction, default: env.SEED.
 */

declare function burn(
  assetId: string,
  quantity: number,
  fee: number = 100000,
  timestamp: number = Date.now(),
  version: number = 1,
  seed: string = env.SEED
)
```

## Creates signed Transfer Transaction

* transfer\({amount: number; recipient: string; assetId?: string; attachment?: string; feeAssetId?: string; senderPublicKey?: string; fee?: number; version?: number; }, seed?: string\)

**Example:**

```js
const tx1 = transfer({amount: 10, recipient: "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8"})
broadcast(tx1)
```

**Function Details:**

```js
 /**
 * Creates signed transfer transaction.
 * @param {number} amount - Amount to transfer.
 * @param {string} recipient - Recipient address to transfer funds to.
 * @param {string} assetId - Asset Id to transfer, default: 'WAVES'.
 * @param {string} attachment - Attachment to transfer, default: ''.
 * @param {number} feeAssetId - Asset Id to pay fee with, default: 'WAVES'.
 * @param {number} fee - Transaction fee, default: 100000.
 * @param {number} timestamp - Transaction timestamp, default: Date.now().
 * @param {number} version - Transaction version, default: 1.
 * @param {string} seed - Seed to sign transaction, default: env.SEED.
 */

declare function transfer(
  amount: number,
  recipient: string,
  assetId: string = 'WAVES',
  attachment: string = '',
  feeAssetId: string = 'WAVES',
  fee: number = 100000,
  timestamp: number = Date.now(),
  version: number = 1,
  seed: string = env.SEED
)
```

## Creates signed Lease Transaction

* lease\({ amount: number; recipient: string; senderPublicKey?: string; fee?: number; version?: number; },seed?: string\)

**Example:**

```js
const leaseTx = lease({amount: 100, recipient: '3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8'})
broadcast(leaseTx)
```

**Function Details:**

```js
 /**
 * Creates signed lease transaction.
 * @param {number} amount - Amount to lease.
 * @param {string} recipient - Recipient address to lease to.
 * @param {number} fee - Transaction fee, default: 200000.
 * @param {number} timestamp - Transaction timestamp, default: Date.now().
 * @param {number} version - Transaction version, default: 1.
 * @param {string} seed - Seed to sign transaction, default: env.SEED.
 */

declare function lease(
  amount: number,
  recipient: string,
  fee: number = 200000,
  timestamp: number = Date.now(),
  version: number = 1,
  seed: string = env.SEED
)
```

## Creates signed Cancel Lease transaction

* cancelLease\({ leaseId: string; senderPublicKey?: string; fee?: number; chainId?: string; }, seed?: string\)

**Example:**

```js
const cancelLeaseTx= cancelLease({leaseId: 'BRR8Yiwbu7jsareYr3BFk55kZ6R6Eaes5gPFWVcJTiXP'})
broadcast(cancelLeaseTx)
```

**Function Details:**

```js
 /**
 * Creates signed lease transaction.
 * @param {number} txId - Id of previous lease transaction.
 * @param {number} fee - Transaction fee, default: 100000.
 * @param {number} timestamp - Transaction timestamp, default: Date.now().
 * @param {number} version - Transaction version, default: 1.
 * @param {string} seed - Seed to sign transaction, default: env.SEED.
 */

declare function cancelLease(
  txId: string,
  fee: number = 100000,
  timestamp: number = Date.now(),
  version: number = 1,
  chainId: string = env.CHAIN_ID,
  seed: string = env.SEED
)
```

## Creates Alias

* alias\({ alias: string; senderPublicKey?: string; fee?: number; chainId?: string; }, seed?: string\)

Example:

```js
const aliasTx = alias({alias: 'wavesplatform'})
broadcast(aliasTx)
```

Function Details:

```js
 /**
 * Creates signed lease transaction.
 * @param {string} alias - Alias for a sender's address.
 * @param {number} fee - Transaction fee, default: 100000.
 * @param {number} timestamp - Transaction timestamp, default: Date.now().
 * @param {number} version - Transaction version, default: 1.
 * @param {string} seed - Seed to sign transaction, default: env.SEED.
 */

declare function createAlias(
  alias: string,
  fee: number = 100000,
  timestamp: number = Date.now(),
  version: number = 1,
  seed: string = env.SEED
)
```

## Creates signed massTransfer transaction

* massTransfer\({ transfers: {}; assetId: string; senderPublicKey?: string; fee?: number; version?: number; }, seed?: string\)\)

**Example:**

```js
const massTransferTx = massTransfer({transfers: [{amount: 100, recipient: '3N84Z1vMsHTpFEi6pBh8EdefQCmWLgC5hnH'}, {amount: 200, recipient: '3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8'}], assetId: '5bZthE81r32StbxvT33a7S7nSZdcKqGHFRaVprizimuV'})
broadcast(massTransferTx)
```

**Function Details:**

```js
/**
 * Creates signed massTransfer transaction.
 * @param {(string | number)[]} transfers - Array of recepients and amounts, 
   example: [100, '3N84Z1vMsHTpFEi6pBh8EdefQCmWLgC5hnH', 200, 'addr2'].
 * @param {string} assetId - Asset Id to transfer, in case you want to transfer WAVES use default, default: ''.
 * @param {number} fee - Transaction fee, default: 200000.
 * @param {number} timestamp - Transaction timestamp, default: Date.now().
 * @param {number} version - Transaction version, default: 1.
 * @param {string} seed - Seed to sign transaction, default: env.SEED.
 */

declare function massTransfer(
  transfers: (string | number)[],
  assetId: string = '',
  fee: number = 100000 + 50000 * (transfers.length + 1),
  timestamp: number = Date.now(),
  version: number = 1,
  seed: string = env.SEED)
```

## Compile smart contract

* compile\(contract\(\)\)

```js
declare function compile(code:string):string
```

# signed script transaction

* setScript\({ script: string; senderPublicKey?: string; fee?: number; version?: number; chainId?: string; }, seed?: string\)

**Example:**

```js
const scriptTx = setScript({script: compile(contract()), senderPublicKey: publicKey()})
broadcast(scriptTx)
```

**Function Details:**

```js
 declare function script(
  script: string,
  fee: number = 1000000,
  timestamp: number = Date.now(),
  version: number = 1,
  seed: string = env.SEED
)
```

## Sends transaction to the Waves network using env.API\_BASE endpoint

* broadcast\(tx\)

```js
 /**
 * Sends transaction to the Waves network using env.API_BASE endpoint.
 * @param {any} tx - Transaction to send to the network.
 */

declare function broadcast(tx: any)
```

# Generates keyPair from seed

* keyPair\(seed?: string\)

**Example:**

```js
const keys = KeyPair('alice') or const keys = KeyPair()
```

Function Details

```js
 /**
 * Generates keyPair from seed.
 * @param {string} seed - Seed used to generate keyPair, default: env.SEED.
 */

declare function keyPair(seed: string = env.SEED): KeyPair
```

## Generates publicKey from seed

publicKey\(seed?: string\)

**Example:**

```js
const pk = publicKey('alice') or const pk = publicKey()
```

**Function Details:**

```js
 /**
 * Generates publicKey from seed.
 * @param {string} seed - Seed used to generate publicKey, default: env.SEED.
 */

declare function publicKey(seed: string = env.SEED): string
```

## Generates privateKey from seed

* privateKey\(seed?: string\)

**Example:**

```js
const pk = privateKey()
```

**Function Details:**

```js
 /**
 * Generates privateKey from seed.
 * @param {string} seed - Seed used to generate privateKey, default: env.SEED.
 */

declare function privateKey(seed: string = env.SEED): string
```

## Generates address from KeyPair or Seed

* address\(keyPairOrSeed?: any\)

**Example:**

```js
const addr = address('alice') or const addr = address()
```

**Function Details:**

```js
/**
 * Generates address from KeyPair or Seed.
 * @param {string} keyPairOrSeed - KeyPair or Seed used to generate address, default: env.SEED.
 */

declare function address(keyPairOrSeed: KeyPair | string = env.SEED)
```



