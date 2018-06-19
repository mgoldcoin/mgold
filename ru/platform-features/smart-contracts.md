# Смарт-контракты Waves

Смарт-контракты - важный механизм для любого блокчейна, и их реализация должна быть удобной и понятной для пользователей.

## Преимущества смарт-контрактов Waves Platform

Смарт-контракты добавляют Waves экосистеме следующие преимущества, Рисунок 1:

1. Смарт-контракты позволят создавать кошельки с **мультиподписью**, которые находятся под совместным контролем нескольких человек и решения по тому как распорядиться средствами не может приниматься только одним из участников. Для совершения транзакции все необходимые  согласно контракту стороны должны предоставить свои приватные ключи одновременно. Это чрезвычайно важная функция с точки зрения безопасности, которая позволяет командам безопасно управлять своими финансами и не давать ни одному человеку полного единоличного контроля над средствами кошелька. Это будет особенно полезно для продажи токенов, поскольку средства могут безопасно храниться до в ожидании сделки. 
2. В отличие от других подобных блокчейнов, смарт-контракты Waves **не используют gas** для не Тьюринг-полных смарт-контрактов, что означает, что затраты всегда фиксированы и известны заранее. Это делает Waves значительно более простым, по сравнению с Ethereum, а также эффективным и экономичным, при обеспечении такой же по своей сути услуги.
3.Также будет добавлена возможность атомик-своп, что позволит **замораживать токены** - то есть пользователи смогут вводить параметры, которые не позволяют покупателям продавать или переносить токены со своего адреса в течение определенного времени. Это включает в себя отправку токена пользователю, но при этом он остается непередаваемым в течение определенного периода времени. Наиболее очевидное применение такой возможности - это механизм инвестирования после проведения ICO.
4. Waves токены, такие же, как и Waves, что означает, что с ними можно обращаться точно также как which means that they are treated exactly the same and are held in your address — while the platform still supports token creation in the core and from the standard Waves wallet. Essentially, this makes life a lot easier for end users. Furthermore, the tokens you create can immediately be distributed and traded on the Waves decentralized exchange, DEX, with no further work.
5. Decentralized applications \(DApps\) which are based on Turing-complete smart contracts will be able to complete complicated processes on the Waves blockchain, meeting a wide range of different criteria.
6. Balance management, a user might want to make regular monthly payments, but to ensure that their account does not fall below a certain balance. Or they might want to keep a fixed amount of funds in one address and move everything above that to a separate account.

![](/_assets/Benefits-of-Waves-Smart-Contracts.png)Figure 1, Benefits of Implementing Smart Contracts to the Waves Platform.

## Stages of Waves Smart Contracts Implementation

There are two Stages, Figure 2:

1. Non-Turing Complete Smart Contracts which cover a large proportion of use cases, including smart accounts and smart tokens.

2. Turing Complete Smart Contracts which will allow the creation of decentralised applications on the blockchain and the possibility to send the transactions themselves.

![](/_assets/Stages-of-Waves-Smart-Contracts-Implementation.png)Figure 2, Stages of Waves Smart Contracts Implementation.

## Smart Accounts

The idea of a smart account is the following:

Before the transaction is submitted for inclusion in the next block, the account checks if the transaction meets certain requirements, defined in a script. The script is attached to the account so the account can validate every transaction before confirming it. The main requirement for our smart accounts is that they can be run for the price of normal transactions with a predefined fee, **without** any additional **“gas”** or other costs.

Smart accounts cannot send transactions themselves or transfer funds according to given conditions, but can read data from the blockchain \(for example, the height of a block or signatures from the transaction\) and return the result of a predicate obtained on the basis of this data.

## Smart Assets

If we plan to apply constraints on all operations for a specific asset, we cannot use a smart account. In our paradigm, we have smart assets for this purpose: the script will be attached to the asset and will work in a similar way. Transactions for such assets are valid only if the script returns True. For example, a script can verify proofs from a transaction, check if a notary/escrow approves the transaction, and that operations with the asset aren’t locked for a specified time. The script for the token is invoked upon the following operations with an asset:

* Transfer Transaction
* Mass Transfer Transaction
* Reissue Transaction
* Burn Transaction

## Scripts' Cost

We conducted performance tests for all aspects of our scripts. For this purpose, we developed an benchmark subproject with [JMH](http://openjdk.java.net/projects/code-tools/jmh/), that computes a complexity of scripts after compilation phase by AST (Abstract Syntax Tree) traversal in special _complexity units_. _Complexity units_ is a measure of the script's relative cost: we found out the most expensive operation in terms of computational complexity and defined it equal to 100 complexity units. The most expensive functions:
 - base58
 - sigVerify
In every test, we conducted 10 tests and calculated the average cost. The full results of performance tests that we conducted are presented [here](/technical-details/waves-contracts-language-description/script-performance-tests.md).
As a result, we define the following constraint for a script cost: a script must have a size no more 8 kB and must be faster than 20 executions of `sigVerify`, that is most expensive operation.
The fixed cost for each scripted unit is equal to 400000 _wavelets_ (Waves coins, 100000000 wavelets = 1 Wave), i.e. if you use a scripted asset (smart asset) then you pay 400000 wavelets, if you also have a scripted transaction then you have to pay 2 * 400000 wavelets. 

**Note.** you can find more technical details about our smart contracts implementation [**here**](/technical-details/waves-contracts-language-description.md).

