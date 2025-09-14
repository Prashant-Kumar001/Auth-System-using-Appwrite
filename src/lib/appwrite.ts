import index from "@/config";
import { Client, Account, ID } from "appwrite";



const client = new Client()
client.setEndpoint(index.appWriteUrl)
client.setProject(index.appWriteProjectId);

const account = new Account(client);


export {  account };
