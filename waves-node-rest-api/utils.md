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



