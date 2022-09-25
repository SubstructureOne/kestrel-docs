---
sidebar_position: 1
---

# User Pay-Go Pricing

The Kestrel substructure adopts the uncommon approach of having end-users 
pay for infrastructure costs imposed by their usage of a given application 
(plus a premium: see the [Fair Compensation](faircompensation) 
documentation). In this way creators don't need to worry about business 
models or upfront investment - *all* of their users pay their own way.

This does of course provide a barrier to adoption, as users effectively 
cannot even test-run a product without setting up some form of payment. We 
try to address this concern in the following ways:

## Nanotransactions

The actual infrastructure costs associated with most cloud-based services 
are, when looked at from an individual user's perspective, truly miniscule. 
The concept of "microtransactions" has existed for some time but 
unfortunately has become something of a misnomer - spending $1, $5, or even 
$10+ on (usually in-game) purchases hardly qualifies as "micro"-anything. 
Most individual transactions on the Kestrel substructure will be measured in 
fractions of a cent, or (for recurring storage costs) maybe a few cents per 
month. Therefore we denote these as "nanotransactions" - costs that (again, 
for the typical application) will be so small as to be barely noticable.

## Micropayment Support via the Blockchain

Nanotransactions are handled internally in the Kestrel substructure database 
to minimize transaction costs. However users still need to transfer actual 
money into their accounts to get started. Using traditional credit card 
payment processors, it is not feasible to accept payments of less than 
a few dollars. However with certain transaction-efficient blockchains, such as 
Solana, users can easily transfer amounts in the range of $0.01 to $0.10 to 
get started and have plenty of headroom to experiment with their fair share 
of Kestrel applications.

Note that individual nanotransactions are *not* recorded on any blockchain. 
Only initial account funding transactions are supported via blockchain 
transactions. Kestrel is not a "blockchain-native" product, but happily 
takes advantages of blockchain features when applicable.

Traditional payment provider support is also planned, but will require a 
higher minimum transaction.

## Alternative Business Model Support

:::note

The functionality described in this section is not yet implemented, but is 
planned for implementation.

:::

Finally, although the native transaction scheme of Kestrel is to have 
end-users pay for everything independently, app creators who want to provide 
a more traditional subscription-type service with a free tier, or some other 
novel end-user experience, are still free to do so. Creators can pre-fund 
their application account and define rules for which user activities can 
draw from the application pool rather than their personal account. Business 
minded creators can even fork existing projects and provide their own 
payment scheme - the original creator will still be compensated 
appropriately, while any additional revenue will be routed to the new app 
creator (subject to the Fair Compensation rules).
