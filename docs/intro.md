---
slug: /
sidebar_position: 0
sidebar_label: Introduction
---
# Introduction

This is the documentation for the [substructure.one](https://substructure.one) 
project [Kestrel](https://kestrel.codes).

## What is Kestrel?

Kestrel is a substructure for deploying open source Software-as-a-Service 
applications. The Kestrel substructure is designed to fulfill the following 
design goals:

1. Allow developers to deploy open source applications at scale without 
   worrying about deployment costs or business models.
2. Incentivize contributors to improve open source applications.
3. Provide users with ownership over the data they generate as users of 
   these applications. 

Kestrel achieves this with its three main pillars: User Pay-Go Pricing, Fair 
Compensation, and the Self-Managed Database.

## User Pay-Go Pricing

On applications deployed on the Kestrel substructure, users pay their own way 
for the data they use and the API calls they make. While this may act as a 
disincentive to using the product, it means that SaaS applications can scale 
up automatically without the need for upfront investment or a proper 
business model.

More enterprising creators can pre-fund an account for their application and 
define rules that allow users to experience a "free tier". In fact, you can 
even take an existing Kestrel application and redeploy it with your own 
business model using tiers, subscription pricing, or whatever you think will 
best attract users. All of this is done while ensuring the developers of the 
original application are appropriately compensated (see next section).

See [User Pay-Go Pricing](Pillars/paygo.md) for more details.

## Fair Compensation

Kestrel defines base-level usage costs to ensure that the fundamental costs 
of data storage and compute are appropriately covered. Individual Kestrel 
applications have a premium applied to them so that in addition to base 
costs being covered, the application contributors also get compensated. 

See the [Fair Compensation](Pillars/faircompensation.md) documentation for more 
details.

## Self-Managed Database

Kestrel provides a simple document-like database interface for persisting 
queryable user data. It also provides an S3-like file storage interface for 
persisting binary data. Users are charged per GB-month for storage fees for 
each service. 

Since users are on the hook for their storage, they are 
provided free rein to review and manage the data associated with their 
account. Kestrel provides a usage dashboard

See [Self-Managed Database](Pillars/selfmanageddb.md) for more details.
