import React from "react";

import { AuthProvider } from "./auth";

interface AppProvider {
  children: React.ReactNode;
}

export default function AppProvider({ children }: AppProvider) {
  return <AuthProvider>{children}</AuthProvider>;
}
