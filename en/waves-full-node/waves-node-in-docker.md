# Waves Node in Docker

The easiest way to run a Waves Node is by using the new **Waves Docker container**. It requires just **one command** to enable everything or change the settings of the node.

## About the image

* This Docker image contains scripts and configs to run Waves Node from version 0.13.0 for TESTNET, MAINNET or CUSTOM networks.
* The image is focused on fast and convenient deployment of Waves Node.
* Container downloads `.jar` file and configuration files from the [releases section](https://github.com/wavesplatform/Waves/releases) and runs it.

## Running the Image

It is highly recommended to read more about [Waves Node configuration](/waves-full-node/how-to-configure-a-node.md) before running the container.

The simplest way to run a container:

```js
docker run -it wavesplatform/node
```

**Note: We recommend to start a container like below for MAINNET:**

```js
docker run -p 6869:6869 -p 6868:6868 -e WAVES_LOG_LEVEL=DEBUG -e WAVES_HEAP_SIZE=2g -v YOUR_LOCAL_PATH_HERE:/waves wavesplatform/node
```

**For TESTNET:**

```js
docker run -p 6869:6869 -p 6863:6863 -e WAVES_LOG_LEVEL=DEBUG -e WAVES_HEAP_SIZE=2g -v YOUR_LOCAL_PATH_HERE:/waves wavesplatform/node
```

**You can run container with predefined environment variables:**

| Env variable | Description |
| :--- | :--- |
| `WAVES_WALLET_SEED` | Plain text seed for node wallet. Container converts it to base58. |
| `WAVES_WALLET_SEED_BASE58` | Base58 encoded seed. |
| `WAVES_WALLET_PASSWORD` | Password for wallet file. |
| `WAVES_VERSION` | Node version. Default value is`latest`. You can find the list of available versions [here](https://github.com/wavesplatform/Waves/releases). |
| `WAVES_NETWORK` | Available values are`MAINNET`,`TESTNET`and`CUSTOM`. |
| `WAVES_LOG_LEVEL` | Node logging level, available values:`OFF`,`ERROR`,`WARN`,`INFO`,`DEBUG`,`TRACE`. More details about logging are available [here](/waves-full-node/logging.md). |
| `WAVES_HEAP_SIZE` | Java Heap Size limit in -X Command-line Options notation \(`-Xms=[your value]`\). More details [here](https://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/jrdocs/refman/optionX.html) |
| `WAVES_CONFIG_FILE` | Path to your Waves Configuration file. |
| `WAVES_DECLARED_ADDRESS` | String with IP address and port to send as external address during handshake. Could be set automatically if UPnP is enabled. If `declared-address` is set, which is the common scenario for nodes running in the cloud, the node will just listen to incoming connections on `bind-address:port` and broadcast its `declared-address` to its peers. |

**Note: All variables are optional.**

## Configuration

The image supports config customization with env variables.  
Depending on env values the image generates `local.conf` file and stores it in `/waves/configs` directory.  
The simple rule of how to set a value in the configuration file:

1. Determine the path to variable in configuration file \([complete configuration file](/waves-full-node/how-to-configure-a-node.md)\)
2. Join all section names with two underscores\(`__`\).
3. Replace all dashes with one underscore \(`_`\).
4. Capitalize the final string.

For instance, if you want to set the value of `waves.rest-api.enable` , pass an environment variable`WAVES__REST_API__ENABLE=no`;

