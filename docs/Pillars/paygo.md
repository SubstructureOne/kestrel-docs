---
sidebar_position: 1
---

# User Pay-Go Pricing

The Kestrel substructure adopts the uncommon approach of having end-users 
pay for infrastructure costs imposed by their usage of a given application 
(plus a premium: see the [Fair Compensation](faircompensation) 
documentation). In this way creators don't need to worry about business 
models or upfront investment - their users pay their own way.

This does of course provide a barrier to adoption, as users effectively 
cannot test-run a product without setting up some form of payment. We 
try to address this concern in the following ways:

## Nanotransactions

The actual infrastructure costs associated with most cloud-based services 
are, when looked at from an individual user's perspective, truly miniscule. 
The concept of "microtransactions" has existed for some time but 
unfortunately has become something of a misnomer - spending $1, $5, or even 
$10+ on in-app purchases hardly qualifies as "micro"-anything. 
Most individual transactions on the Kestrel substructure will be measured in 
fractions of a cent, or (for recurring storage costs) maybe a few cents per 
month. Therefore we denote these as "nanotransactions" - costs that 
for the typical application will be so small as to be barely noticeable.

## Micropayment Support

Nanotransactions are handled internally in the Kestrel substructure database 
to minimize transaction costs. However users still need to transfer actual 
money into their accounts to get started. Using a traditional monthly invoice
method runs into issue for the typical user as processing fees overshadow the
actual service fees. To handle this users instead initiate one-time transfers
when needed to keep their account active.

Auto-refilling of your account, similar to how electronic car charging apps
and toll road pass infrastructure typically works, is planned but not yet
supported.


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
