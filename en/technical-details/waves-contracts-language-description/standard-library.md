# Standard Library

# Types
|type|adds|
|-------|---|
| [Unit](#Unit) | Native |   
| [Int](#Int) | Native |   
| [Boolean](#Boolean) | Native |   
| [ByteVector](#ByteVector) | Native |   
| [String](#String) | Native |   
| [Address](#Address) | **bytes**  [ByteVector](#ByteVector)   |
| [Alias](#Alias) |   <br/>**alias**  [String](#String)   |
| [Transfer](#Transfer) |  <br/>**recipient** [Address](#Address) [Alias](#Alias)<br/> **amount**  [Int](#Int)   |
| [Order](#Order) | **id** [ByteVector](#ByteVector) <br/>**matcherPublicKey**  [ByteVector](#ByteVector) <br/>**assetPair** [AssetPair](#AssetPair) <br/>**orderType** [Buy](#Buy) [Sell](#Sell) <br/>**price**  [Int](#Int) <br/>**amount**  [Int](#Int) <br/>**timestamp**  [Int](#Int)  <br/>**expiration**  [Int](#Int)  <br/>**matcherFee**  [Int](#Int)  <br/>**sender** [Address](#Address)  <br/>**senderPublicKey**  [ByteVector](#ByteVector)  <br/>**bodyBytes**  [ByteVector](#ByteVector) <br/>**proofs**  [LIST](#LIST)[ [ByteVector](#ByteVector)] |
| [AssetPair](#AssetPair) |     <br/>**amountAsset**  [OPTION](#OPTION)[ [ByteVector](#ByteVector)]   <br/>**priceAsset**  [OPTION](#OPTION)[ [ByteVector](#ByteVector)] |
| [DataEntry](#DataEntry) |     <br/>**key**  [String](#String)    <br/>**value** [Int](#Int) [Boolean](#Boolean) [ByteVector](#ByteVector) [String](#String)  |
| [Transaction](#Transaction) |    [TransferTransaction](#TransferTransaction) <br/>[IssueTransaction](#IssueTransaction) <br/>[ReissueTransaction](#ReissueTransaction) <br/>[BurnTransaction](#BurnTransaction) <br/>[LeaseTransaction](#LeaseTransaction) <br/>[LeaseCancelTransaction](#LeaseCancelTransaction) <br/>[MassTransferTransaction](#MassTransferTransaction) <br/>[CreateAliasTransaction](#CreateAliasTransaction) <br/>[SetScriptTransaction](#SetScriptTransaction) [<br/>SponsorFeeTransaction](#SponsorFeeTransaction) <br/>[ExchangeTransaction](#ExchangeTransaction) <br/>[DataTransaction](#DataTransaction)
| [GenesisTransaction](#GenesisTransaction) |   <br/>**amount**  [Int](#Int)    <br/>**recipient** [Address](#Address) [Alias](#Alias)    <br/>**id**  [ByteVector](#ByteVector)    <br/>**fee**  [Int](#Int)    <br/>**timestamp**  [Int](#Int)    <br/>**version**  [Int](#Int)  |
| [PaymentTransaction](#PaymentTransaction) |     <br/>**amount**  [Int](#Int)    <br/>**recipient** [Address](#Address) [Alias](#Alias)    <br/>**id**  [ByteVector](#ByteVector)    <br/>**fee**  [Int](#Int)    <br/>**timestamp**  [Int](#Int)    <br/>**version**  [Int](#Int)    <br/>**sender** [Address](#Address)    <br/>**senderPublicKey**  [ByteVector](#ByteVector)    <br/>**bodyBytes**  [ByteVector](#ByteVector)    <br/>**proofs**  [LIST](#LIST)[ [ByteVector](#ByteVector)] |
| [TransferTransaction](#TransferTransaction) |     <br/>**feeAssetId**  [OPTION](#OPTION)[ [ByteVector](#ByteVector)]   <br/>**amount**  [Int](#Int)    <br/>**assetId**  [OPTION](#OPTION)[ [ByteVector](#ByteVector)]   <br/>**recipient** [Address](#Address) [Alias](#Alias)    <br/>**attachment**  [ByteVector](#ByteVector)    <br/>**id**  [ByteVector](#ByteVector)    <br/>**fee**  [Int](#Int)    <br/>**timestamp**  [Int](#Int)    <br/>**version**  [Int](#Int)    <br/>**sender** [Address](#Address)    <br/>**senderPublicKey**  [ByteVector](#ByteVector)    <br/>**bodyBytes**  [ByteVector](#ByteVector)    <br/>**proofs**  [LIST](#LIST)[ [ByteVector](#ByteVector)] |
| [IssueTransaction](#IssueTransaction) |     <br/>**quantity**  [Int](#Int)    <br/>**name**  [ByteVector](#ByteVector)    <br/>**description**  [ByteVector](#ByteVector)    <br/>**reissuable**  [Boolean](#Boolean)    <br/>**decimals**  [Int](#Int)    <br/>**script**  [OPTION](#OPTION)[ [ByteVector](#ByteVector)]   <br/>**id**  [ByteVector](#ByteVector)    <br/>**fee**  [Int](#Int)    <br/>**timestamp**  [Int](#Int)    <br/>**version**  [Int](#Int)    <br/>**sender** [Address](#Address)    <br/>**senderPublicKey**  [ByteVector](#ByteVector)    <br/>**bodyBytes**  [ByteVector](#ByteVector)    <br/>**proofs**  [LIST](#LIST)[ [ByteVector](#ByteVector)] |
| [ReissueTransaction](#ReissueTransaction) |     <br/>**quantity**  [Int](#Int)    <br/>**assetId**  [ByteVector](#ByteVector)    <br/>**reissuable**  [Boolean](#Boolean)    <br/>**id**  [ByteVector](#ByteVector)    <br/>**fee**  [Int](#Int)    <br/>**timestamp**  [Int](#Int)    <br/>**version**  [Int](#Int)    <br/>**sender** [Address](#Address)    <br/>**senderPublicKey**  [ByteVector](#ByteVector)    <br/>**bodyBytes**  [ByteVector](#ByteVector)    <br/>**proofs**  [LIST](#LIST)[ [ByteVector](#ByteVector)] |
| [BurnTransaction](#BurnTransaction) |     <br/>**quantity**  [Int](#Int)    <br/>**assetId**  [ByteVector](#ByteVector)    <br/>**id**  [ByteVector](#ByteVector)    <br/>**fee**  [Int](#Int)    <br/>**timestamp**  [Int](#Int)    <br/>**version**  [Int](#Int)    <br/>**sender** [Address](#Address)    <br/>**senderPublicKey**  [ByteVector](#ByteVector)    <br/>**bodyBytes**  [ByteVector](#ByteVector)    <br/>**proofs**  [LIST](#LIST)[ [ByteVector](#ByteVector)] |
| [LeaseTransaction](#LeaseTransaction) |     <br/>**amount**  [Int](#Int)    <br/>**recipient** [Address](#Address) [Alias](#Alias)    <br/>**id**  [ByteVector](#ByteVector)    <br/>**fee**  [Int](#Int)    <br/>**timestamp**  [Int](#Int)    <br/>**version**  [Int](#Int)    <br/>**sender** [Address](#Address)    <br/>**senderPublicKey**  [ByteVector](#ByteVector)    <br/>**bodyBytes**  [ByteVector](#ByteVector)    <br/>**proofs**  [LIST](#LIST)[ [ByteVector](#ByteVector)] |
| [LeaseCancelTransaction](#LeaseCancelTransaction) |     <br/>**leaseId**  [ByteVector](#ByteVector)    <br/>**id**  [ByteVector](#ByteVector)    <br/>**fee**  [Int](#Int)    <br/>**timestamp**  [Int](#Int)    <br/>**version**  [Int](#Int)    <br/>**sender** [Address](#Address)    <br/>**senderPublicKey**  [ByteVector](#ByteVector)    <br/>**bodyBytes**  [ByteVector](#ByteVector)    <br/>**proofs**  [LIST](#LIST)[ [ByteVector](#ByteVector)] |
| [MassTransferTransaction](#MassTransferTransaction) |     <br/>**feeAssetId**  [OPTION](#OPTION)[ [ByteVector](#ByteVector)]   <br/>**assetId**  [OPTION](#OPTION)[ [ByteVector](#ByteVector)]   <br/>**totalAmount**  [Int](#Int)    <br/>**transfers**  [LIST](#LIST)[ [Transfer](#Transfer)]   <br/>**transferCount**  [Int](#Int)    <br/>**attachment**  [ByteVector](#ByteVector)    <br/>**id**  [ByteVector](#ByteVector)    <br/>**fee**  [Int](#Int)    <br/>**timestamp**  [Int](#Int)    <br/>**version**  [Int](#Int)    <br/>**sender** [Address](#Address)    <br/>**senderPublicKey**  [ByteVector](#ByteVector)    <br/>**bodyBytes**  [ByteVector](#ByteVector)    <br/>**proofs**  [LIST](#LIST)[ [ByteVector](#ByteVector)] |
| [CreateAliasTransaction](#CreateAliasTransaction) |     <br/>**alias**  [String](#String)    <br/>**id**  [ByteVector](#ByteVector)    <br/>**fee**  [Int](#Int)    <br/>**timestamp**  [Int](#Int)    <br/>**version**  [Int](#Int)    <br/>**sender** [Address](#Address)    <br/>**senderPublicKey**  [ByteVector](#ByteVector)    <br/>**bodyBytes**  [ByteVector](#ByteVector)    <br/>**proofs**  [LIST](#LIST)[ [ByteVector](#ByteVector)] |
| [SetScriptTransaction](#SetScriptTransaction) |     <br/>**script**  [OPTION](#OPTION)[ [ByteVector](#ByteVector)]   <br/>**id**  [ByteVector](#ByteVector)    <br/>**fee**  [Int](#Int)    <br/>**timestamp**  [Int](#Int)    <br/>**version**  [Int](#Int)    <br/>**sender** [Address](#Address)    <br/>**senderPublicKey**  [ByteVector](#ByteVector)    <br/>**bodyBytes**  [ByteVector](#ByteVector)    <br/>**proofs**  [LIST](#LIST)[ [ByteVector](#ByteVector)] |
| [SponsorFeeTransaction](#SponsorFeeTransaction) |     <br/>**assetId**  [ByteVector](#ByteVector)    <br/>**minSponsoredAssetFee**  [OPTION](#OPTION)[ [Int](#Int)]   <br/>**id**  [ByteVector](#ByteVector)    <br/>**fee**  [Int](#Int)    <br/>**timestamp**  [Int](#Int)    <br/>**version**  [Int](#Int)    <br/>**sender** [Address](#Address)    <br/>**senderPublicKey**  [ByteVector](#ByteVector)    <br/>**bodyBytes**  [ByteVector](#ByteVector)    <br/>**proofs**  [LIST](#LIST)[ [ByteVector](#ByteVector)] |
| [ExchangeTransaction](#ExchangeTransaction) |     <br/>**buyOrder** [Order](#Order)    <br/>**sellOrder** [Order](#Order)    <br/>**price**  [Int](#Int)    <br/>**amount**  [Int](#Int)    <br/>**buyMatcherFee**  [Int](#Int)    <br/>**sellMatcherFee**  [Int](#Int)    <br/>**id**  [ByteVector](#ByteVector)    <br/>**fee**  [Int](#Int)    <br/>**timestamp**  [Int](#Int)    <br/>**version**  [Int](#Int)    <br/>**sender** [Address](#Address)    <br/>**senderPublicKey**  [ByteVector](#ByteVector)    <br/>**bodyBytes**  [ByteVector](#ByteVector)    <br/>**proofs**  [LIST](#LIST)[ [ByteVector](#ByteVector)] |
| [DataTransaction](#DataTransaction) |     <br/>**data**  [LIST](#LIST)[ [DataEntry](#DataEntry)]   <br/>**id**  [ByteVector](#ByteVector)    <br/>**fee**  [Int](#Int)    <br/>**timestamp**  [Int](#Int)    <br/>**version**  [Int](#Int)    <br/>**sender** [Address](#Address)    <br/>**senderPublicKey**  [ByteVector](#ByteVector)    <br/>**bodyBytes**  [ByteVector](#ByteVector)    <br/>**proofs**  [LIST](#LIST)[ [ByteVector](#ByteVector)] |

# Input variables
|vars|type|doc|
|-------|---|---|
| unit| [Unit](#Unit) | Single instance value|
| height| [Int](#Int) | Current blockchain height|
| tx| [Order](#Order) [TransferTransaction](#TransferTransaction)<br/> [IssueTransaction](#IssueTransaction)<br/> [ReissueTransaction](#ReissueTransaction)<br/> [BurnTransaction](#BurnTransaction)<br/> [LeaseTransaction](#LeaseTransaction)<br/> [LeaseCancelTransaction](#LeaseCancelTransaction)<br/> [MassTransferTransaction](#MassTransferTransaction)<br/> [CreateAliasTransaction](#CreateAliasTransaction)<br/> [SetScriptTransaction](#SetScriptTransaction)<br/> [SponsorFeeTransaction](#SponsorFeeTransaction)<br/> [ExchangeTransaction](#ExchangeTransaction)<br/> [DataTransaction](#DataTransaction)|  Processing transaction|


# Functions
|funcs|doc|params|type|
|-------|---|---|---|
| fraction|Multiply and dividion with big integer intermediate representation|  value [Int](#Int) multiplyer    numerator [Int](#Int) multiplyer    denominator [Int](#Int) divisor  | [Int](#Int)
| size|Size of bytes vector|  byteVector [ByteVector](#ByteVector) vector  | [Int](#Int)
| toBytes|Bytes array representation|  b [Boolean](#Boolean) value  | [ByteVector](#ByteVector)
| toBytes|Bytes array representation|  n [Int](#Int) value  | [ByteVector](#ByteVector)
| toBytes|Bytes array representation|  s [String](#String) value  | [ByteVector](#ByteVector)
| take|Take firsts bytes subvector|  xs [ByteVector](#ByteVector) vector    number [Int](#Int) Bytes number  | [ByteVector](#ByteVector)
| drop|Skip firsts bytes|  xs [ByteVector](#ByteVector) vector    number [Int](#Int) Bytes number  | [ByteVector](#ByteVector)
| takeRight|Take vector tail|  @xs [ByteVector](#ByteVector) vector    @number [Int](#Int) taking size  | [ByteVector](#ByteVector)
| dropRight|Cut vectors tail|  @xs [ByteVector](#ByteVector) vector    @number [Int](#Int) cuting size  | [ByteVector](#ByteVector)
| size|Scting size in characters|  xs [String](#String) string  | [Int](#Int)
| toString|String representation|  b [Boolean](#Boolean) value  | [String](#String)
| toString|String representation|  n [Int](#Int) value  | [String](#String)
| take|Take string prefix|  xs [String](#String) sctring    number [Int](#Int) prefix size in characters  | [String](#String)
| drop|Remmove sring prefix|  xs [String](#String) string    number [Int](#Int) prefix size  | [String](#String)
| takeRight|Take string suffix|  @xs [String](#String) String    @number [Int](#Int) suffix size in characters  | [String](#String)
| dropRight|Remove string suffix|  @xs [String](#String) string    @number [Int](#Int) suffix size in characters  | [String](#String)
| _isInstanceOf|Internal function to check value type|  obj T value    of [String](#String) type name  | [Boolean](#Boolean)
| isDefined|Check the value is defined|  @a OPTION[ T] Option value  | [Boolean](#Boolean)
| extract|Extract value from option or fail|  @a OPTION[ T] Optional value  |  T
| throw|Fail script|  err [String](#String) Error message  | [Nothing](#Nothing)
| throw|Fail script|<ul></ul>| [Nothing](#Nothing)
| *|Integer multiplication|  a [Int](#Int) multiplyer    b [Int](#Int) multiplyer  | [Int](#Int)
| /|Integer devision|  a [Int](#Int) divisible    b [Int](#Int) divisor  | [Int](#Int)
| %|Modulo|  a [Int](#Int) divisible    b [Int](#Int) divisor  | [Int](#Int)
| +|Integer sum|  a [Int](#Int) term    b [Int](#Int) term  | [Int](#Int)
| -|Integer substitution|  a [Int](#Int) term    b [Int](#Int) term  | [Int](#Int)
| +|Limited strings concatination|  a [String](#String) prefix    b [String](#String) suffix  | [String](#String)
| +|Limited bytes vectors concatination|  a [ByteVector](#ByteVector) prefix    b [ByteVector](#ByteVector) suffix  | [ByteVector](#ByteVector)
| &#61;&#61;|Equality|  a T value    b T value  | [Boolean](#Boolean)
| !&#61;|Inequality|  @a T value    @b T value  | [Boolean](#Boolean)
| &gt;&#61;|Integer grater or equal comparation|  a [Int](#Int) term    b [Int](#Int) term  | [Boolean](#Boolean)
| &gt;|Integer grater comparation|  a [Int](#Int) term    b [Int](#Int) term  | [Boolean](#Boolean)
| getElement|Get list element by position|  arr LIST[ T] list    pos [Int](#Int) element position  |  T
| size|Size of list|  arr LIST[ T] list  | [Int](#Int)
| -|Change integer sign|  @n [Int](#Int) value  | [Int](#Int)
| !|unary negation|  @p [Boolean](#Boolean) boolean  | [Boolean](#Boolean)
| keccak256|256 bit Keccak/SHA-3/TIPS-202|  bytes [ByteVector](#ByteVector) value  | [ByteVector](#ByteVector)
| blake2b256|256 bit BLAKE|  bytes [ByteVector](#ByteVector) value  | [ByteVector](#ByteVector)
| sha256|256 bit SHA-2|  bytes [ByteVector](#ByteVector) value  | [ByteVector](#ByteVector)
| sigVerify|check signature|  message [ByteVector](#ByteVector) value    sig [ByteVector](#ByteVector) signature    pub [ByteVector](#ByteVector) public key  | [Boolean](#Boolean)
| toBase58String|Base58 encode|  bytes [ByteVector](#ByteVector) value  | [String](#String)
| fromBase58String|Base58 decode|  str [String](#String) base58 encoded string  | [ByteVector](#ByteVector)
| toBase64String|Base64 encode|  bytes [ByteVector](#ByteVector) value  | [String](#String)
| fromBase64String|Base64 decode|  str [String](#String) base64 encoded string  | [ByteVector](#ByteVector)
| transactionById|Lookup transaction|  id [ByteVector](#ByteVector) transaction Id  | [Unit](#Unit) [GenesisTransaction](#GenesisTransaction) [PaymentTransaction](#PaymentTransaction) [TransferTransaction](#TransferTransaction) [IssueTransaction](#IssueTransaction) [ReissueTransaction](#ReissueTransaction) [BurnTransaction](#BurnTransaction) [LeaseTransaction](#LeaseTransaction) [LeaseCancelTransaction](#LeaseCancelTransaction) [MassTransferTransaction](#MassTransferTransaction) [CreateAliasTransaction](#CreateAliasTransaction) [SetScriptTransaction](#SetScriptTransaction) [SponsorFeeTransaction](#SponsorFeeTransaction) [ExchangeTransaction](#ExchangeTransaction) [DataTransaction](#DataTransaction)
| transactionHeightById|get height when transaction was stored to blockchain|  id [ByteVector](#ByteVector) transaction Id  | OPTION[ [Int](#Int)]
| getInteger|get data from the account state|  addressOrAlias [Address](#Address) [Alias](#Alias) account    key [String](#String) key  | OPTION[ [Int](#Int)]
| getBoolean|get data from the account state|  addressOrAlias [Address](#Address) [Alias](#Alias) account    key [String](#String) key  | OPTION[ [Boolean](#Boolean)]
| getBinary|get data from the account state|  addressOrAlias [Address](#Address) [Alias](#Alias) account    key [String](#String) key  | OPTION[ [ByteVector](#ByteVector)]
| getString|get data from the account state|  addressOrAlias [Address](#Address) [Alias](#Alias) account    key [String](#String) key  | OPTION[ [String](#String)]
| getInteger|Find and extract data by key|  data LIST[ [DataEntry](#DataEntry)] DataEntry vector, usally tx.data    key [String](#String) key  | OPTION[ [Int](#Int)]
| getBoolean|Find and extract data by key|  data LIST[ [DataEntry](#DataEntry)] DataEntry vector, usally tx.data    key [String](#String) key  | OPTION[ [Boolean](#Boolean)]
| getBinary|Find and extract data by key|  data LIST[ [DataEntry](#DataEntry)] DataEntry vector, usally tx.data    key [String](#String) key  | OPTION[ [ByteVector](#ByteVector)]
| getString|Find and extract data by key|  data LIST[ [DataEntry](#DataEntry)] DataEntry vector, usally tx.data    key [String](#String) key  | OPTION[ [String](#String)]
| getInteger|Extract data by index|  @data LIST[ [DataEntry](#DataEntry)] DataEntry vector, usally tx.data    @index [Int](#Int) index  | OPTION[ [Int](#Int)]
| getBoolean|Extract data by index|  @data LIST[ [DataEntry](#DataEntry)] DataEntry vector, usally tx.data    @index [Int](#Int) index  | OPTION[ [Boolean](#Boolean)]
| getBinary|Extract data by index|  @data LIST[ [DataEntry](#DataEntry)] DataEntry vector, usally tx.data    @index [Int](#Int) index  | OPTION[ [ByteVector](#ByteVector)]
| getString|Extract data by index|  @data LIST[ [DataEntry](#DataEntry)] DataEntry vector, usally tx.data    @index [Int](#Int) index  | OPTION[ [String](#String)]
| addressFromPublicKey|Convert public key to account address|  @publicKey [ByteVector](#ByteVector) public key  | [Address](#Address)
| addressFromString|Decode account address|  @string [String](#String) string address represntation  | OPTION[ [Address](#Address)]
| addressFromRecipient|Extract address or lookup alias|  AddressOrAlias [Address](#Address) [Alias](#Alias) address or alias, usually tx.recipient  | [Address](#Address)
| assetBalance|get asset balance for account|  addressOrAlias [Address](#Address) [Alias](#Alias) account    assetId OPTION[ [ByteVector](#ByteVector)] assetId (WAVES if none)  | [Int](#Int)
| wavesBalance|get WAVES balanse for account|  @addressOrAlias [Address](#Address) [Alias](#Alias) account  | [Int](#Int)

# Common fields
|tx type|id | fee| timestamp|version|sender|senderPublicKey|bodyBytes|proofs|
|---|---|---|---|---|---|---|---|---|
|TransferTransaction|  [ByteVector](#ByteVector) |  [Int](#Int) |  [Int](#Int) |  [Int](#Int) |  [Address](#Address) |  [ByteVector](#ByteVector) |  [ByteVector](#ByteVector) |  LIST[[ByteVector](#ByteVector)]|
|IssueTransaction|  [ByteVector](#ByteVector) |  [Int](#Int) |  [Int](#Int) |  [Int](#Int) |  [Address](#Address) |  [ByteVector](#ByteVector) |  [ByteVector](#ByteVector) |  LIST[[ByteVector](#ByteVector)]|
|ReissueTransaction|  [ByteVector](#ByteVector) |  [Int](#Int) |  [Int](#Int) |  [Int](#Int) |  [Address](#Address) |  [ByteVector](#ByteVector) |  [ByteVector](#ByteVector) |  LIST[[ByteVector](#ByteVector)]|
|BurnTransaction|  [ByteVector](#ByteVector) |  [Int](#Int) |  [Int](#Int) |  [Int](#Int) |  [Address](#Address) |  [ByteVector](#ByteVector) |  [ByteVector](#ByteVector) |  LIST[[ByteVector](#ByteVector)]|
|LeaseTransaction|  [ByteVector](#ByteVector) |  [Int](#Int) |  [Int](#Int) |  [Int](#Int) |  [Address](#Address) |  [ByteVector](#ByteVector) |  [ByteVector](#ByteVector) |  LIST[[ByteVector](#ByteVector)]|
|LeaseCancelTransaction|  [ByteVector](#ByteVector) |  [Int](#Int) |  [Int](#Int) |  [Int](#Int) |  [Address](#Address) |  [ByteVector](#ByteVector) |  [ByteVector](#ByteVector) |  LIST[[ByteVector](#ByteVector)]|
|MassTransferTransaction|  [ByteVector](#ByteVector) |  [Int](#Int) |  [Int](#Int) |  [Int](#Int) |  [Address](#Address) |  [ByteVector](#ByteVector) |  [ByteVector](#ByteVector) |  LIST[[ByteVector](#ByteVector)]|
|CreateAliasTransaction|  [ByteVector](#ByteVector) |  [Int](#Int) |  [Int](#Int) |  [Int](#Int) |  [Address](#Address) |  [ByteVector](#ByteVector) |  [ByteVector](#ByteVector) |  LIST[[ByteVector](#ByteVector)]|
|SetScriptTransaction|  [ByteVector](#ByteVector) |  [Int](#Int) |  [Int](#Int) |  [Int](#Int) |  [Address](#Address) |  [ByteVector](#ByteVector) |  [ByteVector](#ByteVector) |  LIST[[ByteVector](#ByteVector)]|
|SponsorFeeTransaction|  [ByteVector](#ByteVector) |  [Int](#Int) |  [Int](#Int) |  [Int](#Int) |  [Address](#Address) |  [ByteVector](#ByteVector) |  [ByteVector](#ByteVector) |  LIST[[ByteVector](#ByteVector)]|
|ExchangeTransaction|  [ByteVector](#ByteVector) |  [Int](#Int) |  [Int](#Int) |  [Int](#Int) |  [Address](#Address) |  [ByteVector](#ByteVector) |  [ByteVector](#ByteVector) |  LIST[[ByteVector](#ByteVector)]|
|DataTransaction|  [ByteVector](#ByteVector) |  [Int](#Int) |  [Int](#Int) |  [Int](#Int) |  [Address](#Address) |  [ByteVector](#ByteVector) |  [ByteVector](#ByteVector) |  LIST[[ByteVector](#ByteVector)]|


 <h1>Transfers fields</h1><table><tr><td></td><td>PaymentTransaction</td><td>TransferTransaction</td><td>MassTransferTransaction</td><tr><tr><td>amount</td><td>  <a href="#Int">Int</a></td><td>  <a href="#Int">Int</a></td><td>-</td></tr><tr><td>recipient</td><td>    <a href="#Address">Address</a> <a href="#Alias">Alias</a></td><td>    <a href="#Address">Address</a> <a href="#Alias">Alias</a></td><td>-</td></tr><tr><td>feeAssetId</td><td>-</td><td>  OPTION[<a href="#ByteVector">ByteVector</a>]</td><td>  OPTION[<a href="#ByteVector">ByteVector</a>]</td></tr><tr><td>assetId</td><td>-</td><td>  OPTION[<a href="#ByteVector">ByteVector</a>]</td><td>  OPTION[<a href="#ByteVector">ByteVector</a>]</td></tr><tr><td>attachment</td><td>-</td><td>  <a href="#ByteVector">ByteVector</a></td><td>  <a href="#ByteVector">ByteVector</a></td></tr><tr><td>totalAmount</td><td>-</td><td>-</td><td>  <a href="#Int">Int</a></td></tr><tr><td>transfers</td><td>-</td><td>-</td><td>  LIST[<a href="#Transfer">Transfer</a>]</td></tr><tr><td>transferCount</td><td>-</td><td>-</td><td>  <a href="#Int">Int</a></td></tr></table>

 <h1>Issuing assets fields</h1><table><tr><td></td><td>IssueTransaction</td><td>ReissueTransaction</td><td>BurnTransaction</td><td>SponsorFeeTransaction</td><tr><tr><td>quantity</td><td>  <a href="#Int">Int</a></td><td>  <a href="#Int">Int</a></td><td>  <a href="#Int">Int</a></td><td>-</td></tr><tr><td>name</td><td>  <a href="#ByteVector">ByteVector</a></td><td>-</td><td>-</td><td>-</td></tr><tr><td>description</td><td>  <a href="#ByteVector">ByteVector</a></td><td>-</td><td>-</td><td>-</td></tr><tr><td>reissuable</td><td>  <a href="#Boolean">Boolean</a></td><td>  <a href="#Boolean">Boolean</a></td><td>-</td><td>-</td></tr><tr><td>decimals</td><td>  <a href="#Int">Int</a></td><td>-</td><td>-</td><td>-</td></tr><tr><td>script</td><td>  OPTION[<a href="#ByteVector">ByteVector</a>]</td><td>-</td><td>-</td><td>-</td></tr><tr><td>assetId</td><td>-</td><td>  <a href="#ByteVector">ByteVector</a></td><td>  <a href="#ByteVector">ByteVector</a></td><td>  <a href="#ByteVector">ByteVector</a></td></tr><tr><td>minSponsoredAssetFee</td><td>-</td><td>-</td><td>-</td><td>  OPTION[<a href="#Int">Int</a>]</td></tr></table>

 <h1>Leasing fields</h1><table><tr><td></td><td>LeaseTransaction</td><td>LeaseCancelTransaction</td><tr><tr><td>amount</td><td>  <a href="#Int">Int</a></td><td>-</td></tr><tr><td>recipient</td><td>    <a href="#Address">Address</a> <a href="#Alias">Alias</a></td><td>-</td></tr><tr><td>leaseId</td><td>-</td><td>  <a href="#ByteVector">ByteVector</a></td></tr></table>

 <h1>Other fields</h1><table><tr><td></td><td>CreateAliasTransaction</td><td>SetScriptTransaction</td><td>ExchangeTransaction</td><td>DataTransaction</td><tr><tr><td>alias</td><td>  <a href="#String">String</a></td><td>-</td><td>-</td><td>-</td></tr><tr><td>script</td><td>-</td><td>  OPTION[<a href="#ByteVector">ByteVector</a>]</td><td>-</td><td>-</td></tr><tr><td>buyOrder</td><td>-</td><td>-</td><td>  <a href="#Order">Order</a></td><td>-</td></tr><tr><td>sellOrder</td><td>-</td><td>-</td><td>  <a href="#Order">Order</a></td><td>-</td></tr><tr><td>price</td><td>-</td><td>-</td><td>  <a href="#Int">Int</a></td><td>-</td></tr><tr><td>amount</td><td>-</td><td>-</td><td>  <a href="#Int">Int</a></td><td>-</td></tr><tr><td>buyMatcherFee</td><td>-</td><td>-</td><td>  <a href="#Int">Int</a></td><td>-</td></tr><tr><td>sellMatcherFee</td><td>-</td><td>-</td><td>  <a href="#Int">Int</a></td><td>-</td></tr><tr><td>data</td><td>-</td><td>-</td><td>-</td><td>  LIST[<a href="#DataEntry">DataEntry</a>]</td></tr></table>
