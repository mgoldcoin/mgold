# Transactions Fees

There are currently 13 different types of transactions in the Waves Blockchain. the following table shows the minimal required fees in non-scripted case \(accounts don’t have scripts, assets don’t have scripts\) and for each time the script is called, total transaction’s fee increases by 0.004 Waves.

**Note. **If a scripted account transfers a smart asset, then the fee is increased twice \(the fee increases _**+0.004**_ every time the transaction is validated by account’s script or asset’s script\), you can check here the [_**transactions examples**_](/development-and-api/waves-node-rest-api/example-transactions.md).

| Transaction | Minimal Transaction Fee in WAVES |
| :--- | :--- |
| Issue | 1 |
| Transfer | 0.001 |
| Reissue | 1 |
| Burn | 0.001 |
| Exchange | 0.003 |
| Lease | 0.001 |
| Cancel Lease | 0.001 |
| Alias | 0.001 |
| Mass Transfer | 0.001 + 0.0005\*N |
| Data | 0.001 per kilobyte, rounded up |
| Set Script | 0.01 |
| Set Sponsorship | 1 |
| Set Asset Script | 1 |

## Fee Calculation with Smart Trading Feature

|  | Transaction | Order |
| :--- | :--- | :--- |
| plain account | controlled by consensus rules == tx.fee | controlled by trading rules == order.fee |
| smart account or smart asset | tx.fee + 0.004.waves | order.fee + 0.004.waves |
| smart account and smart asset | tx.fee + 0.004.waves + 0.004.waves | order.fee + 0.004.waves + 0.004.waves |

**Examples: **

* plain transfer fee is 0.001.waves, if user makes account scripted or smart asset transfer, the fee should be 0.005.waves, but if user will transfer smart assets from scripted account the final fee is 0.009.waves
* plain exchange transaction fee is 0.003.waves, if one of orders is from smart account fee should be 0.007, if both orders \(BUY/SELL\) from scripted accounts fee for such case is 0.011.waves. But matcher also can be scripted, this makes fee as 0.015.waves 
* the heaviest case is transaction created by scripted matcher where both orders from scripted accounts and assets pair uses smart assets: 0.003\(extx\) + 0.004\(scriped matcher\) + 2\*\(order.fee + 0.004\(scripted acc\) + 2\*0.004\(smart asset\)\)



