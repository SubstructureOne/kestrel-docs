---
sidebar_position: 2
---

# Self-Managed Database

Users should be able to manage their own data. This is especially important 
given the [pay-go pricing model](paygo) employed by Kestrel - if 
you're 
paying to store your own data, you should be provided the tools to see what 
you're paying for and whether it's worth it.

The main reason for the self-managed database however is not the pricing model 
but the principle. By providing full access and transparency to user data, 
Kestrel provides full ownership to users over the data they generate through 
using Kestrel applications. Any data they generate they are able to freely 
inspect, modify, and delete.

## Crytography

The [Kestrel Photos](https://kestrelphotos.substructure.one) sample 
application goes a step further and encrypts all data at upload time. No one 
other than those with access to the private key used to encrypt uploaded 
images is able to extract the image data provided - not the app developers 
or even the hosting providers.

Kestrel does not itself provide any built-in cryptographic functionality; 
Kestrel Photos relies on the web browser's built-in support. The lack of 
private key management tools for the average end-user makes fully 
user-controlled encryption an awkward user experience (for example, in 
Kestrel Photos, when switching to a new web browser, the user must export 
and import their private keys manually, since the encryption keys are not 
associated with their Kestrel account). App developers are encouraged 
however to consider how encryption might best be employed to protect their 
users' data.  