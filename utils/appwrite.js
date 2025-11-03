import { Client, Databases, Account, Storage } from "appwrite";

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || 'ganapathy-webpage-data');

export const databases = new Databases(client);
export const account = new Account(client);
export const storage = new Storage(client);
