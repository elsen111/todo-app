import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { dummyUser, type DummyUser } from "../data/dummyData";

interface AuthContextValue {
      user: DummyUser | null;
      isLoading: boolean;
      login: (user: DummyUser) => void;
      logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
      const [user, setUser] = useState<DummyUser | null>(null);
      const [isLoading, setIsLoading] = useState<boolean>(true);

      useEffect(() => {
            //           api.get("/auth/me")
            // .then((res) => setUser(res.data))
            // .catch(() => setUser(null))
            // .finally(() => setIsLoading(false));

            setUser(dummyUser);
            setIsLoading(false);
      }, [])

      return (
            <AuthContext.Provider
                  value={{user, isLoading, login: setUser, logout: () => setUser(null)}}
            >
                  { children }
            </AuthContext.Provider>
      )
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}