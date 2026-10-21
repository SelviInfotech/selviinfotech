/**
 * Public Appwrite config copied from the live site's js/appwrite-config.js.
 * These IDs are already exposed in the browser on selviinfotech.com.
 * Override any value at build time with the matching NEXT_PUBLIC_ variable.
 * The hostname that serves this site must be allowed in the Appwrite project
 * (Platforms), or the browser lookup returns 403.
 */
export const appwriteConfig = {
  endpoint:
    process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT ||
    "https://sgp.cloud.appwrite.io/v1",
  projectId:
    process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "69c940c8002596ff501f",
  databaseId:
    process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "69c95287003cdd9bea7e",
  collectionId:
    process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID || "ourstudents",
};

export function appwriteIsConfigured() {
  const values = Object.values(appwriteConfig);
  return values.every((value) => value && !value.startsWith("YOUR_"));
}
