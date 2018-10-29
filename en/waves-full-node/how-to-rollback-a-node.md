# How to Rollback Your Node

The user can **rollback** to a specific height which will remove all blocks after that given height.

The user has two options:

1. The user is able to implement rollback under the following condition: **the rolling back can be implemented no more than 2000 blocks. **The node's owner can implement the rollback by Using `REST/debug/rollback` with the API key \(Please, check [Waves Full Node API](https://nodes.wavesplatform.com/api-docs/index.html#!/debug/rollback)\).
2. If the condition is not met \(the user needs to rollback to more than 2000 blocks\), then the user needs to follow these [_**instructions**_](/waves-full-node/options-of-running-waves-full-node.md) to get the actual blockchain state.



