# Binary Data Structures

## Block chain objects

### Address

| \# | Field name | Type | Position | Length |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Version \(0x01\) | Byte | 0 | 1 |
| 2 | Address scheme \(0x54 for Testnet and 0x57 for Mainnet\) | Byte | 1 | 1 |
| 3 | Public key hash | Bytes | 2 | 20 |
| 4 | Checksum | Bytes | 22 | 4 |

Public key hash is first 20 bytes of\_SecureHash\_of public key bytes. Checksum is first 4 bytes of\_SecureHash\_of version, scheme and hash bytes. SecureHash is hash function Keccak256\(Blake2b256\(data\)\).

### Alias

| \# | Field name | Type | Position | Length |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Version \(0x02\) | Byte | 0 | 1 |
| 2 | Address scheme \(0x54 for Testnet and 0x57 for Mainnet\) | Byte | 1 | 1 |
| 3 | Alias bytes length \(N\) | Int | 2 | 2 |
| 4 | Alias bytes | Bytes | 4 | N |

Alias is a UTF-8 string with the following constraints:

* It contains from 4 to 30 UTF-8 characters
* It cannot contain '\n' or any leading/trailing whitespaces

### AddressOrAlias

A recipient that can be encoded either as pure address or alias. Both`Address`and`Alias`are`AddressOrAlias`.



### Block

| \# | Field name | Type | Position | Length |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Version \(0x02 for Genesis block,, 0x03 for common block\) | Byte | 0 | 1 |
| 2 | Timestamp | Long | 1 | 8 |
| 3 | Parent block signature | Bytes | 9 | 64 |
| 4 | Consensus block length \(always 40 bytes\) | Int | 73 | 4 |
| 5 | Base target | Long | 77 | 8 |
| 6 | Generation signature\* | Bytes | 85 | 32 |
| 7 | Transactions block length \(N\) | Int | 117 | 4 |
| 8 | Transaction \#1 bytes | Bytes | 121 | M1 |
| ... | ... | ... | ... | ... |
| 8 + \(K - 1\) | Transaction \#K bytes | Bytes | 121 + N - MK | MK |
| 9 + \(K - 1\) | Generator's public key | Bytes | 121 + N | 32 |
| 10 + \(K - 1\) | Block's signature | Bytes | 153 + N - MK | 64 |

Generation signature is calculated as Blake2b256 hash of the following bytes:

| \# | Field name | Type | Position | Length |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Previous block's generation signature | Bytes | 0 | 32 |
| 2 | Generator's public key | Bytes | 32 | 32 |

Block's signature is calculated from the following bytes:

| \# | Field name | Type | Position | Length |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Version \(0x02 for Genesis block,, 0x03 for common block\) | Byte | 0 | 1 |
| 2 | Timestamp | Long | 1 | 8 |
| 3 | Parent block signature | Bytes | 9 | 64 |
| 4 | Consensus block length \(always 40 bytes\) | Int | 73 | 4 |
| 5 | Base target | Long | 77 | 8 |
| 6 | Generation signature\* | Bytes | 85 | 32 |
| 7 | Transactions block length \(N\) | Int | 117 | 4 |
| 8 | Transaction \#1 bytes | Bytes | 121 | M1 |
| ... | ... | ... | ... | ... |
| 8 + \(K - 1\) | Transaction \#K bytes | Bytes | 121 + N - MK | MK |
| 9 + \(K - 1\) | Generator's public key | Bytes | 121 + N | 32 |

### Order

| \# | Field name | Type | Position | Length |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Sender's public key | Bytes | 0 | 32 |
| 2 | Matcher's public key | Bytes | 32 | 32 |
| 3 | Amount's asset flag \(0-Waves, 1-Asset\) | Byte | 64 | 1 |
| 4 | Amount's asset ID \(\*if used\) | Bytes | 65 | 0 \(32\*\) |
| 5 | Price's asset flag \(0-Waves, 1-Asset\) | Byte | 65 \(97\*\) | 1 |
| 6 | Price's asset ID \(\*\*if used\) | Bytes | 66 \(98\*\) | 0 \(32\*\*\) |
| 7 | Order type \(0 - Buy, 1 - Sell\) | Bytes | 66 \(98\*\) \(130\*\*\) | 1 |
| 8 | Price | Long | 67 \(99\*\) \(131\*\*\) | 8 |
| 9 | Amount | Long | 75 \(107\*\) \(139\*\*\) | 8 |
| 10 | Timestamp | Long | 83 \(115\*\) \(147\*\*\) | 8 |
| 11 | Expiration | Long | 91 \(123\*\) \(155\*\*\) | 8 |
| 12 | Matcher fee | Long | 99 \(131\*\) \(163\*\*\) | 8 |
| 13 | Signature | Bytes | 107 \(139\*\) \(171\*\*\) | 64 |

The price listed for amount asset in price asset \* 10^8.

Expiration is order time to live, timestamp in future, max = 30 days in future.



