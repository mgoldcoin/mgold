# Waves Keeper API

[Download](https://drive.google.com/drive/folders/1m4dD4C8pEJ4y6-hpauF9TGSIsevY-3me?usp=sharing)

[Demo page](https://chrome-ext.wvservices.com/)

Note that the Waves Keeper also can support [Waves Client API](https://docs.wavesplatform.com/en/development-and-api/client-api/overview.html): [Web Auth API](https://docs.wavesplatform.com/en/development-and-api/client-api/auth-api.html), [Payment API](https://docs.wavesplatform.com/en/development-and-api/client-api/payments-api.html). If a user has both of Waves Client and Waves Keeper, the Keeper would have higher priority.
 
Firstly, for working with API, you need to add a public object Waves on your site. In this object the following functions are available.



## Authentication
For working with a concrete account you need to implement authentication via Waves function:

`auth(AUTH_DATA)`

where `AUTH_DATA` is a json the following form:

```
AUTH_DATA {
	name: string, //app’s name
	data: string, // data for sign (seed)
	icon: string, // optional parameter: app’s icon (full URL)
  successPath: string // optional parameter: full redirect URL for authentication result, must be https://
}
```

An example request might look like:

```
Waves.auth({
    name: 'My App',
    data: 'test secret string',
    successPath: 'https://my-site.com/auth/waves' 
  }).then(
	  res,  // res - the user data + signature of auth data
	  err   // err - the error message
)
```



## Sign Transaction

This function only generates a signature for the transaction but doesn't send it to the node. You can you a response for self-sending to the node

`signTransaction(TRANSACTION)`

The full request is:

`Waves.signTransaction(TRANSACTION): Promise<tx>;`


The example of `TRANSACTION` you can find below.

An example of a request to signing a transfer transaction:

```
Waves.signAndPublishTransaction({
  type: 4,
  {
    amount: {
      assetId: 'WAVES',
      tokens: '0.123456'
   },
  fee: {
    assetId: 'WAVES',
    tokens: '0.01'
   },
  recipient: '3N5net4nzSeeqxPfGZrvVvnGavsinipQHbE'
  }
}).then(
	res,  // res - a transaction with a signature, ready for a sending to the node
	err   // err - the error message 
)
```

## Sign and Publish Transaction

This function signs transaction, send it to the node and return a Promise object with the server response. The full request is:

`Waves.signAndPublishTransaction(TRANSACTION): Promise<tx>;`

The example of `TRANSACTION` you can find below. 
Also there can be optional parameter `successPath` : `Waves.signAndPublishTransaction(TRANSACTION, successPath): Promise<tx>;`,
this parameter can redirect user to some URL if the transaction is successfully sent with `?txId={id};` 

An example of a request to signing a transfer transaction:
```
Waves.signAndPublishTransaction({
  type: 4,
  {
    amount: {
      assetId: 'WAVES',
      tokens: '0.123456'
    },
    fee: {
      assetId: 'WAVES',
      tokens: '0.01'
    },
    recipient: '3N5net4nzSeeqxPfGZrvVvnGavsinipQHbE'
  }
}).then(
  res,  // res - result of a sending transaction to the server
	err   // err - the error message 
)
```

## Sign Request

This function returns signature of data. The full request is:

`Waves.signRequest(SIGN_REQUEST_DATA)`

```
SIGN_REQUEST_DATA {
	type: REQUEST_TYPE,
	data {}
}
```
```
REQUEST_TYPE {
MATCHER_ORDERS = 1001,
}
```

### General TRANSACTION structure

A `TRANSACTION` in general is a json string in the following form:

```
TRANSACTION  {
type: TRANSACTION_TYPE_NUMBER,
successPath: string,
	data: {
		… TRANSACTION_DATA
}
}
```
### Transaction Types
Waves transaction can be one of 14 types (1 - is Genesis transaction):
```
TRANSACTION_TYPE_NUMBER {
   SEND_OLD = 2,
   ISSUE = 3,
   TRANSFER = 4,
   REISSUE = 5,
   BURN = 6,
   EXCHANGE = 7,
   LEASE = 8,
   CANCEL_LEASING = 9,
   CREATE_ALIAS = 10,
   MASS_TRANSFER = 11,
   DATA = 12,
   SET_SCRIPT = 13,
   SPONSORSHIP = 14
}
```

### Transaction Data

A `TRANSACTION_DATA` contains information about the transaction with json in standard Waves transaction format for different transaction types:

**Transfer:**
```
{
  amount: {
    assetId: ASSET_ID,
    tokens: Number|String
  },
  fee: {
    assetId: ASSET_ID,
    tokens: Number|String
  },
  recipient: string //base58Address
}
```


**Issure:**
```
{
  fee: {
    assetId: ASSET_ID,
    tokens: Number|String
  },
  name: string,
  description: string,
  quantity: string|number,
  precision: number,
  reissuable: boolean
}
```

**Reissure:**
```
{
  fee: {
    assetId: ASSET_ID,
    tokens: Number|String
  },
  reissuable: boolean,
  quantity: string|number,
  assetId: string
}
```

**Burn:**
```
{
  fee: {
    assetId: ASSET_ID,
    tokens: Number|String
  },
  reistruesuable: boolean,
  quantity: string|number,
  assetId: string,	
}
```

**Lease:**
```
{
  fee: {
    assetId: ASSET_ID,
    tokens: Number|String
  },
  amount: string|number,
  recipient: string,	
}
```

**Cancel Lease:**
```
{
  fee: {
    assetId: ASSET_ID,
    tokens: Number|String
  },
  leaseId: string,
}
```

**Mass Transfer:**
```
{
  fee: {
    assetId: ASSET_ID,
    tokens: Number|String
  },
  totalAmount: {
    assetId: ASSET_ID,
    tokens: Number|String
  },
  transfers: [
    {
	    recipient: String,
	    amount: Number|String
    },
    ...
  ]

}
```

**Data transaction:**
```
{
  fee: {
    assetId: ASSET_ID,
    tokens: Number|String
  },
  data: [
	  { type: 'string', key: String, value: String },
    { type: 'number', key: String, value: number  },
    { type: boolean, key: String, value: Boolean  },
    ....
  ],
}
```

**Sponsorship:**
```
{
  fee: {
    assetId: ASSET_ID,
    tokens: Number|String
  },
  minSponsoredAssetFee: {
    assetId: ASSET_ID,
    tokens: Number|String
  }
}
```

**Set Script:**
```
{
  fee: {
    assetId: ASSET_ID,
    tokens: Number|String
  },
  script: string, //a script in Waves script format: 'base64:{script in base64 from RIDE compiler}'
}
```


