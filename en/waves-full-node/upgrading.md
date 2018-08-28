# Upgrading
1. First of all, you need to check the[ latest Waves Release.](https://github.com/wavesplatform/Waves/releases) and choose the latest mainet release.
2. Download the DEB or Jar file depending on your operating system.
3. Upgrade DEB by running the following command:
```bash
sudo importer or sudo exporter
```
4. Upgrade JAR by running the following command:
```bash
sudo -u waves java -cp waves-all-X.Y.Z.jar com.wavesplatform.Importer... / ... Exporter ...
```
5. Check the release notes. If there are new features to vote and activate, you will need to include that in the config.

## Upgrading the node
Basically, the node should be upgraded as follows:
1. Stop the node
2. Export all existing blocks in the blockchain to a binary file. Please read [the documentation about export and import of the blockchain.](/waves-full-node/export-and-import-from-the-blockchain.md) or download the binary file.
3. Update node's executables
4. Import binary file
5. Start the node

##Upgrading the node to the Latest Version
1. Stop the Node
2. After stopping the node execute following command to export existing blocks to a binary file:
```bash
sudo -u waves java -cp '/usr/share/waves/lib/*' -Dwaves.directory=/var/lib/waves com.wavesplatform.Exporter /etc/waves/waves.conf /usr/share/waves/mainnet
```
3. Import the binary file
4. Remove data folder:
```bash
sudo rm -rdf /var/lib/waves/data
```
5. Install the new version of the node:
```bash
sudo dpkg -i theNewVersionName.deb
```
6. Import blocks from the binary file:
```bash
sudo -u waves importer /etc/waves/waves.conf /usr/share/waves/mainnet-[some height]
```
7. After import do not forget to remove the file:
```bash
sudo rm /usr/share/waves/mainnet-[some height]
```

## Update the configuration

Please, read the updated [documentation of Waves node configuration file](/waves-full-node/how-to-configure-a-node.md)
