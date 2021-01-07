const gcpMetadata = require('gcp-metadata');

const isAvailable = async () => await gcpMetadata.isAvailable();
console.log("Metadata available", isAvailable());
