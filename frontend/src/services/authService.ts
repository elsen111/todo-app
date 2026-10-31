import { apiClient } from '../config/api/api';
import type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
  UserResponse,
} from '../types/api/auth';

export const authService = {
  login: (payload: LoginRequest) =>
    apiClient.post<AuthResponse>('/auth/login', payload),

  register: (payload: RegisterRequest) =>
    apiClient.post<AuthResponse>('/auth/register', payload),

  getCurrentUser: () => apiClient.get<UserResponse>('/auth/me'),

  logout: (refreshToken: string) =>
    apiClient.post<null>('/auth/logout', { refreshToken }),
};
