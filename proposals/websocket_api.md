# Waves WebSocket API

The best way to get notifications about data changes on node is websocket API, which pushes real-time transactions, blocks, feature activations, and other updates over websockets.

### Connection

In order to use websocket API, connect to http://nodehost:nodeport/node/ws

#### Subscribe

You need to subscribe on events, if you want to be notified about data changes.

```
{
    "subscriptions" : {
        "transactions" : {
            "confirmed" : {
                "address_filter" : {
                    "accept" : ...
                },
                "asset_filter" : {
                    "accept" : ...
                }
            },
            "unconfirmed" : {
                "address_filter" : {
                    "accept" : ...
                },
                "asset_filter" : {
                    "accept" : ...
                }
            },
        },
        "balances" : {
            "address_filter": {
                "accept" : ...
            }
        },
        "blocks" : true/false
        "features" : true/false
    }
}
```
Filter examples:
```
{
    "accept" : "*" # receive all notifications
}
```
```
{
    "accept" : ["item1", "item2", "item3"] # receive notifications only for listed items
}
```

#### Update subscription

Resend "subscriptions" object, described below, if you want to update your subscriptions.

#### Events examples

Confirmed transaction:

```
{
    "event_type" : "tx",
    "payload" : {
        "type" : 7,
        "id" : "7LbB46JkBjZnSMLpqqQeFTFrHG1g5q5oA2Hipu4rAg3g",
        "sender" : "3PJaDyprvekvPXPuAtxrapacuDJopgJRaU3",
        "senderPublicKey" : "7kPFrHDiGw1rCm7LPszuECwWYL3dMf6iMifLRDJQZMzy",
        "fee" : 300000,
        "timestamp" : 1498487656766,
        "signature" : "4SYAtNxudu1hD88UfTEPotpmydnnLAJvcrGzBdWk4GDLjpkFYvcxcPcFqL417Qsy7JWDARW6dnGsN86eDhnLpM3U",
        "order1" : {
            "id" : "3c6f7kqz62ER5wsdKoY5WcqkdSn49sq2zCZjcaARKwmC",
            "senderPublicKey" : "6LpFs4kDxXTkmBLBGu1RekVnTGx6Ko8h2hLxvBCJLPBP",
            "matcherPublicKey" : "7kPFrHDiGw1rCm7LPszuECwWYL3dMf6iMifLRDJQZMzy",
            "assetPair" : {
              "amountAsset" : null,
              "priceAsset" : "8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS"
            },
            "orderType" : "buy",
            "price" : 170078,
            "amount" : 5402596384,
            "timestamp" : 1498487650413,
            "expiration" : 1498487658382,
            "matcherFee" : 300000,
            "signature" : "5ihmSUCjwXGpjUriWGh7zVkRHwhof5LzK6qWUUXQj6cMeZNkmo56oX2zUBjGovaQL7cUzUqBYj6MCuNJ2yQZuoMA"
        },
        "order2" : {
            "id" : "3eYZ1H32vHayZe2Z6gjyAPPaAxWatDdJskNeKeufGGQQ",
            "senderPublicKey" : "6uj6df78drC82VzgxRUKQNN6BCqoZnYe1EjMnS3ph3bj",
            "matcherPublicKey" : "7kPFrHDiGw1rCm7LPszuECwWYL3dMf6iMifLRDJQZMzy",
            "assetPair" : {
              "amountAsset" : null,
              "priceAsset" : "8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS"
            },
            "orderType" : "sell",
            "price" : 162274,
            "amount" : 5400000000,
            "timestamp" : 1498487647148,
            "expiration" : 1498487663041,
            "matcherFee" : 300000,
            "signature" : "58wUfumqX6Xqp7UP4ETAUuoEar97zifJJu98fkSTzpNHEUmG8Jy2Y1PsGvpfgNpTkXRdGCt5oK8hwkGPLnuqWCpF"
        },
        "price" : 162274,
        "amount" : 5400000000,
        "buyMatcherFee" : 299855,
        "sellMatcherFee" : 300000
    }
}
```
Unconfirmed transaction:
```
{
    "event_type" : "utx",
    "payload" : {
        "type" : 4,
        "id" : "FZndbWcDBgsZTKixu6tebDG5QwuT2jYNz2MRE359xG33",
        "sender" : "3PPKDQ3G67gekeobR8MENopXytEf6M8WXhs",
        "senderPublicKey" : "ACrdghi6PDpLn158GQ7SNieaHeJEDiDCZmCPshTstUzx",
        "fee" : 10000000,
        "timestamp" : 1498469420523,
        "signature" : "wd2EbwbJBeBSEQaFQLH3APo1kjkoZsGRDjCV5n4HTswVcY3qxXVrvukoJHmdNLmmfVrUuRdzwfrYsyreYDeThdb",
        "recipient" : "3PQ6wCS3zAkDEJtvGntQZbjuLw24kxTqndr",
        "assetId" : "HzfaJp8YQWLvQG4FkUxq2Q7iYWMYQ2k8UF89vVJAjWPj",
        "amount" : 1,
        "feeAsset" : "HzfaJp8YQWLvQG4FkUxq2Q7iYWMYQ2k8UF89vVJAjWPj",
        "attachment" : "F5v2mb2C4xPK7CJm9Aa9cfUSA5fT"
    }
}
```
Block:
```
{
    "event_type" : "block",
    "payload" : {
        "version" : 2,
        "timestamp" : 1498487405663,
        "reference" :   "5mdKD2Xts8aczPWcUTNgUEYaWubjBQsgnCcMnpCLTNRSJCwKXd9pzQEh8np2FadY6PH6bc7KFRpiLTtP9T3r2udX",
        "nxt-consensus" : {
            "base-target" : 69,
            "generation-signature" : "DawQQwSj54VsjSncmHsmQbFPPk7yMXpa2ZPycEtm49he"
        },
    "transactions" : [ {
        "type" : 4,
        "id" : "H9KLrw3waN4HDXN6YPL6QxUUGngUiSrPhQk1ZkK6Vgig",
        "sender" : "3P8SLUYzHV5ay4hry71xRSXm8XBZCpwYTt4",
        "senderPublicKey" : "3Rqnu9UCnF1WyNjwWqeHSHTBk7BAeN1jJBC1MwXS5y68",
        "fee" : 100000,
        "timestamp" : 1498487303927,
        "signature" : "5QdhZmzQ6cgE2w8vtD1szp8LRnL4Cni6ToYgUq7zkTmTmxbQxnDyL6sGjUHXijrvFD1vpKgEdDbGNFQXTpmL5AKX",
        "recipient" : "3PE5ZLLSdrryLZ6TSCJZhimY9HxmQT8m4Ty",
        "assetId" : "4uK8i4ThRGbehENwa6MxyLtxAjAo1Rj9fduborGExarC",
        "amount" : 1174,
        "feeAsset" : null,
        "attachment" : "Dcwh3CEBYJMgCkpzudenjK"
    }, {
        "type" : 4,
        "id" : "2Ha6QB7UcGE61DeNTs9ATXJB4sw3gcwjwoqYR1u5ZB3u",
        "sender" : "3P31zvGdh6ai6JK6zZ18TjYzJsa1B83YPoj",
        "senderPublicKey" : "46t5F1bUxG4mAQUiDyMKDBpWhHChLQSyhnVJ8R5jaLqH",
        "fee" : 100000,
        "timestamp" : 1498487273748,
        "signature" : "ir7UYPrMH4HZLLkaQMbFbZb9V5FEb7vy9r4TrQiViXmEip6zpitndRi8dVWKBTD8mhdtCLAie2agoceQ1hidS4g",
        "recipient" : "3PFHbFrBib6F3wmqJKmeDVuwJB2KxR14Eqy",
        "assetId" : null,
        "amount" : 22214754621,
        "feeAsset" : null,
        "attachment" : ""
    }, {
        "type" : 4,
        "id" : "TP317NT1i1HW9p6SPFE4j2vdSC2o8QEDR9DgTV4vCqJ",
        "sender" : "3PPKDQ3G67gekeobR8MENopXytEf6M8WXhs",
        "senderPublicKey" : "ACrdghi6PDpLn158GQ7SNieaHeJEDiDCZmCPshTstUzx",
        "fee" : 10000000,
        "timestamp" : 1498487395968,
        "signature" : "3wfwMoUgEZ7DqSZYoRKjuBnnj92u3SoquVKTLPierqKiQXXPD63znArXfjH5LF5Y7ERtmgj9zhA1Wb6osKFtPmuu",
        "recipient" : "3PQ6wCS3zAkDEJtvGntQZbjuLw24kxTqndr",
        "assetId" : "HzfaJp8YQWLvQG4FkUxq2Q7iYWMYQ2k8UF89vVJAjWPj",
        "amount" : 1,
        "feeAsset" : "HzfaJp8YQWLvQG4FkUxq2Q7iYWMYQ2k8UF89vVJAjWPj",
        "attachment" : "GnQQFohQSDtLYuwNf1LnSbhxqhR"
    }],
    "generator" : "3PFrn8EHRhjJGEQxYwWKdJcwcsW1XFRJbmz",
    "signature" : "4ZfdWGUq4LcntWYmb1YKiQCUiRjbeY882ihXaVq66DeGavP7XZrcWoi4BTdwAZ1NaFY4d8LRQaqYhV5u4u1bTzkK",
    "fee" : 110200000,
    "blocksize" : 3223,
    "height" : 555384
  }
}
```
Balance change:
```
{
    "event_type" : "balance",
    "payload" : {
        "address" : "",
        "balances" : {
            "WAVES" : 1264213718872765,
            "28rURQX5YKKVtdg1NBkMZN4iaXMVMr4YUnH3pvQZttzW" : 1,
            "2aNMjB9fe7mKqiG9zws8KvRLLQuKZb3o7vuGixuzwPFX" : 10000,
            "3wqMtvbLgCAHaStSNEoqYRVp1vrrJoaP41DdC5Mfe98L" : 6948,
            "4eWBPyY4XNPsFLoQK3iuVUfamqKLDu5o6zQCYyp9d8Ae" : 1000,
            "4rmhfoscYcjz1imNDvtz45doouvrQqDpbX7xdfLB4guF" : 7,
            "4vV2ZSC8hzADa8Ed4f6mUuSCkreJrCCRksc6NaXhmiYW" : 1000000,
            "5DmkDK1e5j7oGwzZqy1gFwVUsXYskvRLwMYUdVSirSHb" : 162,
            "89C2F79559Hg6bS1Lnxja82BRjW62XHjyC2ihsqCUj4u" : 100000000,
            "8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS" : 37417000,
        }
    }
}
```