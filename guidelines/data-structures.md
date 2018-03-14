# Binary Data Structures

## Block chain objects

### Address

| \# | Field name | Type | Position | Length |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Version \(0x01\) | Byte | 0 | 1 |
| 2 | Address scheme \(0x54 for Testnet and 0x57 for Mainnet\) | Byte | 1 | 1 |
| 3 | Public key hash | Bytes | 2 | 20 |
| 4 | Checksum | Bytes | 22 | 4 |

Public key hash is first 20 bytes of_SecureHash_of public key bytes. Checksum is first 4 bytes of_SecureHash_of version, scheme and hash bytes. SecureHash is hash function Keccak256\(Blake2b256\(data\)\).

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

