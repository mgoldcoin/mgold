### POST /utils/hash/secure

Produce a secure hash of a specified message.

**Request:**

```
ridethewaves!

```

**Response JSON example:**

```js
{
  "message": "ridethewaves!",
  "hash": "H6nsiifwYKYEx6YzYD7woP1XCn72RVvx6tC1zjjLXqsu"
}

```

### POST /utils/hash/fast

Fast hash of specified message.

**Request:**

```
ridethewaves!

```

**Response JSON example:**

```js
{
  "message": "ridethewaves!",
  "hash": "DJ35ymschUFDmqCnDJewjcnVExVkWgX7mJDXhFy9X8oQ"
}

```

### GET /utils/seed/{length}

Generate a random seed of specified length.

**Response JSON example:**

```js
{
  "seed": "3XcHLU6bYRax1c"
}
```

### GET /utils/seed

Generate a random seed.

**Response JSON example:**

```js
{
  "seed": "2uwLAe7Rp7TuNiBTKsmTEJ5wxGqkBHjcyPq2tMXiWye7"
}

```

### POST /utils/script/compile

Compiles a human-readable code into a Base58 representation for Node.

**Request body:**
A code.

**Response params:**

```
"script" - Base58-encoded representation of compiled script for Node
"complexity" - How script is complex
"extraFee" - An extra fee for all transactions going from an account with this script if the miner is this node
```

**A valid request body example:**

```
let x = 1
(x + 1) == 2
```

**Response for it:**

```json
{
  "script": "3rbFDtbPwAvSp2vBvqGfGR9nRS1nBVnfuSCN3HxSZ7fVRpt3tuFG5JSmyTmvHPxYf34SocMRkRKFgzTtXXnnv7upRHXJzZrLSQo8tUW6yMtEiZ",
  "complexity": 11,
  "extraFee": 10001
}
```

**An invalid request body example:**

```
x == 1
```

**Response for it:**

```json
{
  "error": "Typecheck failed: A definition of 'x' is not found"
}
```

### POST /utils/script/estimate

Compiles a human-readable code into a Base58 representation for Node.

**Request body:**
A code.

**Response params:**

```
"script" - Base58-encoded representation of compiled script for Node (what did you send in the body)
"complexity" - How script is complex
"extraFee" - An extra fee for all transactions going from an account with this script if the miner is this node
```

**A valid request body example:**

```
3rbFDtbPwAvSp2vBvqGfGR9nRS1nBVnfuSCN3HxSZ7fVRpt3tuFG5JSmyTmvHPxYf34SocMRkRKFgzTtXXnnv7upRHXJzZrLSQo8tUW6yMtEiZ
```

**Response for it:**

```json
{
  "script": "3rbFDtbPwAvSp2vBvqGfGR9nRS1nBVnfuSCN3HxSZ7fVRpt3tuFG5JSmyTmvHPxYf34SocMRkRKFgzTtXXnnv7upRHXJzZrLSQo8tUW6yMtEiZ",
  "complexity": 11,
  "extraFee": 10001
}
```

**An invalid request body example:**

```
This is even not a Base58 string!
```

**Response for it:**

```json
{
  "error": "Unable to decode base58: assertion failed: Wrong char in Base58 string"
}
```
