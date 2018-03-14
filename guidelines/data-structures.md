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

The signature is calculated from the following bytes:

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

### Transactions

#### Genesis transaction

| \# | Field name | Type | Position | Length |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Transaction type \(1\) | Byte | 0 | 1 |
| 2 | Timestamp | Long | 4 | 8 |
| 3 | Recipient's address | Bytes | 20 | 26 |
| 4 | Amount | Long | 12 | 8 |

#### Issue transaction

| \# | Field name | Type | Position | Length |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Transaction type \(0x03\) | Byte | 0 | 1 |
| 2 | Signature | Bytes | 1 | 64 |
| 3 | Transaction type \(2\) | Byte | 65 | 1 |
| 4 | Sender's public key | Bytes | 66 | 32 |
| 5 | Name's length \(N\) | Short | 98 | 2 |
| 6 | Name's bytes | Bytes | 100 | N |
| 7 | Description's length \(M\) | Short | 100 + N | 2 |
| 8 | Description's bytes | Bytes | 102 + N | M |
| 9 | Quantity | Long | 102 + N + M | 8 |
| 10 | Decimals | Byte | 110 + N + M | 1 |
| 11 | Reissuable flag \(1-True, 0-False\) | Byte | 111 + N + M | 1 |
| 12 | Fee | Long | 112 + N + M | 8 |
| 13 | Timestamp | Long | 120 + N + M | 8 |

The transaction's signature is calculated from the following bytes:

| \# | Field name | Type | Position | Length |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Transaction type \(0x03\) | Byte | 0 | 1 |
| 2 | Sender's public key | Bytes | 1 | 32 |
| 3 | Name's length \(N\) | Short | 33 | 2 |
| 4 | Name's bytes | Bytes | 35 | N |
| 5 | Description's length \(M\) | Short | 35 + N | 2 |
| 6 | Description's bytes | Bytes | 37 + N | M |
| 7 | Quantity | Long | 37 + N + M | 8 |
| 8 | Decimals | Byte | 45 + N + M | 1 |
| 9 | Reissuable flag \(1-True, 0-False\) | Byte | 46 + N + M | 1 |
| 10 | Fee | Long | 47 + N + M | 8 |
| 11 | Timestamp | Long | 55 + N + M | 8 |

#### Reissue transaction

| \# | Field name | Type | Position | Length |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Transaction type \(0x05\) | Byte | 0 | 1 |
| 2 | Signature | Bytes | 1 | 64 |
| 3 | Transaction type \(0x05\) | Byte | 65 | 1 |
| 4 | Sender's public key | Bytes | 66 | 32 |
| 5 | Asset ID | Bytes | 98 | 32 |
| 6 | Quantity | Long | 130 | 8 |
| 7 | Reissuable flag \(1-True, 0-False\) | 138 | 73 | 1 |
| 8 | Fee | Long | 139 | 8 |
| 9 | Timestamp | Long | 147 | 8 |

The transaction's signature is calculated from the following bytes:

| \# | Field name | Type | Position | Length |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Transaction type \(0x05\) | Byte | 0 | 1 |
| 2 | Sender's public key | Bytes | 1 | 32 |
| 3 | Asset ID | Bytes | 33 | 32 |
| 4 | Quantity | Long | 65 | 8 |
| 5 | Reissuable flag \(1-True, 0-False\) | Byte | 73 | 1 |
| 6 | Fee | Long | 74 | 8 |
| 7 | Timestamp | Long | 82 | 8 |

#### Transfer transaction

| \# | Field name | Type | Position | Length |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Transaction type \(0x04\) | Byte | 0 | 1 |
| 2 | Signature | Bytes | 1 | 64 |
| 3 | Transaction type \(0x04\) | Byte | 65 | 1 |
| 4 | Sender's public key | Bytes | 66 | 32 |
| 5 | Amount's asset flag \(0-Waves, 1-Asset\) | Byte | 98 | 1 |
| 6 | Amount's asset ID \(\*if used\) | Bytes | 99 | 0 \(32\*\) |
| 7 | Fee's asset flag \(0-Waves, 1-Asset\) | Byte | 99 \(131\*\) | 1 |
| 8 | Fee's asset ID \(\*\*if used\) | Bytes | 100 \(132\*\) | 0 \(32\*\*\) |
| 9 | Timestamp | Long | 100 \(132\*\) \(164\*\*\) | 8 |
| 10 | Amount | Long | 108 \(140\*\) \(172\*\*\) | 8 |
| 11 | Fee | Long | 116 \(148\*\) \(180\*\*\) | 8 |
| 12 | Recipient's AddressOrAlias object bytes | Bytes | 124 \(156\*\) \(188\*\*\) | M |
| 13 | Attachment's length \(N\) | Short | 124+M \(156+M\*\) \(188+M\*\*\) | 2 |
| 14 | Attachment's bytes | Bytes | 126+M \(158+M\*\) \(190+M\*\*\) | N |

The transaction's signature is calculated from the following bytes:

| \# | Field name | Type | Position | Length |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Transaction type \(0x04\) | Byte | 0 | 1 |
| 2 | Sender's public key | Bytes | 1 | 32 |
| 3 | Amount's asset flag \(0-Waves, 1-Asset\) | Byte | 33 | 1 |
| 4 | Amount's asset ID \(\*if used\) | Bytes | 34 | 0 \(32\*\) |
| 5 | Fee's asset flag \(0-Waves, 1-Asset\) | Byte | 34 \(66\*\) | 1 |
| 6 | Fee's asset ID \(\*\*if used\) | Bytes | 35 \(67\*\) | 0 \(32\*\*\) |
| 7 | Timestamp | Long | 35 \(67\*\) \(99\*\*\) | 8 |
| 8 | Amount | Long | 43 \(75\*\) \(107\*\*\) | 8 |
| 9 | Fee | Long | 51 \(83\*\) \(115\*\*\) | 8 |
| 10 | Recipient's AddressOrAlias object bytes | Bytes | 59 \(91\*\) \(123\*\*\) | M |
| 11 | Attachment's length \(N\) | Short | 59+M \(91+M\*\) \(123+M\*\*\) | 2 |
| 12 | Attachment's bytes | Bytes | 61+M \(93+M\*\) \(125+M\*\*\) | N |

#### Burn transaction

| \# | Field name | Type | Position | Length |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Transaction type \(0x06\) | Byte | 0 | 1 |
| 2 | Sender's public key | Bytes | 1 | 32 |
| 3 | Asset ID | Bytes | 33 | 32 |
| 4 | Amount | Long | 65 | 8 |
| 5 | Fee | Long | 73 | 8 |
| 6 | Timestamp | Long | 81 | 8 |
| 7 | Signature | Bytes | 89 | 64 |



The transaction's signature is calculated from the following bytes:

| \# | Field name | Type | Position | Length |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Transaction type \(0x06\) | Byte | 0 | 1 |
| 2 | Sender's public key | Bytes | 1 | 32 |
| 3 | Asset ID | Bytes | 33 | 32 |
| 4 | Amount | Long | 65 | 8 |
| 5 | Fee | Long | 73 | 8 |
| 6 | Timestamp | Long | 81 | 8 |



