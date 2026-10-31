import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

import { authService } from '../services/authService';
import { refreshAccessToken } from '../config/api/api';
import { tokenStore } from '../config/api/tokenStore';
import type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
  UserResponse,
} from '../types/api/auth';

interface AuthContextValue {
  user: UserResponse | null;
  isLoading: boolean;

  login: (credentials: LoginRequest) => Promise<void>;
  register: (credentials: RegisterRequest) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        if (!tokenStore.getRefreshToken()) return;

        await refreshAccessToken();

        const { data } = await authService.getCurrentUser();
        setUser(data);
      } catch {
        tokenStore.clear();
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const startSession = (auth: AuthResponse) => {
    tokenStore.setTokens(auth);
    setUser(auth.user);
  };

  const login = async (credentials: LoginRequest) => {
    const response = await authService.login(credentials);
    startSession(response.data);
  };

  const register = async (credentials: RegisterRequest) => {
    const response = await authService.register(credentials);
    startSession(response.data);
  };

  const logout = async () => {
    const refreshToken = tokenStore.getRefreshToken();

    try {
      if (refreshToken) {
        await authService.logout(refreshToken);
      }
    } finally {
      tokenStore.clear();
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used inside <AuthProvider>');
  }

  return context;
}
