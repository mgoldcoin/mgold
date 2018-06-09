# Types
## General fields
This fields are usual for all transaction types (except GenesisTransaction, it has no `.proven` field):

* `.header` - 
  - `.id` - return a transaction's idByteArray
  - `.fee` - return a transaction's fee as a Long number
  - `.timestamp` - return a transaction's unix timestamp * 1000 as Long number of ms
  - `.version` - return a transaction's version as a Long number

* `.proven` - 
   - `.senderPk` - return the sender public key as ByteArray
   - `.bodyBytes` - return ByteArray
   - `.proofs` - return the list of proofs for transaction as List[ByteArray]
## Group 1

| field	| IssueTransaction |	ReissueTransaction	| BurnTransaction |
| ------------- | ------------- | ------------- | ------------- |
| quantity	| + |	+	| + |
| name	| +	| | | 
| description |	+ |		| |
| reissuable |	+ |	+	| |
| decimals |	+		| | |
| script	| + |		|||
| assetId	|	 | + | + |

* `.quantity` - return a quantity of asset which are involved in transaction as a Long number
* `.name` - return a name of asset as ByteArray
* `.description` - return a descriptions of asset as ByteArray
* `.reissuable` - return "true" is the asset are reissuable and "false" otherwise (Boolean)
* `.decimals` - return a number of simbols after comma as a Long
* `.script` - return a script if it is a smart asset and None otherwise (Option[ByteArray])
* `.assetId` - return id of an existed asset as ByteArray

## Group 2

| field | TransferTransaction	| MassTransferTransaction	| PaymentTransaction |
| ------------- | ------------- | ------------- | ------------- |
| feeAssetId	| +	| +	| |
| amount	| +	|	 | + | 
| transferAssetId	| +	| 	|  | 
| recepient |	+	|	| + |
| attachment	| +	| +	| | 
| assetId	|	+ |	| |
| totalAmount	| |	+	| |
| transfers	|		| + | |
|transferCount|	|	+ |	| 
|recepient|+|||

* `.feeAssetId` - return an id of fee's asset as Option[ByteArray]
* `.assetId` - return an id of transferred asset as Option[ByteArray]
* `.totalAmount` - return a total amount of transferred asset as a Long number 
* `.transfers` - return all transfer's transactions of mass transfer as List[Transfer]
* `.transferCount` - return a total count of transfers in mass transfer as a Long number 
* `.attachment` - return an arbitrary attachment of transfer as ByteArray

## Leasing
* LeaseTransaction
   - `.amount` - return an amount of asset which are leased as a Long number
   - `.recepient` -	return a recepient adress as addressOrAliasType  
* LeaseCancelTransaction - 
   - `.leaseId` - return an id of cancelled leasing

# Exchange Transaction and Order 
* `ExchangeTransaction` - 
  - `.buyOrder` - return an order that is bought as orderType.typeRef,
  - `.sellOrder` -  return an order that is sold as orderType.typeRef,
  - `.price` - return a deal's price as a Long number
  - `.amount` - return a deal's amount as a Long number
  - `.buyMatcherFee` - return a Matcher's fee from the buy order as a Long number
  - `.sellMatcherFee` - return a Matcher's fee from the sell order as a Long number
* `Order`   
  - `senderPublicKey` - return ByteArray, sender's public key
  - `.matcherPublicKey` - return ByteArray, matcher public key
  - `.assetPair` - return assetPairType.typeRef
  - `.orderType` - return the order type: buyType or sellType 
  - `.price` - return the order price as Long number
  - `.amount` - return the number of assets assigned by this order as Long number
  - `.timestamp` - return the order's placement unix timestamp * 1000 as Long number of ms
  - `.expiration` - return the order's expiration timestamp as Long number
  - `.matcherFee` - return the matcher fee for this order as Long number
  - `.signature` - return the signature of order's sender as ByteArray 
    
## Other
* `CreateAliasTransaction` - 
   - `.alias` - return an alias name as String
* GenesisTransaction - 
   - `.amount` - return Long
   - `.recipient` - return Adress
* DataTransaction -
   - `.data` - List[DataEntriesType]
* SetScriptTransaction - 
   - `.script` - Option[ByteArray]
* SponsorFeeTransaction - 
   - `.assetId` - return ByteArray
   - `.minSponsoredAssetFee` -> Option[Long]
 
		
