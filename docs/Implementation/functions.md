# Functions

Application functions are built on top of existing Kestrel function 
specifications.

## User Data

[User data](userdata) functions are used to provide basic access to 
queryable application-specific user data. The supported operations are:

1. Create user data
2. Query user data
3. Update user data
4. Delete user data

:::note

All Kestrel functions must currently be built on top of these existing basic
user-data interface specifications. Custom server-side code deployment is not
currently supported due to the limitations of the underlying infrastructure.
More flexibility is planned for future releases.

:::

## API

:::note

Full API details are not yet documented here because they are expected to
change significantly before public release.

:::