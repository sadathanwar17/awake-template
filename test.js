const gcpMetadata = require('gcp-metadata');

gcpMetadata.isAvailable().then((value) => console.log('Available', value))
