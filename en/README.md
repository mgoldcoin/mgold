# What is Waves Platform

**Waves Platform** is an open blockchain platform which is designed for **ease of use** and **mass adoption.**

* It's a comprehensive blockchain ecosystem that provides all necessary features for business adoption.
* Fully functional exchange that is as fast as a centralized one but does not suffer from the same security issues.
* Smart contracts include account and token controls, which provide functionality to implement features such as multi-signature wallets, atomic swaps, 2-factor authorization. Waves also introduces a new transaction type which is called “Data Transactions”. Data Transactions is a way to post Oracle data to the blockchain all within the smart contract code.

* It's decentralized multi-purpose exchange platform \(fully decentralized, transparent and auditable\)
* It provides the services of launching, distributing and trading crypto token \(creation, issuance, transfer, exchange of assets and custom or fiat tokens\).
* Bitcoin, cryptos, fiat currencies, and all types of real-world commodities and assets can be issued, transferred and exchanged in a fully decentralized manner.
* The fiat-crypto problem is solved through Waves fiat gateways.
* Built on top of the Scorex framework.

The latest release for each network can be found in the [Releases section](https://github.com/wavesplatform/Waves/releases), you can switch to the corresponding tag and build the application.

[How to configure Waves node](/waves-full-node/configuration-parameters.md)

# Installation

Please read the [Waves Node Installation guide](/waves-full-node/how-to-install-a-node/how-to-install-a-node.md).

## Compiling Packages from source

It is only possible to create deb and fat jar packages.

### Install SBT \(Scala Build Tool\)

**For Ubuntu/Debian**

```bash
echo "deb https://dl.bintray.com/sbt/debian /" | sudo tee -a /etc/apt/sources.list.d/sbt.list
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2EE0EA64E40A89B84B2DF73499E82A75642AC823
sudo apt-get update
sudo apt-get install sbt
```

**For macOS**
You can install sbt on macOS using Homebrew.

**For Windows**
1. Install [Git for Windows](http://gitforwindows.org/)
2. Run `SBT` from it's shell

Without this, you will see:
> Cannot run program "git"

### Additional SBT issues

If you see
> java.lang.OutOfMemoryError: GC overhead limit exceeded

You have to provide SBT more memory through `Xmx` switch or turn off `UseGCOverheadLimit`

If you see
> java.lang.OutOfMemoryError: Metaspace

So, it's recommended to run SBT with flags:
```bash
SBT_OPTS="${SBT_OPTS} -Xms512M -Xmx1536M -Xss1M -XX:+CMSClassUnloadingEnabled -XX:-UseGCOverheadLimit" sbt
```

For Java9 it should be:
```bash
SBT_OPTS="${SBT_OPTS} -Xms512M -Xmx1536M -Xss1M -XX:+CMSClassUnloadingEnabled -XX:-UseGCOverheadLimit --add-modules=java.xml.bind --add-exports java.base/jdk.internal.ref=ALL-UNNAMED" sbt
```

These flags are useful for interactive mode especially.

### Create Package

Clone this repo and execute

```bash
sbt packageAll
```

.deb and .jar (the correct JAR-file has name `waves-all-*.jar`) packages will be in /package folder. To build testnet packages use

```bash
sbt -Dnetwork=testnet packageAll
```

# Running Tests

`sbt test`

# Running Integration Tests

## TL;DR

* Make sure you have [Docker](https://www.docker.com/get-docker) and SBT.
* `sbt it/test`

## Customizing Tests

By default,`it/test` will do the following:

* Build a container image with the fat jar and a [template.conf](https://github.com/wavesplatform/Waves/blob/master/src/it/resources/template.conf). The newly-built image will be registered with the local Docker daemon. This image is built with [sbt-docker](https://github.com/marcuslonnberg/sbt-docker) plugin.
* Run the test suites from `src/it/scala`, passing docker image ID via `docker.imageId` system property.

### Debugging

Integration tests run in a forked JVM. To debug test suite code launched by SBT, you will need to add remote debug options to`javaOptions`in`IntegrationTest`configuration:

```sbtshell
javaOptions in IntegrationTest += "-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005"
```

Debugging a node inside a container is a little more complicated: you will need to modify the`WAVES_OPTS`environment variable before starting a container.

### Running Tests from IDE

You can run integration test suites from your preferred IDE. The only requirement is to have Docker image pre-built and have`docker.imageId`system property defined for the run configuration. The easiest way to build an image is to issue`sbt docker`command. You'll find the image ID in the SBT output:

```
...
[info] Step 5/5 : ENTRYPOINT /opt/waves/start-waves.sh
[info]  ---> Using cache
[info]  ---> e243fa08d496
[info] Successfully built e243fa08d496
[info] Tagging image e243fa08d496 with name: com.wavesplatform/root
[success] Total time: 4 s, completed Mar 22, 2017 12:36:34 PM
```

In this example,`e243fa08d496`is the image ID you need. Make sure to re-build the image whenever the node code \(not the tests\) is changed. If you run the tests from SBT, there's no need to manually rebuild the image, SBT will handle this automatically.

# Sending metrics

We have two types of metrics:
1. Precise - used, for example, to analyze a block propagation
2. Aggregated - used for performance analyzing.

By default all metrics are disabled.

To enable metrics, update a configuration:
* For precise metrics - `metrics` section;
* For aggregated - `kamon`.

Some of aggregated metrics (RAM, CPU, all metrics for DEX) require an instrumentation with [AspectJ Weaver](https://www.eclipse.org/aspectj/).

[Download](https://mvnrepository.com/artifact/org.aspectj/aspectjweaver) the latest version and run Java with this agent, 
if you want to collect these metrics.  For example:
```bash
java -javaagent:/usr/share/aspectj/aspectjweaver-1.9.1.jar waves-all.jar custom-net.conf
```

Example of a custom configuration with both metrics enabled:
```hocon
kamon {
  enable = yes
  environment.host = "my-host"

  # Analzing DEX
  util.filters {
    "akka.tracked-actor" {
      includes = [
        "wavesplatform/user/matcher",
        "wavesplatform/user/matcher/*",
        "wavesplatform/user/matcher/balance-watcher-router/*",
        "wavesplatform/user/OrderHistory",
        "wavesplatform/user/MatcherTransactionWriter"
      ]
    }

    "akka.tracked-dispatcher" {
      includes = [
        "wavesplatform/**"
      ]
    }

    "akka.tracked-router" {
      includes = [
        "wavesplatform/user/matcher/balance-watcher-router",
      ]
    }
  }

  influxdb {
    hostname = "influx.example.com"
    port = 8086
    database = "custom-net"

    authentication {
      user = "login"
      password = "secure_password"
    }
  }
}

metrics {
  enable = yes
  
  # Reusing entered data from the kamon section
  node-id = ${kamon.environment.host}

  influx-db {
    username = ${kamon.influxdb.authentication.user}
    password = ${kamon.influxdb.authentication.password}
  }
}
```


**Note** Please find [**here**](/overview/how-to-use-this-guide.md) the instructions of using this guide.
