# Export and import of the blockchain

**Note:** This functionality available since version 0.8.


## Export existing blocks to a binary file {#user-content-export-existing-blocks-to-a-binary-file}

**Note:** You have to stop the node before starting export of blocks.

To export existing blockchain to the binary file run following command. Export is quite a fast operation, but resulting binary file could additionally take up to 1/3 of `data` folder size on disk.

On Windows:

```
java -cp waves-all-<version>.jar com.wavesplatform.Exporter [configuration-file-name] [output-file-name] [height]
```

On Linux:

```
Mainnet: sudo -u waves exporter /etc/waves/waves.conf [output-file-name] [height]
Testnet: sudo -u waves-testnet exporter-testnet /etc/waves-testnet/waves.conf [output-file-name] [height]
```

If the parameter `height` was not given all blocks will be exported. Otherwise, only blocs up to the `height` will be exported to the output file.

The output file name parameter is optional, name 'blockchain' is used by default. As a result, a file named '&lt;output-file-name&gt;-&lt;height&gt;' will be created in the current folder.

## Remove the existing node's data

In order to fully rebuild the node's state, you have to remove the existing node's `data` folder. 
On Windows, `data` folder usually located in `%HOMEPATH%\waves\data`.

On Linux it's in the `/var/lib/waves[-testnet]/` folder:

```
sudo rm -rdf /var/lib/waves[-testnet]/data
```

## Import blocks from the binary file {#user-content-import-blocks-from-the-binary-file}

**Note:** The node must be stopped before importing the blockchain.

**Note:** If you already have some data in the node's `data` folder, the import will continue to append new data from the blockchain's binary file. So, you might be willing to remove the existing data. Please be careful while appending data, mixing data from different versions can lead to an erroneous state. 

To import the blockchain and rebuild the state run the following command.

On Windows:

```
java -cp waves-all-<version>.jar com.wavesplatform.Importer [configuration-file-name] [binary-file-name]
```

On Linux:

```
Mainnet: sudo -u waves importer /etc/waves/waves.conf [binary-file-name]
Testnet: sudo -u waves-testnet importer-testnet /etc/waves-testnet/waves.conf [binary-file-name]
```

Import is a heavy operation and could take a few hours to complete.

## Downloading exported blockchain

You can download recently exported blockchains using following links: 
* TestNet: http://blockchain.testnet.wavesnodes.com/
* MainNet: http://blockchain.wavesnodes.com/


