const gcpMetadata = require('gcp-metadata');

const isAvailable = await gcpMetadata.isAvailable();
console.log("Metadata available", isAvailable);
