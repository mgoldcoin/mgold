# Transactions Fees

There are currently 13 different types of transactions in the Waves Blockchain. the following table shows the minimal required fees in non-scripted case \(accounts don’t have scripts, assets don’t have scripts\) and for each time the script is called, total transaction’s fee increases by 0.004 Waves.

**Note. **If a scripted account transfers a smart asset, then the fee is increased twice \(the fee increases _**+0.004**_ every time the transaction is validated by account’s script or asset’s script\).

| Transaction | Minimal Fees in WAVES |
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



