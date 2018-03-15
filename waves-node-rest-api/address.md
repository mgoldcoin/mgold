## Address

### GET /addresses

Get list of all accounts addresses in the node's wallet.

**Response:**

```
[
"3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
"3Mx2afTZ2KbRrLNbytyzTtXukZvqEB8SkW7"
]
```

### GET /addresses/seq/{from}/{to}

Get list of accounts addresses with indexes at this range in the node's wallet.

**Response:**

```
[
"3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",  
"3Mx2afTZ2KbRrLNbytyzTtXukZvqEB8SkW7"
]
```

### POST /addresses

Generate a new account address in the wallet._Requires API\_KEY to be provided_

**Request:**

```

```

**Response JSON example:**

```
{
  
"address": "3Mx2afTZ2KbRrLNbytyzTtXukZvqEB8SkW7"

}
```

### GET /addresses/balance/{address}

Get account balance in WAVES in {address}:

```
  "address" - account's address in Base58 format

```

**Response JSON example:**

```
{

  "address": "3N3keodUiS8WLEw9W4BKDNxgNdUpwSnpb3K",
  "confirmations": 0,
  "balance": 100945889661986

}
```

### GET /addresses/balance/{address}/{confirmations}

Get account balance in WAVES by {address} after {confirmations} from now:

```
  "address" - account's address in Base58 format
  "confirmations" - N of confirmations

```

**Response JSON example:**

```
{
  
"address": "3N3keodUiS8WLEw9W4BKDNxgNdUpwSnpb3K",
  
"confirmations": 500,
  
"balance": 100945388397565

}
```



