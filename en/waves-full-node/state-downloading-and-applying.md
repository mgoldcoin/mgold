## State Downloading and Applying

The user needs to download the [_**latest State**_](http://blockchain.wavesnodes.com) which is the blockchain\_last.tar file \(this State is a  generated database by the node when it receives blocks\). Please note that this file is updated regularly.  Basically the **State** represents a **LevelDB** which stores its files in `/var/lib/waves/data`

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



