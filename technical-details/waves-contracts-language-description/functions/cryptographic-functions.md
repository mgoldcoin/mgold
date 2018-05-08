# Cryptographic Functions in Smart Account language

| Function | Description | Parameters |
| :--- | :--- | :--- |
| sigVerifyF\(message, sig, pub\) | To verify and validate a signature | **Sign: **signature from transaction, we   use elliptic curve signature, version       curve25519.                                           **Message: **ByteVector **                           Public Key: **ByteVector |
| keccak256\(message\) | Hash computation for keccak256 | **Message:** byte array. |
| blake2b256\(message\) | Hash computation for blake2b256 | **Message:** byte array. |
| sha256\(message\) | hash computation for sha256 | **Message:** byte array. |



