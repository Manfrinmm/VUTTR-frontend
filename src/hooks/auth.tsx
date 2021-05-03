import React, { createContext, useCallback, useContext, useState } from "react";
import { toast } from "react-toastify";

import api from "../services/api";

interface IUser {
  name: string;
  email: string;
}

interface ISignCredentials {
  email: string;
  password: string;
}

interface IAuthData {
  user: IUser;
}

interface IAuthContextData {
  user: IUser;
  signIn(credentials: ISignCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<IAuthData>(() => {
    const token = localStorage.getItem("@vuttr:token");
    const user = localStorage.getItem("@vuttr:user");

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      api.get("/tools").catch(() => {
        localStorage.removeItem("@vuttr:token");
        localStorage.removeItem("@vuttr:user");

        return {} as IAuthData;
      });

      return { user: JSON.parse(user) };
    }

    return {} as IAuthData;
  });

  const signIn = useCallback(async ({ email, password }: ISignCredentials) => {
    const toastId = toast.info("Fazendo login...", { autoClose: false });

    try {
      const response = await api.post("/sessions", {
        email,
        password,
      });

      const { token, user } = response.data;

      localStorage.setItem("@vuttr:token", token);
      localStorage.setItem("@vuttr:user", JSON.stringify(user));

      api.defaults.headers.authorization = `Bearer ${token}`;

      setAuthData({ user });

      toast.dismiss(toastId);
    } catch (error) {
      toast.update(toastId, {
        render: "Falha ao fazer login. Favor, verifique suas credenciais.",
        type: "error",
        autoClose: 5000,
      });
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@vuttr:token");
    localStorage.removeItem("@vuttr:user");

    setAuthData({} as IAuthContextData);
  }, []);

  return (
    <AuthContext.Provider value={{ user: authData.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
