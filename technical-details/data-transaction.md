# Data Transaction

### Use Cases

* Certify authorship of a document by [publishing its hash on the blockchain](https://techcrunch.com/2015/11/20/stampery-now-lets-you-certify-documents-using-the-blockchain-and-your-real-identity)
* Verify that a digital artwork [is original](http://classic.monegraph.com)
* Provide data for smart contracts to work on. E.g. if an oracle publishes some data once in a while using a publicly known account, smart contracts can use that data in their logic.

### Implementation

Data inside a transaction is structured as key-value pairs. Keys are arbitrary UTF-8 strings and are case sensitive. Each value has a data type associated with it. From the beginning 3 data types will be supported: boolean, integer and byte string; more can be added later.

Binary format of a data transaction is as follows:

| Field | Size in Bytes | Comment |
| ----- | -------------:| ----- |
| type | 1 | == 12
| version | 1 | == 1 at this time
| sender's public key | 32
| number of data entries | 2
| key1 length | 2 | key1 byte size
| key1 bytes | ? | UTF-8 encoded
| value1 type | 1 | 0 = integer<br>1 = boolean<br>2 = binary array
| value1 bytes | ?
|...
| timestamp | 8
| fee | 8
| proofs | ? | currently only signature is supported

For values, a one byte type code is written first, indicating the value type. Then the value is encoded as follows:

| Value Type | Type Byte | Encoding                        | Total Size |
|------------|----------:|---------------------------------|-----------:|
| integer    |         0 | value as 8 bytes                |          9 |
| boolean    |         1 | 0=false, 1=true                 |          2 |
| binary     |         2 | size as 2 bytes + N value bytes |      N + 3 |

Maximum size of a data transaction is 3+32+2+(2+400+1+2+1024)*100+16+2+64 = about 140 kilobytes. (See Constraints for limits on key and value size)

Data transactions issued by a single account define this account's state in a cumulative fashion. E.g. once the following two transactions have been mined:

| tx # | key          | value   |
|------|--------------|---------|
| 1    | "smart" "IQ" | true 79 |
| 2    | "IQ"         | 130     |

the account state will be `{"smart": true, "IQ": 130}`, this is, the latter transaction can overwrite existing keys but not delete them. There is currently no planned way to clear the state of an account.

### Smart Contract Interaction

The smart contract language will have methods like `getLong(key)`, `getBoolean(key)` and `getBlob(key)` that return `Some(value)` if successful, `None` if no value exists for the given key, and make contract fail if the value stored under the key has different type.

Internally, data entries are stored as instances of `DataEntry` class:
```
class DataEntry[T](val key: String, val value: T)
case class LongDataEntry(override val key: String, override val value: Long) extends DataEntry[Long](key, value)
case class BooleanDataEntry(override val key: String, override val value: Boolean) extends DataEntry[Boolean](key, value)
case class BinaryDataEntry(override val key: String, override val value: Array[Byte]) extends DataEntry[Array[Byte]](key, value)
```
The complete set of data defined for an account is expressed as an instance of `AccountDataInfo` class:
```
case class AccountDataInfo(data: Map[String, DataEntry[_]])
```
Two new methods need to be introduced to `SnapshotStateReader`:
```
def accountData(acc: Address): AccountDataInfo
def accountData(acc: Address, key: String): Option[DataEntry[_]]
```

### Fees

Fee is proportional to transaction size. By default it is 100,000 per kilobyte, rounded up. Fee is payable in WAVES only and is configured in node settings file as usual:
```
fees {
  data {
    # fee = [data fee] * [size in Kbytes]
    WAVES = 100000
  }
  ...
}
```

As maximum size of a transaction in bytes is just under 140K (see Implementation above), maximum fee is 0.14 WAVES.

### API

`POST /addresses/data` signs and sends a data transaction. This endpoint requires API key. Sample input is as follows (binary arrays are Base58-encoded):
```
{
  "sender": "3FjTpAg1VbmxSH39YWnfFukAUhxMqmKqTEZ",
  "data": [
    {"key": "int", "type": "integer", "value": 24},
    {"key": "bool", "type": "boolean", "value": true},
    {"key": "blob", "type": "binary", "value": "BzWHaQU"}
  ],
  "fee": 100000
}
```

`GET /addresses/data/{address}` returns complete data set defined for an address. Entries are sorted by keys in ascending order:
```
[ {
  "key" : "blob",
  "type" : "binary",
  "value" : "BzWHaQU"
}, {
  "key" : "bool",
  "type" : "boolean",
  "value" : true
}, {
  "key" : "int",
  "type" : "integer",
  "value" : 24
} ]
```

`GET /addresses/data/{address}/{key}` returns single data entry, or 404 if no data is defined for the given key. This method is faster than the one above if you only need one entry:
```
{
  "key" : "bool",
  "type" : "boolean",
  "value" : true
}
```

`POST /transactions/sign` signs a data transaction request (transaction type == 12). This endpoint requires API key.

`POST /transactions/broadcast` broadcasts a signed transaction (transaction type == 12)

`GET /transactions/info, /transactions/address, /blocks/at` etc – all support the new transaction. Here's what an output from /transactions/info looks like:
```
{
  "type" : 12,
  "id" : "CwHecsEjYemKR7wqRkgkZxGrb5UEfD8yvZpFF5wXm2Su",
  "sender" : "3FjTpAg1VbmxSH39YWnfFukAUhxMqmKqTEZ",
  "senderPublicKey" : "5AzfA9UfpWVYiwFwvdr77k6LWupSTGLb14b24oVdEpMM",
  "fee" : 100000,
  "timestamp" : 1520945679531,
  "proofs" : [ "4huvVwtbALH9W2RQSF5h1XG6PFYLA6nvcAEgv79nVLW7myCysWST6t4wsCqhLCSGoc5zeLxG6MEHpcnB6DPy3XWr" ],
  "data" : [ {
    "key" : "int",
    "type" : "integer",
    "value" : 24
  }, {
    "key" : "bool",
    "type" : "boolean",
    "value" : true
  }, {
    "key" : "blob",
    "type" : "binary",
    "value" : "BzWHaQU"
  } ],
  "version" : 1,
  "height" : 303
}
```

With all endpoints, byte arrays are Base58-encoded.

### Constraints

Maximum key size is 100 characters. A key can contain arbitrary Unicode code points including spaces and other non-printable symbols.
Byte string values have a limit of 1024 bytes.

Maximum number of entries in data transaction is 100.

### Related Changes

Data transaction will go through feature activation routine as Feature 5.

### Open Questions

* Some use cases (voting is one example) might benefit from immutable key-value pairs. Several options are possible:
   * Add a mutable flag to each entry indicating whether value associated with a key may be overwritten or not.
   * Just make all values immutable. This is inconvenient for oracles, will lead to state bloat quickly.
* Should we support UTF8 strings for values?
