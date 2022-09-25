# User Data

User data is stored in PostgreSQL using arbitrary JSONB data. Applications
can have multiple rows of application data but are expected to manage their
own schema and data model. For example, data types can be specified as a
common JSON attribute that can then be queried to filter results.

Indexes are defined on the server-side to provide fast access to specific
user application data, but the creation of application-specific JSONB
indexes is not currently supported.

## API

:::note

Full API details are not yet documented here because they are expected to
change significantly before public release.

:::