# Versioned Transactions binary representation

## Common

Fields, existing in transactions of any kind

| #     | Field name        | Type  | Length |
| ----: | :---------------- | :---: | -----: |
| 0     | Mark (0x0)        | Byte  | 1      |
| 1     | Version (0x02)    | Byte  | 1      |
| 2     | Transaction type  | Byte  | 1      |
| 3     | Sender public key | Bytes | 32     |
| 4     | Timestamp         | Long  | 8      |
|...|
| N     | Proofs version    | Byte  | 1      |
| N + 1 | Proofs count      | Short | 1      |
| N + 2 | Proofs            | Bytes | 64     |

## Transaction types

| #    | Transaction type         | Byte |
| ---: | :----------------------- | ---: |
| 1    | Issue transaction        | 0x0d |
| 2    | Reissue transaction      | 0x0e |
| 3    | Transfer transaction     | ???? |
| 4    | Burn transaction         | 0x0f |
| 5    | Exchange transaction     | 0x10 |
| 6    | Lease transaction        | 0x11 |
| 7    | Create alias transaction | 0x12 |
| 8    | MassTransfer transaction | 0x0b |
| 9    | Data transaction         | 0x0c |

## Burn Transaction

| #    | Field name | Type  | Length |
| ---: | :--------- | :---: | -----: |
| 5    | Asset ID   | Bytes | 32     |
| 6    | Amount     | Long  | 8      |
| 7    | Fee        | Long  | 8      |

## Issue Transaction

| #    | Field name                        | Type  | Length |
| ---: | :-------------------------------- | :---: | -----: |
| 5    | Name's length (N)                 | Short | 2      |
| 6    | Name's bytes                      | Bytes | N      |
| 7    | Description's length (M)          | Short | 2      |
| 8    | Description's bytes               | Bytes | M      |
| 9    | Quantity                          | Long  | 8      |
| 10   | Decimals                          | Byte  | 1      |
| 11   | Reissuable flag (1-True, 0-False) | Byte  | 1      |
| 12   | Fee                               | Long  | 8      |

## Reissue Transaction

| #    | Field name                        | Type  | Length |
| ---: | :-------------------------------- | :---: | -----: |
| 5    | Asset ID                          | Bytes | 32     |
| 6    | Quantity                          | Long  | 8      |
| 7    | Reissuable flag (1-True, 0-False) | 138   | 1      |
| 8    | Fee                               | Long  | 8      |

## CreateAliasTransaction

| #    | Field name              | Type  | Length |
| ---: | :---------------------- | :---: | -----: |
| 5    | Alias object length (N) | Short | 2      |
| 6    | Alias object bytes      | Bytes | N      |
| 7    | Fee                     | Long  | 8      |

## Transfer Transaction

| #    | Field name                              | Type  | Length   |
| ---: | :-------------------------------------- | :---: | -------: |
| 5    | Amount's asset flag (0-Waves, 1-Asset)  | Byte  | 1        |
| 6    | Amount's asset ID **(if used)**         | Bytes | 0 (32*)  |
| 7    | Fee's asset flag (0-Waves, 1-Asset)     | Byte  | 1        |
| 8    | Fee's asset ID **(if used)**            | Bytes | 0 (32**) |
| 9    | Amount                                  | Long  | 8        |
| 10   | Fee                                     | Long  | 8        |
| 11   | Recipient's AddressOrAlias object bytes | Bytes | M        |
| 12   | Attachment's length (N)                 | Short | 2        |
| 13   | Attachment's bytes                      | Bytes | N        |