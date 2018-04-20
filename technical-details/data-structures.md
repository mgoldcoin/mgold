# Binary Data Structures

## Blockchain objects

### Address

| # |                       Field name                      |  Type | Position | Length |
|---|:-----------------------------------------------------:|:-----:|:--------:|--------|
| 1 |                     Version(0x01)                     |  Byte |     0    |    1   |
| 2 | Address scheme (0x54 for Testnet and 0x57for Mainnet) |  Byte |     1    |    1   |
| 3 |                    Public key hash                    | Bytes |     2    |   20   |
| 4 |                        Checksum                       | Bytes |    22    |    4   |

Public key hash is first 20 bytes of\_SecureHash\_of public key bytes. Checksum is first 4 bytes of\_SecureHash\_of version, scheme and hash bytes. SecureHash is hash function Keccak256\(Blake2b256\(data\)\).

### Alias

| \# | Field name                                             | Type  | Position | Length |
|----|--------------------------------------------------------|-------|----------|--------|
| 1  |                     Version (0x02)                     |  Byte |     0    |    1   |
| 2  | Address scheme (0x54 for Testnet and 0x57 for Mainnet) |  Byte |     1    |    1   |
| 3  |                 Alias bytes length (N)                 |  Int  |     2    |    2   |
| 4  |                       Alias bytes                      | Bytes |     4    |    N   |

Alias is a UTF-8 string with the following constraints:

* It contains from 4 to 30 UTF-8 characters
* It cannot contain '\n' or any leading/trailing whitespaces

### Proof

| \# | Field name     | Type  | Position | Length |
|----|----------------|-------|----------|--------|
| 1  | Proof size (N) | Short |     0    |    2   |
| 2  |      Proof     | Bytes |     2    |    N   |

### AddressOrAlias

A recipient that can be encoded either as pure address or alias. Both `Address` and `Alias` are `AddressOrAlias`.

### Block

| \#           | Field name                                              | Type  | Position     | Length |
|--------------|---------------------------------------------------------|-------|--------------|--------|
| 1            | Version (0x02 for Genesis block, 0x03 for common block) | Byte  | 0            | 1      |
| 2            | Timestamp                                               | Long  | 1            | 8      |
| 3            | Parent block signature                                  | Bytes | 9            | 64     |
| 4            | Consensus block length (always 40 bytes)                | Int   | 73           | 4      |
| 5            | Base target                                             | Long  | 77           | 8      |
| 6            | Generation signature*                                   | Bytes | 85           | 32     |
| 7            | Transactions block length (N)                           | Int   | 117          | 4      |
| 8            | Transaction #1 bytes                                    | Bytes | 121          | M1     |
| ...          | ...                                                     | ...   | ...          | ...    |
| 8 + (K - 1)  | Transaction #K bytes                                    | Bytes | 121 + N - MK | MK     |
| 9 + (K - 1)  | Generator's public key                                  | Bytes | 121 + N      | 32     |
| 10 + (K - 1) | Block's signature                                       | Bytes | 153 + N - MK | 64     |

Generation signature is calculated as Blake2b256 hash of the following bytes:

| \# | Field name                            | Type  | Position | Length |
|----|---------------------------------------|-------|----------|--------|
| 1  | Previous block's generation signature | Bytes | 0        | 32     |
| 2  | Generator's public key                | Bytes | 32       | 32     |

Block's signature is calculated from the following bytes:

| \#          | Field name                                               | Type  | Position     | Length |
|-------------|----------------------------------------------------------|-------|--------------|--------|
| 1           | Version (0x02 for Genesis block,, 0x03 for common block) | Byte  | 0            | 1      |
| 2           | Timestamp                                                | Long  | 1            | 8      |
| 3           | Parent block signature                                   | Bytes | 9            | 64     |
| 4           | Consensus block length (always 40 bytes)                 | Int   | 73           | 4      |
| 5           | Base target                                              | Long  | 77           | 8      |
| 6           | Generation signature*                                    | Bytes | 85           | 32     |
| 7           | Transactions block length (N)                            | Int   | 117          | 4      |
| 8           | Transaction #1 bytes                                     | Bytes | 121          | M1     |
| ...         | ...                                                      | ...   | ...          | ...    |
| 8 + (K - 1) | Transaction #K bytes                                     | Bytes | 121 + N - MK | MK     |
| 9 + (K - 1) | Generator's public key                                   | Bytes | 121 + N      | 32     |

### Order

| \# | Field name                             | Type  | Position           | Length   |
|----|----------------------------------------|-------|--------------------|----------|
| 1  | Sender's public key                    | Bytes | 0                  | 32       |
| 2  | Matcher's public key                   | Bytes | 32                 | 32       |
| 3  | Amount's asset flag (0-Waves, 1-Asset) | Byte  | 64                 | 1        |
| 4  | Amount's asset ID (*if used)           | Bytes | 65                 | 0 (32*)  |
| 5  | Price's asset flag (0-Waves, 1-Asset)  | Byte  | 65 (97*)           | 1        |
| 6  | Price's asset ID (**if used)           | Bytes | 66 (98*)           | 0 (32**) |
| 7  | Order type (0 - Buy, 1 - Sell)         | Bytes | 66 (98*) (130**)   | 1        |
| 8  | Price                                  | Long  | 67 (99*) (131**)   | 8        |
| 9  | Amount                                 | Long  | 75 (107*) (139**)  | 8        |
| 10 | Timestamp                              | Long  | 83 (115*) (147**)  | 8        |
| 11 | Expiration                             | Long  | 91 (123*) (155**)  | 8        |
| 12 | Matcher fee                            | Long  | 99 (131*) (163**)  | 8        |
| 13 | Signature                              | Bytes | 107 (139*) (171**) | 64       |

The price listed for amount asset in price asset \* 10^8.

Expiration is order time to live, timestamp in future, max = 30 days in future.

The signature is calculated from the following bytes:

| \# | Field name                             | Type  | Position          | Length   |
|----|----------------------------------------|-------|-------------------|----------|
| 1  | Sender's public key                    | Bytes | 0                 | 32       |
| 2  | Matcher's public key                   | Bytes | 32                | 32       |
| 3  | Amount's asset flag (0-Waves, 1-Asset) | Byte  | 64                | 1        |
| 4  | Amount's asset ID (*if used)           | Bytes | 65                | 0 (32*)  |
| 5  | Price's asset flag (0-Waves, 1-Asset)  | Byte  | 65 (97*)          | 1        |
| 6  | Price's asset ID (**if used)           | Bytes | 66 (98*)          | 0 (32**) |
| 7  | Order type (0 - Buy, 1 - Sell)         | Bytes | 66 (98*) (130**)  | 1        |
| 8  | Price                                  | Long  | 67 (99*) (131**)  | 8        |
| 9  | Amount                                 | Long  | 75 (107*) (139**) | 8        |
| 10 | Timestamp                              | Long  | 83 (115*) (147**) | 8        |
| 11 | Expiration                             | Long  | 91 (123*) (155**) | 8        |
| 12 | Matcher fee                            | Long  | 99 (131*) (163**) | 8        |

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

#### Versioned transfer transaction

| \# | Field name | Type | Position | Length |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Reserved (Always 0) | Byte | 0 | 1
| 2 | Transaction type | Byte | 1 | 1 |
| 3 | Version | Byte | 2 | 1
| 4 | Sender's public key | Bytes | 3 | 32 |
| 5 | Amount's asset flag \(0-Waves, 1-Asset\) | Byte | 35 | 1 |
| 6 | Amount's asset ID \(\*if used\) | Bytes | 36 | 0 \(32\*\) |
| 7 | Timestamp | Long | 36 \(68\*\) | 8 |
| 8 | Amount | Long | 44 \(76\*\) | 8 |
| 9 | Fee | Long | 52 \(84\*\) | 8 |
| 10 | Recipient's AddressOrAlias object bytes | Bytes | 60 \(92\*\) | M |
| 11 | Attachment's length \(N\) | Short | 60+M \(92+M\*\) | 2 |
| 12 | Attachment's bytes | Bytes | 62+M \(94+M\*\) | N |
| 13 | Proofs' version | Byte | 62+M+N \(94+M+N\*\) | 1 |
| 14 | Proofs' number \(P\) | Short | 63+M+N \(95+M+N\*\) | 2 |
| 15 | Proofs | Proof | 65+M+N \(97+M+N\*\) | S |

* The fee only in Waves;
* You may sign your transaction in your way and place the signature in proofs.

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

#### Exchange transaction

| \# | Field name | Type | Position | Length |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Transaction type \(0x07\) | Byte | 0 | 1 |
| 2 | Buy order object length \(BN\) | Bytes | 1 | 4 |
| 3 | Sell order object length \(SN\) | Bytes | 5 | 4 |
| 4 | Buy order object bytes | Bytes | 9 | BN |
| 5 | Sell order object bytes | Bytes | 9 + BN | SN |
| 6 | Price | Long | 9 + BN + SN | 8 |
| 7 | Amount | Long | 17 + BN + SN | 8 |
| 8 | Buy matcher fee | Long | 25 + BN + SN | 8 |
| 9 | Sell matcher fee | Long | 33 + BN + SN | 8 |
| 10 | Fee | Long | 41 + BN + SN | 8 |
| 11 | Timestamp | Long | 49 + BN + SN | 8 |
| 12 | Signature | Bytes | 57 + BN + SN | 64 |

The transaction's signature is calculated from the following bytes:

| \# | Field name | Type | Position | Length |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Transaction type \(0x07\) | Byte | 0 | 1 |
| 2 | Buy order object length \(BN\) | Bytes | 1 | 4 |
| 3 | Sell order object length \(SN\) | Bytes | 5 | 4 |
| 4 | Buy order object bytes | Bytes | 9 | BN |
| 5 | Sell order object bytes | Bytes | 9 + BN | SN |
| 6 | Price | Long | 9 + BN + SN | 8 |
| 7 | Amount | Long | 17 + BN + SN | 8 |
| 8 | Buy matcher fee | Long | 25 + BN + SN | 8 |
| 9 | Sell matcher fee | Long | 33 + BN + SN | 8 |
| 10 | Fee | Long | 41 + BN + SN | 8 |
| 11 | Timestamp | Long | 49 + BN + SN | 8 |

#### Lease transaction

| \# | Field name | Type | Position | Length |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Transaction type \(0x08\) | Byte | 0 | 1 |
| 2 | Sender's public key | Bytes | 1 | 32 |
| 3 | Recipient's AddressOrAlias object bytes | Bytes | 33 | N |
| 4 | Amount | Long | 33+N | 8 |
| 5 | Fee | Long | 41+N | 8 |
| 6 | Timestamp | Long | 49+N | 8 |
| 7 | Signature | Bytes | 57+N | 64 |

The transaction's signature is calculated from the following bytes:

| \# | Field name | Type | Position | Length |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Transaction type \(0x08\) | Byte | 0 | 1 |
| 2 | Sender's public key | Bytes | 1 | 32 |
| 3 | Recipient's AddressOrAlias object bytes | Bytes | 33 | N |
| 4 | Amount | Long | 33+N | 8 |
| 5 | Fee | Long | 41+N | 8 |
| 6 | Timestamp | Long | 49+N | 8 |

#### Create alias transaction

| \# | Field name | Type | Position | Length |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Transaction type \(0x0a\) | Byte | 0 | 1 |
| 2 | Sender's public key | Bytes | 1 | 32 |
| 3 | Alias object length \(N\) | Short | 33 | 2 |
| 4 | Alias object bytes | Bytes | 35 | N |
| 5 | Fee | Long | 35 + N | 8 |
| 6 | Timestamp | Long | 43 + N | 8 |
| 7 | Signature | Bytes | 51 + N | 32 |

The transaction's signature is calculated from the following bytes:

| \# | Field name | Type | Position | Length |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Transaction type \(0x0a\) | Byte | 0 | 1 |
| 2 | Sender's public key | Bytes | 1 | 32 |
| 3 | Alias object length \(N\) | Short | 33 | 2 |
| 4 | Alias object bytes | Bytes | 35 | N |
| 5 | Fee | Long | 35 + N | 8 |
| 6 | Timestamp | Long | 43 + N | 8 |

#### Mass Transfer transaction

| \# | Field name | Length |
| :--- | :--- | :--- |
| 1 | Transaction type \(0x0b\) | 1 |
| 2 | Version (0x01) | 1 |
| 3 | Sender's public key | 32 |
| 4 | Asset flag \(0-Waves, 1-Asset\) | 1 |
| 5 | Asset ID, if any | 0 / 32 |
| 6 | Number of transfers | 2 |
| 7 | AddressOrAlias object for transfer 1 | variable |
| 8 | Amount for transfer 1 | 8 |
| 9 | AddressOrAlias object for transfer 2 | variable |
| 10 | Amount for transfer 2 | 8 |
| ... | ... | ... |
| N+0 | Timestamp | 8 |
| N+1 | Fee | 8 |
| N+2 | Attachment length | 2 |
| N+3 | Attachment bytes | variable |
| N+4 | Proofs version (0x01) | 1 |
| N+5 | Proof count (1) | 1 |
| N+6 | Signature length (64) | 2 |
| N+7 | Signature | 64 |

The transaction signature is calculated from the fields 1 to N+3, i.e. proofs and signatures are not included.

#### Data transaction

| \# | Field name | Length |
| :--- | :--- | :--- |
| 1 | Reserved (Always 0) | 1
| 2 | Transaction type (0x0c) | 1 |
| 3 | Version (0x01) | 1 |
| 4 | Sender's public key | 32 |
| 5 | Number of data entries | 2 |
| 6 | Key1 byte size | 2 |
| 7 | Key1 bytes, UTF-8 encoded | variable |
| 8 | Value1 type:<br>0 = integer<br>1 = boolean<br>2 = binary array | 1 |
| 9 | Value1 bytes | variable |
| ... | ... | ... |
| N | Timestamp | 8 |
| N+1 | Fee | 8 |
| N+2 | Proofs version (0x01) | 1 |
| N+3 | Proof count (1) | 1 |
| N+4 | Signature length (64) | 2 |
| N+5 | Signature | 64 |

The transaction signature is calculated from the fields 1 to N+1, i.e. proofs and signatures are not included.

## Network messages

### Network message structure

All network messages shares the same structure except the[Handshake](https://github.com/wavesplatform/Waves/wiki/Data-Structures#handshake-message).

| \# | Field name | Type | Position | Length |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Packet length \(BigEndian\) | Int | 0 | 4 |
| 2 | Magic Bytes | Bytes | 4 | 4 |
| 3 | Content ID | Byte | 8 | 1 |
| 4 | Payload length | Int | 9 | 4 |
| 5 | Payload checksum | Bytes | 13 | 4 |
| 6 | _Payload_ | Bytes | 17 | N |

Magic Bytes are 0x12, 0x34, 0x56, 0x78. Payload checksum is first 4 bytes of_FastHash_of Payload bytes. FastHash is hash function Blake2b256\(data\).

### Handshake message

Handshake is used to start communication between two nodes.

| \# | Field name | Type | Position | Length |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Application name length \(N\) | Byte | 0 | 1 |
| 2 | Application name \(UTF-8 encoded bytes\) | Bytes | 1 | N |
| 3 | Application version major | Int | 1 + N | 4 |
| 4 | Application version minor | Int | 5 + N | 4 |
| 5 | Application version patch | Int | 9 + N | 4 |
| 6 | Node name length \(M\) | Byte | 13 + N | 1 |
| 7 | Node name \(UTF-8 encoded bytes\) | Bytes | 14 + N | M |
| 8 | Node nonce | Long | 14 + N + M | 8 |
| 9 | Declared address length \(K\) or 0 if no declared address was set | Int | 22 + N + M | 4 |
| 10 | Declared address bytes \(if length is not 0\) | Bytes | 26 + N + M | K |
| 11 | Timestamp | Long | 26 + N + M + K | 8 |

### GetPeers message

GetPeers message is sent when sending node wants to know of other nodes on network.

| \# | Field name | Type | Position | Length |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Packet length \(BigEndian\) | Int | 0 | 4 |
| 2 | Magic Bytes | Bytes | 4 | 4 |
| 3 | Content ID \(0x01\) | Byte | 8 | 1 |
| 4 | Payload length | Int | 9 | 4 |
| 5 | Payload checksum | Bytes | 13 | 4 |

### Peers message

Peers message is a reply on GetPeers message.

| \# | Field name | Type | Position | Length |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Packet length \(BigEndian\) | Int | 0 | 4 |
| 2 | Magic Bytes | Bytes | 4 | 4 |
| 3 | Content ID \(0x02\) | Byte | 8 | 1 |
| 4 | Payload length | Int | 9 | 4 |
| 5 | Payload checksum | Bytes | 13 | 4 |
| 6 | Peers count \(N\) | Int | 13 | 4 |
| 7 | Peer \#1 IP address | Bytes | 17 | 4 |
| 8 | Peer \#1 port | Int | 21 | 4 |
| ... | ... | ... | ... | ... |
| 6 + 2 \* N - 1 | Peer \#N IP address | Bytes | 13 + 8 \* N - 4 | 4 |
| 6 + 2 \* N | Peer \#N port | Int | 13 + 8 \* N | 4 |

### GetSignatures message

| \# | Field name | Type | Position | Length |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Packet length \(BigEndian\) | Int | 0 | 4 |
| 2 | Magic Bytes | Bytes | 4 | 4 |
| 3 | Content ID \(0x14\) | Byte | 8 | 1 |
| 4 | Payload length | Int | 9 | 4 |
| 5 | Payload checksum | Bytes | 13 | 4 |
| 6 | Block IDs count \(N\) | Int | 13 | 4 |
| 7 | Block \#1 ID | Bytes | 17 | 64 |
| ... | ... | ... | ... | ... |
| 6 + N | Block \#N ID | Bytes | 13 + 64 \* N - 60 | 64 |

### Signatures message

| \# | Field name | Type | Position | Length |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Packet length \(BigEndian\) | Int | 0 | 4 |
| 2 | Magic Bytes | Bytes | 4 | 4 |
| 3 | Content ID \(0x15\) | Byte | 8 | 1 |
| 4 | Payload length | Int | 9 | 4 |
| 5 | Payload checksum | Bytes | 13 | 4 |
| 6 | Block signatures count \(N\) | Int | 13 | 4 |
| 7 | Block \#1 signature | Bytes | 17 | 64 |
| ... | ... | ... | ... | ... |
| 6 + N | Block \#N signature | Bytes | 13 + 64 \* N - 60 | 64 |

### GetBlock message

| \# | Field name | Type | Position | Length |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Packet length \(BigEndian\) | Int | 0 | 4 |
| 2 | Magic Bytes | Bytes | 4 | 4 |
| 3 | Content ID \(0x16\) | Byte | 8 | 1 |
| 4 | Payload length | Int | 9 | 4 |
| 5 | Payload checksum | Bytes | 13 | 4 |
| 6 | Block ID | Bytes | 17 | 64 |

### Block message

| \# | Field name | Type | Position | Length |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Packet length \(BigEndian\) | Int | 0 | 4 |
| 2 | Magic Bytes | Bytes | 4 | 4 |
| 3 | Content ID \(0x17\) | Byte | 8 | 1 |
| 4 | Payload length | Int | 9 | 4 |
| 5 | Payload checksum | Bytes | 13 | 4 |
| 6 | Block bytes \(N\) | Bytes | 17 | N |

### Score message

| \# | Field name | Type | Position | Length |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Packet length \(BigEndian\) | Int | 0 | 4 |
| 2 | Magic Bytes | Bytes | 4 | 4 |
| 3 | Content ID \(0x18\) | Byte | 8 | 1 |
| 4 | Payload length | Int | 9 | 4 |
| 5 | Payload checksum | Bytes | 13 | 4 |
| 6 | Score \(N bytes\) | BigInt | 17 | N |

### Transaction message

| \# | Field name | Type | Position | Length |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Packet length \(BigEndian\) | Int | 0 | 4 |
| 2 | Magic Bytes | Bytes | 4 | 4 |
| 3 | Content ID \(0x19\) | Byte | 8 | 1 |
| 4 | Payload length | Int | 9 | 4 |
| 5 | Payload checksum | Bytes | 13 | 4 |
| 6 | Transaction \(N bytes\) | Bytes | 17 | N |

### Checkpoint message

| \# | Field name | Type | Position | Length |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Packet length \(BigEndian\) | Int | 0 | 4 |
| 2 | Magic Bytes | Bytes | 4 | 4 |
| 3 | Content ID \(0x64\) | Byte | 8 | 1 |
| 4 | Payload length | Int | 9 | 4 |
| 5 | Payload checksum | Bytes | 13 | 4 |
| 6 | Checkpoint items count \(N\) | Int | 13 | 4 |
| 7 | Checkpoint \#1 height | Long | 17 | 8 |
| 8 | Checkpoint \#1 signature | Bytes | 25 | 64 |
| ... | ... | ... | ... | ... |
| 6 + 2 \* N - 1 | Checkpoint \#N height | Long | 13 + 72 \* \(N - 1\) + 4 | 8 |
| 6 + 2 \* N | Checkpoint \#N signature | Bytes | 13 + 72 \* \(N - 1\) + 12 | 64 |
