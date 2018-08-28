# Upgrading
First of all, you need to check the[ latest Waves Release.](https://github.com/wavesplatform/Waves/releases)

## Upgrading the node
Basically, the node should be upgraded as follows:
1. Stop the node
2. Export all existing blocks in the blockchain to a binary file. Please read [the documentation about export and import of the blockchain.](/waves-full-node/export-and-import-from-the-blockchain.md) or download the binary file.
3. Update node's executables
4. Import binary file
5. Start the node

##Upgrading the node to Latest Version(0.13.4)
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
sudo dpkg -i waves_0.13.4_all.deb
```
6. Import blocks from the binary file:
```bash
sudo -u waves importer /etc/waves/waves.conf /usr/share/waves/mainnet-[some height]
```
7. After import do not forget to remove the file:
```bash
sudo rm /usr/share/waves/mainnet-[some height]
```

## Update notes
With the latest release(Version 0.13.4), the user can activate the following features:
* Data Transaction, feature number 5
* Burn Any Tokens, number 6
* Fee Sponsorship, number 7
* Fair PoS, feature number 8
To vote for any set of available features, please add them to node's configuration file as follows:

```bash
features {
    supported = [5, 7] # This is an example, make your own decision what vote for
}
```

## Update the configuration

Please, read the updated [documentation of Waves node configuration file](/waves-full-node/how-to-configure-a-node.md)
