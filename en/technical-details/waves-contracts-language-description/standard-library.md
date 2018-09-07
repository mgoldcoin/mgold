# Standard Library

## Common fields
These fields are common for all transaction types:

- `.id` - transaction id as ByteVector
- `.fee` - transaction fee as Long
- `.timestamp` - transaction unix timestamp in milliseconds as Long
- `.version` - transaction version as Long

These fields are common for all transaction types except Genesis:
- `.sender` - sender address
- `.senderPublicKey` - sender public key as ByteVector
- `.bodyBytes` - transaction body as ByteVector
- `.proofs` - list of transaction proofs as List[ByteVector]

## Issuing Assets

| field	| [IssueTransaction](https://docs.wavesplatform.com/waves-client/assets-management/issue-an-asset.html) |	[ReissueTransaction](https://docs.wavesplatform.com/waves-client/assets-management/issue-an-asset.html)	| [BurnTransaction](https://docs.wavesplatform.com/waves-client/assets-management/burn-an-asset.html) |
| ------------- | ------------- | ------------- | ------------- |
| quantity	  | + | + | + |
| name	      | + |   |   |
| description |	+ |   |   |
| reissuable  |	+ |	+ |   |
| decimals    |	+ |   |   |
| assetId	  |   | + | + |

* `.quantity` - return a quantity of asset which are involved in transaction as a Long number
* `.name` - return a name of asset as ByteVector
* `.description` - return a descriptions of asset as ByteVector
* `.reissuable` - return "true" is the asset are reissuable and "false" otherwise (Boolean)
* `.decimals` - return a number of symbols after comma as a Long
* `.assetId` - return id of an existed asset as ByteVector

## Transfers

| field | TransferTransaction	| [MassTransferTransaction](https://docs.wavesplatform.com/technical-details/mass-transfer-transaction.html)	| PaymentTransaction* |
| ------------- | ------------- | ------------- | ------------- |
| feeAssetId	| +	| +	|   |
| amount	    | +	|	| + |
| assetId       | +	| + |   |
| recipient     | + |	| + |
| attachment	| +	| +	|   |
| totalAmount	|   | + |   |
| transfers	    |   | + |   |
| transferCount |   | + |   |

* PaymentTransaction is an obsolete version of TransferTransaction
* `.recipient` - return transfer recipient as address or alias
* `.assetId` - return id of the asset being transferred as Option[ByteVector]
* `.feeAssetId` - return an id of fee's asset as Option[ByteVector]
* `.totalAmount` - return a total amount of transferred asset as a Long number
* `.transfers` - return all transfer's transactions of mass transfer as List[Transfer]
* `.transferCount` - return a total count of transfers in mass transfer as a Long number
* `.attachment` - return an arbitrary attachment of transfer as ByteVector

## Leasing
* LeaseTransaction
   - `.amount` - return an amount of asset which are leased as a Long number
   - `.recipient` -	return a recipient address as addressOrAliasType  
* LeaseCancelTransaction -
   - `.leaseId` - return an id of cancelled leasing

## Exchange Transaction and Order
* `ExchangeTransaction` - the transaction from DEX [Matcher](https://docs.wavesplatform.com/platform-features/decentralized-cryptocurrency-exchange-dex.html)
  - `.buyOrder` - return an order that is bought as orderType.typeRef,
  - `.sellOrder` -  return an order that is sold as orderType.typeRef,
  - `.price` - return a deal's price as a Long number
  - `.amount` - return a deal's amount as a Long number
  - `.buyMatcherFee` - return a Matcher's fee from the buy order as a Long number
  - `.sellMatcherFee` - return a Matcher's fee from the sell order as a Long number
* `Order` - an order for Matcher's order book   
  - `senderPublicKey` - return ByteVector, sender's public key
  - `.matcherPublicKey` - return ByteVector, matcher public key
  - `.assetPair` - return assetPairType.typeRef
  - `.orderType` - return the order type: buyType or sellType
  - `.price` - return the order price as Long number
  - `.amount` - return the number of assets assigned by this order as Long number
  - `.timestamp` - return the order's placement unix timestamp * 1000 as Long number of ms
  - `.expiration` - return the order's expiration timestamp as Long number
  - `.matcherFee` - return the matcher fee for this order as Long number
  - `.signature` - return the signature of order's sender as ByteVector

## Other
* `CreateAliasTransaction` - create a personal [Alias](https://docs.wavesplatform.com/waves-client/account-management/creating-an-alias.html)
   - `.alias` - return an alias name as String
* GenesisTransaction -
   - `.amount` - return an initial amount of assets as a Long number
   - `.recipient` - return an address for initial assets placing as Address
* DataTransaction -[Here](https://docs.wavesplatform.com/technical-details/data-transaction.html) you can find more details about Data Transaction.
   - `.data` - List[DataEntriesType]
* SetScriptTransaction - sets the script which verifies all outgoing transactions. The set script can be changed by another SetScriptTransaction call unless it's prohibited by a previously set script.
   - `.script` - Option[ByteVector]
* SponsorFeeTransaction - [Here](https://docs.wavesplatform.com/technical-details/sponsored-fee.html)  you can find more details about fee sponsorship.
   - `.assetId` - return an asset id as ByteVector
   - `.minSponsoredAssetFee` - return a minimal sponsored asset fee as Option[Long]

## Predefined functions

WavesContracts standard library not only contains predefined data types and instances, but also predefined functions that can be called. Some of them are pure, others can access blockchain state.

* Operators:
   - Integer arithmetic: `+`, `-`, `*`, `/`, `%`
   - `+` is also used for string and byte vector concatenation. Size of output string is limited by 32767 characters, size of byte vector is limited by 65536 bytes.
   - Comparison integer-integer or strings-string: `>=`, `<=`, `>`, `<`
   - Comparison any object of same type: `==`, `!=`
   - Unary operators: integer `-`, boolean `!`

* Pure functions:
   - `getElement(list, index)`: accesses element by index
   - `size`: for lists, strings and byte vectors
   - `take`, `drop`, `takeRight`, `dropRight` for strings and byte vectors
   - `toBytes` for booleans, numbers and strings
   - `toString` for booleans and numbers
   - `isDefined` tells whether an `Option` is something or nothing
   - `extract` extracts value from an `Option`
   - `throw(message)` terminates execution. The message is optional but can help figuring out why a script fails

* Waves context functions:
   - `addressFromPublicKey` : `ByteVector => addressType`
   - `addressFromRecipient` : `Option[ByteVector] => addressType`
   - `addressFromString` : `String => Option[Address]`
   - `assetBalance`: `addressOrAliasType => Long` - provide balance info for any account
   - `transactionById` : `ByteVector => Option[Transaction]` - provides tx in blockchain by id
   - `transactionHeightById`: `ByteVector => Option[Long]` - provides height of tx in blockchain by id
   - `wavesBalance`: `addressOrAliasType => Long` - provide balance info for any account

* `DataTransaction`can set/overwrite a typed primitive value for a key on account of sender. These fields can be accessed from WavesContracts via:
   - `getInteger`:`(accountAddress: ByteVector, key: String) => Option[Long]`
   - `getBoolean`:`(accountAddress: ByteVector, key: String) => Option[Boolean]`
   - `getBinary`:`(accountAddress: ByteVector, key: String) => Option[ByteVector]`
   - `getString`:`(accountAddress: ByteVector, key: String) => Option[String]`

* The four functions above have overloads that access data stored in a Data transaction, using either key or array index, e.g.
   - `getInteger`:`(data: List[DataEntry], key: String) => Option[Long]`
   - `getString`:`(data: List[DataEntry], index: Long) => String`

* Crypto functions:
	- `sigVerify`:`(body: ByteVector, signature: ByteVector, pubKey: ByteVector) => Boolean`
	- `keccak256`,`blake2b256`, `sha256` : `ByteVector => ByteVector`
	- `fromBase58String'`, `fromBase64String'`: `String => ByteVector` 		
	- `toBase58String'`, `toBase64String'`: `ByteVector => String` 	
