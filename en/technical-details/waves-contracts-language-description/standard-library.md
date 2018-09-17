# Standard Library

## Common fields

These fields are common for all transaction types:

| Field | Description | Type |
| :--- | :--- | :--- |
| id | Transaction ID | Byte Vector |
| fee | Transaction fee | Long |
| ~~timestamp~~ | Transaction unix timestamp in milliseconds <br/> *Can be +-2 hours from block time. Currently the safest way for time locks/timeout checks is blockchain `height`. Later we'll introduce `lastBlock` structure with a reliable `timestamp` field.* | Long |
| version | Transaction version | Long |
| sender | Sender address | String |
| senderPublicKey | Sender public key | ByteVector |
| bodyBytes | Transaction body | ByteVector |
| proofs | List of transaction proofs | List\[ByteVector\] |

But **Genesis transaction** doesn't have fields: **sender**, **senderPublicKey**, **bodyBytes** and **proofs** 

## Issuing Assets

| field | Description | Type | [IssueTransaction](https://docs.wavesplatform.com/waves-client/assets-management/issue-an-asset.html) | [ReissueTransaction](https://docs.wavesplatform.com/waves-client/assets-management/issue-an-asset.html) | [BurnTransaction](https://docs.wavesplatform.com/waves-client/assets-management/burn-an-asset.html) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| quantity | Return a quantityof asset which are involved in transactiona | Long number | + | + | + |
| name | Return a name of asset | ByteVector | + |  |  |
| description | Return a descriptions of asset | ByteVectore | + |  |  |
| reissuable | Return "true" is the asset are reissuable and "false" otherwise | Boolean | + | + |  |
| decimals | Return a number of symbols after comma | Long | + |  |  |
| assetId | Return id of an existed asset | ByteVector |  | + | + |

## Transfers

* PaymentTransaction is an obsolete version of TransferTransaction

| Field | Description | TransferTransaction | [MassTransferTransaction](https://docs.wavesplatform.com/technical-details/mass-transfer-transaction.html) | PaymentTransaction\* |
| :--- | :--- | :--- | :--- | :--- |
| feeAssetId | Return an id of fee's asset | + | + |  |
| amount | Return the amount of transferred asset | + |  | + |
| assetId | Return id of the asset being transferred | + | + |  |
| recipient | Return transfer recipient as address or alias | + |  | + |
| attachment | Return an arbitrary attachment of transfer | + | + |  |
| totalAmount | Return a total amount of transferred asset |  | + |  |
| transfers | Return all transfer's transactions of mass transfer |  | + |  |
| transferCount | Return a total count of transfers in mass transfer |  | + |  |

## Leasing

LeaseTransaction

| Field | Description |
| :--- | :--- |
| amount | Return an amount of asset which are leased |
| recipient | Return a recipient address as addressOrAliasType |

LeaseCancelTransaction

| Field | Description |
| :--- | :--- |
| leaseId | Return an id of cancelled leasing |

## Exchange Transaction and Order

ExchangeTransaction is the transaction from DEX [Matcher](https://docs.wavesplatform.com/platform-features/decentralized-cryptocurrency-exchange-dex.html)

| Field | Description | Type |
| :--- | :--- | :--- |
| buyOrder | return an order that is bought | orderType\(typeRef\) |
| sellOrder | return an order that is sold | orderType\(typeRef\) |
| price | return a deal's price | Long number |
| amount | return a deal's amount | Long number |
| buyMatcherFee | return a Matcher's fee from the buy order | Long number |
| sellMatcherFee | return a Matcher's fee from the sell order | Long number |

Order for Matcher's order book

| Field | Description | Type |
| :--- | :--- | :--- |
| senderPublicKey | Sender's public key | ByteVector |
| matcherPublicKey | Matcher public key | ByteVector |
| assetPair | Return asset pair type | assetPairType.typeRef |
| orderType | Return the order type: buyType or sellType | - |
| price | Return the order price | Long number |
| amount | Return the number of assets assigned by this order | Long number |
| timestamp | Return the order's placement unix timestamp \* 1000 | Long number of ms |
| expiration | Return the order's expiration timestamp | Long number |
| matcherFee | Return the matcher fee for this order | Long number |
| signature | Return the signature of order's sender | ByteVector |

## Other

CreateAliasTransaction can create a personal [Alias](https://docs.wavesplatform.com/waves-client/account-management/creating-an-alias.html)

| Field | Description | Type |
| :--- | :--- | :--- |
| alias | Return an alias name | String |

GenesisTransaction

| Field | Description | Type |
| :--- | :--- | :--- |
| amount | Return an initial amount of assets | Long number |
| recipient | return an address for initial assets placing as address | String |

DataTransaction, [here](https://docs.wavesplatform.com/technical-details/data-transaction.html) you can find more details about Data Transaction.

| Field | Description | Type |
| :--- | :--- | :--- |
| data | Returns the data | List\[DataEntriesType\] |

SetScriptTransaction sets the script which verifies all outgoing transactions. The set script can be changed by another SetScriptTransaction call unless it's prohibited by a previously set script.

| Field | Description | Type |
| :--- | :--- | :--- |
| script | Returns a script | Option\[ByteVector\] |

SponsorFeeTransaction, [here](https://docs.wavesplatform.com/technical-details/sponsored-fee.html) you can find more details about fee sponsorship.

| Field | Description | Type |
| :--- | :--- | :--- |
| assetId | Return an asset id | ByteVector |
| minSponsoredAssetFee | Return a minimal sponsored asset fee | Option\[Long\] |

## Predefined functions

WavesContracts standard library not only contains predefined data types and instances, but also predefined functions that can be called. Some of them are pure, others can access blockchain state.

## Operators

| Operator | Description |
| :--- | :--- |
| **+, -, \*, /, %** | Integer arithmetic, Size of output string is limited by 32767 characters, size of byte vector is limited by 65536 bytes. **+** is also used for string and byte vector concatenation. |
| **&gt;=, &lt;=, &gt;, &lt;** | Comparison integer-integer or strings-string |
| **==, !=** | Comparison any object of same type |
| Integer** -, **boolean** !** | Unary operators |

## Pure functions

| Function Name | Description |
| :--- | :--- |
| size | For lists, strings and byte vectors |
| take, drop, takeRight, dropRight | For strings and byte vectors |
| toBytes | For booleans, numbers and strings |
| toString | For booleans and numbers |
| isDefined | Tells whether an **Option** is something or nothing |
| extract | Extracts value from an **Option** |
| throw\(message\), throw\(\) | Terminates execution. The message is optional but can help figuring out why a script fails. |

## Waves context functions

| Function Name | Description | Type |
| :--- | :--- | :--- |
| addressFromPublicKey | Get address from public key | ByteVector =&gt; addressType |
| addressFromRecipient | Get address from recipient | Option\[ByteVector\] =&gt; addressType |
| addressFromString | Get address from string \(seed\) | String =&gt; Option\[Address\] |
| assetBalance | Provides balance info for any account | addressOrAliasType =&gt; Long |
| transactionById | Provides tx in blockchain by id | ByteVector =&gt; Option\[Transaction\] |
| transactionHeightById | Provides height of tx in blockchain by id | ByteVector =&gt; Option\[Long\] |
| wavesBalance | Provides balance info for any account | addressOrAliasType =&gt; Long |

`DataTransaction`can set/overwrite a typed primitive value for a key on account of sender. These fields can be accessed from WavesContracts via:

| Function Name | Type |
| :--- | :--- |
| getInteger | \(accountAddress: ByteVector, key: String\) =&gt; Option\[Long\] |
| getBoolean | \(accountAddress: ByteVector, key: String\) =&gt; Option\[Boolean\] |
| getBinary | \(accountAddress: ByteVector, key: String\) =&gt; Option\[ByteVector\] |
| getString | \(accountAddress: ByteVector, key: String\) =&gt; Option\[String\] |

The four functions above have overloads that access data stored in a Data transaction, using either key or array index, e.g.

| Function Name | Type |
| :--- | :--- |
| getInteger | \(data: List\[DataEntry\], key: String\) =&gt; Option\[Long\] |
| getString | \(data: List\[DataEntry\], index: Long\) =&gt; String |

## Crypto functions

| Function Name | Description | Type |
| :--- | :--- | :--- |
| sigVerify | Validate signature for bytes and public key | \(body: ByteVector, signature: ByteVector, pubKey: ByteVector\) =&gt; Boolean |
| keccak256,blake2b256, sha256 | Computes the bit hash | ByteVector =&gt; ByteVector |
| fromBase58String, fromBase64String | Get string from base58 and base64 | String =&gt; ByteVector |
| toBase58String, toBase64String | Convert to base58 and base 64 string | ByteVector =&gt; String |



