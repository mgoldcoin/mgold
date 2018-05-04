# Cryptographic Functions in Smart Account language

| Function | Description | Parameters |
| :--- | :--- | :--- |
| sigVerifyF | To verify and validate a signature | **Sign: **signature from transaction, we   use elliptic curve signature, version       curve25519.                                          **Message: **ByteVector **                           Public Key: **ByteVector |
| keccak256\(message\) | Hash computation for keccak256 | **Message:** byte array. |
| blake2b256\(message\) | Hash computation for blake2b256 | **Message:** byte array. |
| sha256\(message\) | hash computation for sha256 | **Message:** byte array. |

* **sigVerifyF**

```java
 val sigVerifyF: PredefFunction =
          PredefFunction("sigVerify", 100, BOOLEAN, List(("message", BYTEVECTOR), ("sig", BYTEVECTOR), ("pub", BYTEVECTOR)))
    {
            case (m: ByteVector) :: (s: ByteVector) :: (p: ByteVector) :: Nil =>
              Right(global.curve25519verify(m.toArray, s.toArray, p.toArray))
            case _ => ???
    }
```

* **Keccak256**

```java
val keccak256F: PredefFunction  = hashFunction("keccak256", 10)(global.keccak256)
```

* **Blake2b256**

```java
val blake2b256F: PredefFunction = hashFunction("blake2b256", 10)(global.blake2b256)
```

* **Sha256**

```js
val sha256F: PredefFunction     = hashFunction("sha256", 10)(global.sha256)
```



