# Обзор проблемы централизованных бирж {#Decentralizedcryptocurrencyexchange(DEX)-Motivation}

Потребность в конвертации и обмене крипто-токенов увеличивается с ростом числа криптовалют. Одной из основных 
особенностей блокчейн-среды является децентрализация, но до недавнего времени даже для криптовалют существовали только централизованные 
биржи. Многие биржи поддерживают покупку и продажу криптововалют, фиата и крипто-токенов. Примерами таких централизованных бирж 
являются Coinbase, BTC-e, ShapeShift и Mt.Gox. Опыт централизации в этой сфере является плачевным, из-за единой точки отказа - самой биржи.
Все средства пользователей должны храниться в одном месте для участия в торговле на централизованной бирже. 
Средства пользователя хранятся непосредственно на бирже, и она несет ответственность не только за сопоставление заявок и 
поддержку стакана заявок в валидном состоянии, но и за средства вкладчиков. 
Коллапс на бирже Mt.Gox является ярчайшим примером того, почему централизованные биржи не являются надежными: потери составили около 
650 000 BTC. Кто-то может взломать ядро биржи, и все пользователи потеряют все свои средства, так как их личные ключи хранятся 
в одном месте, так например произошло с фондом BTC-e. И это не единственные биржи, которые таким образом потеряли средства вкладчиков. 
Использование децентрализованного подхода в организации обмена помогает избежать вовлечения активов всех пользователей в проблемы, 
вызванные опасностью вторжения в работу ядра биржи.

# 1. Децентрализованная биржа {#Decentralizedcryptocurrencyexchange(DEX)-DecentralizedExchange}

Децентрализованная биржа не требует, чтобы пользователи доверяли ей свои деньги: кошелек пользователя не контролируется единственным 
агентом системы. Заявки подписываются цифровой подписью непосредственно владельцами, в качестве процесса авторизации. 
Пользователи контролируют свои средства, но торговля на блокчейне имеет побочный эффект: невозможность торговли в режиме реального 
времени, как у централизованных бирж.

Децентрализованные биржи имеют некоторые преимущества по сравнению с централизованными, но также и недостатки.

Если все компоненты биржи децентрализованы, сопоставление заявок на покупку и продажу выполняется не автоматически, эта операция 
также должна выполняться пользователями. Например, для определенного заказа, который проверяется и помещается в стакан, 
любой другой пользователь может добавить заявку отмены с цифровой подписью и отправить полную транзакцию с парой заказов в 
блокчейн. Затем активы передаются между покупателем и продавцом.

Также с отсутствием автоматического сопоставления и быстрой отмены существует уязвимость исполнения заявок не в надлежащем порядке. 
У майнера следующего блока всегда будет возможность выполнить отмененные заказы сами с собой в качестве контрагента, потенциально получая 
прибыль от такого заказа.

Что если децентрализовать не все компоненты обмена, а только часть, которая сводит заявки (матчер)? Такой ход устраняет две из описанных выше 
проблем: арбитраж с уже отмененными ордерами и майнеров, которые исполняют заявки не по очереди, вклинивая свои заявки с целью прибыли. 
В отличие от централизованных бирж, децентрализованное решение с централизованным матчером не будет иметь возможности украсть 
депозиты пользователей.

# 2. Waves DEX {#Decentralizedcryptocurrencyexchange(DEX)-WavesDEX}


Waves предлагает децентрализованную биржу \(DEX\), которая позволяет торговать различными ассетами между пользователями, как 
традиционная биржа, но с более надежными гарантиями безопасности для конечных пользователей из-за децентрализованного характера. 
Возможность создания новых ассетов, на базе Waves, позволяет организовывать этап ранней торговли с краудфпндингом, что обеспечивает 
ликвидность токенов. Для этой цели токены должны продаваться в общем доступе.

Торговля в режиме реального времени достигается благодаря единственному централизованному элементу DEX - матчеру, который сводит 
заявки в стакане и выполняет торги на высокой скорости, как правило, за миллисекунды. Нет необходимости ждать, пока следующий блок 
узнает, успешно ли была произведена торговля, и это обеспечивает скорость на уровне централизованной биржи и 
безопасность на уровне децентрализованного протокола.

Заявки связаны парами индивидуальными нодами, которые работают как матчер. Перед тем как попасть в блокчейн Waves, биржевые транзакции 
всегда проверяются нодами для сопоставления цен в заявках, чтобы матчер не могло реализовать «неправильные» транзакции. Затем 
матчер создает Exchange Transaction, подписывает её своей подписью и помещает в блокчейн для фиксации изменений в балансах 
пользователей. Матчер также может сводить заявки частично, как и на обычной бирже. После подтверждения транзакции матчер подписывает 
подтвержденные нодами биржевые транзакции и кладет их в блокчейн, балансы пользователя меняются в соответствии с ценой исполнения заявки
и количеством ассетов в заявке. Важным моментом является то, что средства передаются только после публикации в блокчейне. 
Если матчер ошибется, то обмен не состоится, и средства не будут потеряны, потому что биржа не хранит у себя активы клиента.

Пользователь инициирует свою готовность приобретать или продавать активы, создавая, подписывая и отправляя запрос Limit Order на 
узел Matcher. Предельный ордер здесь такой же, как на всех биржах: заказ на покупку \ (sell \) фиксированного количества токена по 
цене, равной или лучше указанной. Когда новый заказ отправляется в DEX, все его поля проверяются на достаточность, а подпись 
проверяется открытым ключом отправителя. Затем заказ проверяется на основе внутреннего состояния Matcher: заказ с таким идентификатором 
уже не должен существовать, а сумма всех сумм заказа для определенного актива должна быть меньше или равна остатку этого актива на
 счете отправителя. Схема работы с DEX показана на рисунке 1:

A user initiates his willingness to purchase or sell assets by creating, signing and sending a Limit Order request to the Matcher node. The Limit Order here is the same as at all exchanges: an order for a buy \(sell\) of a fixed number of a token at a price equal or better than specified. When a new Order is submitted to the DEX all its fields are checked for adequacy and a signature is validated by sender's public key. Then, the Order is validated, based on internal Matcher state: Order with such id should not exist already and the sum of all Order amounts for a particular asset should be less or equal to the balance of that asset on sender's account. The scheme of work with the DEX is shown in the Figure 1:

![](/_assets/DEX1.png)Figure 1

User can set an expiration time \(maximum timestamp\) to the order, and when the order expires it will be automatically canceled. One of the rules at DEX is that all orders older than 30 days will be canceled by default. An expiration time for each order is specified by the user at the time the order is signed. The expiration time is a long integer value that represents the absolute number of seconds since the UNIX epoch. When the order is unfilled and its expiration time is more than now UNIX timestamp, it can be canceled by the user. In this case, the order gets into blockchain as Cancelled order and nobody can fill it since that.

The full execution cycle for one order is following:

1. If for a submitted order there is no counter-order matched by price, then the order would be put in the corresponding order book.
2. If there is a counter-order that matches with the submitted order, then the order execution is performed. That means the counter-order is removed from order book and the matcher creates exchange transaction, signs it by matcher's private key and is sent to the Waves network for including in the blockchain.
3. If an amount of a submitted order is a big enough to execute a few orders, Matcher creates several transactions. Created transactions have amounts equal to matched counter-order amounts. Matched counter-orders are chosen in order of their acceptance time \(First In, First Out\).

In every time of order's life, it has a certain state, depending on which stage of its life cycle it is now. When an order is in an order book, but not filled yet - it has "Accepted" state, also it can be "Filled", "Partially Filled" or "Canceled". Orders, which are not fully filled, can be canceled, after that the order will be removed from matcher's order book.

# 3. Matcher fee calculation {#Decentralizedcryptocurrencyexchange(DEX)-Matcherfeecalculation}

The fix full transaction fee now is equal to **0.003 waves for one order**, whether buying or selling, regardless of the amount of the future deal. The exchange transaction contains two separate fields for Matcher's fee, which goes from buyer's order and seller's order. An order can be fully executed by some transaction, in this case, all matcher fee from it is included in that transaction.

If the order is **partially** executed by some deal-transaction, matcherFee is included in that transaction proportionally to the executed amount, i.e.

**executedAmount \* orderMatcherFee / orderAmount.**

The remaining matcher fee for this order will be included in other transactions until order's full execution.

## 3.1 Example:

There are 3 different orders \(Figure 2\): two buy orders and one sell. For each full order, a user has to pay exactly **0.003 waves** of a fee, and this fee will be written off as the order is executed. In our example:

* the Order1 is fully matched with a 70% part of Order3 by Transaction1 and matcher's fee for this transaction is equal to 0.003 + 0.0021 - 0.003 = 0.0021 waves since Matcher pay to miners transaction fee which is also equal to 0.003 Waves.
* The 50% of Order2 matches with 30% part of Order3 by Transaction2 and matcher's fee for this transaction is equal to 0.0009 + 0.0015 - 0.003 = -0.0006 waves.

Thus, the fee that the matcher gets from users for these transactions is**0.0021 - 0.0006  = 0.0015 waves**. And the fee that the matcher pays to miners is**0.006waves**.

![](/_assets/matcher.png)Figure 2: example of matcher's fee work, TX1 - Transaction1, TX2 - Transaction2, Ord1 - Order1, Ord2 - Order2, Ord3 - Order3

###  {#Decentralizedcryptocurrencyexchange(DEX)-Summary:}

### Summary: {#Decentralizedcryptocurrencyexchange(DEX)-Summary:}

| period | matcher's fee | miner's fee | left for the matcher |
| :--- | :--- | :--- | :--- |
| last month | 681.42336675 waves | 569.721 waves | 16.39% |
| all time | 3476.01418346 waves | 2824.771 waves | 18.74% |

To sum up, for all time the matcher keeps only 18.74% of fees and everything else it pays to miners for placing transactions in blocks \(data for 8.02.2018\).

# 4. Installing DEX {#Decentralizedcryptocurrencyexchange(DEX)-InstallingDEX}

* Download the Waves client from our official website,
  [www.wavesplatform.com](http://www.wavesplatform.com/)
  , or use the webwallet, available at
  [beta.wavesplatform.com](https://beta.wavesplatform.com/)
* [Deposit your bitcoins](/waves-client/transfers-and-gateways/bitcoin-transfers.md) or any [supported coins and tokens](waves-client/wallet-management.md) into the wallet and [start trading using the Waves DEX](/waves-client/waves-dex.md).

# 5. Installing your Own Matcher {#Decentralizedcryptocurrencyexchange(DEX)-InstallingyourOwnMatcher}

* Users can install their own matcher by installing the Waves software and enabling the matching functionality.
* The Matcher earns fees from the services it provides, so you can substantially increase your mining revenues.
* When a user sends an order to Matcher he doesn't transfer ownership of his money to anyone, his money remains on his account until the order is matched with counter-order.

**Note.** Find more technical details about the Matcher [**here.**](/development-and-api/dex-api/matcher.md)
