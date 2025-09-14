"use client";

import { createContext } from "react";

interface UserContextType {
  authStatus: boolean;
  setAuthStatus: (value: boolean) => void;
  loading?: boolean;
}

export const UserContext = createContext<UserContextType>({
  authStatus: false,
  setAuthStatus: () => {},
});

export const UserProvider = UserContext.Provider;
