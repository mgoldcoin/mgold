# Cryptographic Functions in Smart Account language
![master](https://img.shields.io/badge/TESTNET-available-4bc51d.svg) ![master](https://img.shields.io/badge/node-&gt;%3D0.12.0-4bc51d.svg)




| Function | Description | Parameters |
| :--- | :--- | :--- |
| sigVerify\(message, sig, pub\) | To verify and validate a signature | **Sign:** signature from transaction, we   use elliptic curve signature, version       curve25519.                                           **Message:** ByteVector **Public Key:** ByteVector |
| keccak256\(message\) | Hash computation for keccak256 | **Message:** byte array. |
| blake2b256\(message\) | Hash computation for blake2b256 | **Message:** byte array. |
| sha256\(message\) | hash computation for sha256 | **Message:** byte array. |



