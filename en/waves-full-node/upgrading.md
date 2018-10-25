# Upgrading

1. First of all, you need to check the[ latest Waves Release.](https://github.com/wavesplatform/Waves/releases) and choose the latest Mainnet release.
2. Download the DEB or Jar file depending on your operating system.
3. Upgrade DEB by running the following command:
   ```bash
   sudo dpkg -i waves_X.Y.Z_all.deb
   ```
4. Or upgrade JAR by copying the new version over the old one
5. Check the release notes. If there are new features to vote and activate, you will need to include that in the config.

## Upgrading the Node

Basically, the node should be upgraded as follows:  
1. Stop the node  
2. Export all existing blocks in the blockchain to a binary file. Please read [the documentation about export and import of the blockchain.](/waves-full-node/export-and-import-from-the-blockchain.md) or download the binary file.  
3. Update node's executables  
4. Import binary file  
5. Start the node

## Upgrading the Node to the Latest Version on Linux

1. Stop the Node by executing the following command:
   ```bash
   sudo systemctl stop waves
   ```
2. After stopping the node execute following command to export existing blocks to a binary file:
   ```bash
   sudo -u waves exporter /etc/waves/waves.conf /usr/share/waves/mainnet
   ```
3. Remove data folder:
   ```bash
   sudo rm -rdf /var/lib/waves/data
   ```
4. Install the new version of the node:
   ```bash
   sudo dpkg -i waves_X.Y.Z_all.deb
   ```
5. Import blocks from the binary file:
   ```bash
   sudo -u waves importer /etc/waves/waves.conf /usr/share/waves/mainnet-[some height]
   ```
6. After import start the node:
   ```bash
   sudo systemctl start waves
   ```
7. Do not forget to remove binary blockchain files if you don't need them any more:
   ```bash
   sudo rm /usr/share/waves/mainnet-[some height]
   ```

## Update the Configuration

Please, read the updated [documentation of Waves node configuration file](/waves-full-node/how-to-configure-a-node.md)

## State Downloading and Applying

Every User needs to download the [_**latest State**_](http://blockchain.wavesnodes.com) which is the blockchain\_last.tar file \(this State is a  generated database by the node when it receives blocks\). Please note that this file is updated regularly.  Basically the **State** represents a **LevelDB** which stores its files in `/var/lib/waves/data`

### MD5 Checksum

here, you can see an example of the latest MD5 checksum for our Version 0.14.5 \(Mainnet + Testnet\).

* fb7078513a2f2e11121d6624a9374d95 waves-all-0.14.5.jar
* 406287b4efd51d3875718bfebbe337e7 waves\_0.14.5\_all.deb
* 1775e7c5b84aa48208785b7a9530385d waves-testnet\_0.14.5\_all.deb\).

The user needs to follow these steps:

1. [Download](http://blockchain.wavesnodes.com) the State database \(the blockchain\_last.tar file\).
2. Run the check sum by checking our [latest](https://github.com/wavesplatform/Waves/releases) releases.
3. Delete data folder by running `sudo rm -rdf /var/lib/waves/data`
4. Unpack the State to the correct direction `/var/lib/waves/data`  \(note, previously the user needed to clear this folder but not anymore\).
5. Finally, the user starts the node by running `sudo systemctl start waves`



