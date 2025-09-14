import { ID } from "appwrite";
import { account } from "@/lib/appwrite";

type createAccount = {
  name: string;
  email: string;
  password: string;
};

type loginAccount = {
  email: string;
  password: string;
};

class AuthService {
  async register({ email, password, name }: createAccount) {
    try {
      const user = await account.create(ID.unique(), email, password, name);
      if (user) {
        await this.login({ email, password });
      } else {
        return user;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }: loginAccount) {
    try {
      const session = await account.createEmailPasswordSession(email, password);
      return session;
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      await account.deleteSession("current");
    } catch (error) {
      throw error;
    }
  }

  async isLoggedIn() {
    try {
      const user = await account.get();
      return Boolean(user);
    } catch {
      return false;
    }
  }

  async getCurrentUser() {
    try {
      return await account.get();
    } catch {
      return null;
    }
  }
}

const authService = new AuthService();
export default authService;
