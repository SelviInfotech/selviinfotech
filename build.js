const fs   = require('fs');
const path = require('path');

const required = [
  'APPWRITE_ENDPOINT',
  'APPWRITE_PROJECT_ID',
  'APPWRITE_DATABASE_ID',
  'APPWRITE_COLLECTION_ID',
];

const missing = required.filter(key => !process.env[key]);
if (missing.length) {
  console.error('❌ Missing required environment variables:');
  missing.forEach(k => console.error('   -', k));
  process.exit(1);
}

const config = `// Auto-generated at build time from environment variables. Do not edit manually.
window.APPWRITE_CONFIG = {
  endpoint:     '${process.env.APPWRITE_ENDPOINT}',
  projectId:    '${process.env.APPWRITE_PROJECT_ID}',
  databaseId:   '${process.env.APPWRITE_DATABASE_ID}',
  collectionId: '${process.env.APPWRITE_COLLECTION_ID}',
};
`;

const outPath = path.join(__dirname, 'js', 'appwrite-config.js');
fs.writeFileSync(outPath, config, 'utf8');
console.log('✅ js/appwrite-config.js generated successfully.');
