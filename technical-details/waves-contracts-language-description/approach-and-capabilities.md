# Approach and capabilities
Waves Contracts are simple predicates, answering a question whether a given transaction is allowed.

There're 2 places to restrict a transaction: AccountScript and AssetScript.

## Account Script
An account can be restricted of any outgoing transaction based on signature(s) and other supplied data, named proofs, other transaction fields, current blockchain height and an arbitrary data existing in a blockchain, like data from Oracles, which post the data via `DataTransaction`.

To setup an `AccountScript`, account needs to issue `SetScriptTransaction` which contains the predicate. Upon success every outgoing transaction will be validated not by the default mechanism of signature validation, but according to the predicate logic. `AccountScript` can further be changed or cleared if the script installed allows the new `SetScriptTransaction` to process. The default account has no script, which is equivalent(except for restrictions -- read further!) to this script:

```
sigVerify(tx.bodyBytes, tx.proofs[0], tx.senderPk)
```

Some actions are denied for ScriptedAccounts:
 - Mining, since supporting multisignature blocks looks like  unnecessary complication
 - Trading on DEX, since that would require multisignature orders i.e. a lot of work and, most importantly, unclear usability scenario

## AssetSctipt

One can issue a new token and restrict its transfer. The script is invoked upon the following operations with an asset:

 - `TransferTransaction`
 - `MassTransferTransaction`
 - `ReissueTransaction`
 - `BurnTransaction`

For example, In a scenario when both sender account and token are scripted, a `TransferTransaction` is processed upon the following conditions: 

 - tx is allowed by current `AccountScript`
 - tx is allowed by current `AssetScript`
 - Waves consensus rules are not broken(for example: No one can own negative amount of assets)

The same set of rules applies to `BurnTransaction` and `ReissueTransaction`. Keep in mind that for `ReissueTransaction` there's an additional invariant: asset can be reissued only if `reissuable` flag is set to `true`.

The following actions are denied with ScriptedAssets:

 - Trading on DEX
 - Using as fees

The goal of these restrictions is to keep the system simple yet preserve the new invariant that no one must have a way transfer a token unless it's allowed by the script. 

For language description, capabilities and available in-script API, please refer to [Smart Contracts Language Description page](language-description.md).
