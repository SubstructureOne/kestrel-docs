# Files

Files are binary blobs that are stored in an S3-like bucket. Each user gets 
their own prefix, and each application the user has opted into gets its own 
prefix within the user prefix. File paths below that point are customizable 
by the app developer.

In line with the [Self Managed Database](../Pillars/selfmanageddb) pillar,
users have full access to the files associated with the applications they 
use. Be aware when developing your application that power users may decide 
to add, modify, or delete files within your application's sub-prefix on their 
own accord.

## API

The Kestrel files API supports uploading, deleting, and retrieving files 
with a given path within the user's application-specific prefix.

:::note

Full API details are not yet documented here because they are expected to 
change significantly before public release.

:::