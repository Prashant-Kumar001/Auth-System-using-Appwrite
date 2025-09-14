const index = {
  appWriteUrl: String(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!),
  appWriteProjectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!),
  appWriteKey: String(process.env.NEXT_PUBLIC_APPWRITE_KEY!),
};

export default index;
