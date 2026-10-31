import axios, {
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';
import { tokenStore } from './tokenStore';
import type { ApiResponse } from '../../types/api/api';
import type { AuthResponse } from '../../types/api/auth';

const API_URL = (
  import.meta.env.VITE_API_URL ?? 'http://localhost:8080/api'
).replace(/\/+$/, '');

const PUBLIC_ENDPOINTS = ['/auth/login', '/auth/register', '/auth/refresh'];

interface RetryConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

const api = axios.create({ baseURL: API_URL, timeout: 10_000 });

const refreshClient = axios.create({ baseURL: API_URL, timeout: 10_000 });

const isPublicEndpoint = (url = '') => {
  const path = url.startsWith('/') ? url : `/${url}`;
  return PUBLIC_ENDPOINTS.some((p) => path.startsWith(p));
};

let refreshPromise: Promise<string> | null = null;

export const refreshAccessToken = (): Promise<string> => {
  if (refreshPromise) return refreshPromise;

  const refreshToken = tokenStore.getRefreshToken();
  if (!refreshToken) return Promise.reject(new Error('No refresh token.'));

  refreshPromise = refreshClient
    .post<ApiResponse<AuthResponse>>('/auth/refresh', { refreshToken })
    .then((res) => {
      tokenStore.setTokens(res.data.data);
      return res.data.data.accessToken;
    })
    .finally(() => {
      refreshPromise = null;
    });

  return refreshPromise;
};

api.interceptors.request.use((config) => {
  const token = tokenStore.getAccessToken();

  if (token && !isPublicEndpoint(config.url)) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const original = error.config as RetryConfig | undefined;

    if (
      error.response?.status !== 401 ||
      !original ||
      original._retry ||
      isPublicEndpoint(original.url)
    ) {
      return Promise.reject(error);
    }

    original._retry = true;

    try {
      const newToken = await refreshAccessToken();
      original.headers.Authorization = `Bearer ${newToken}`;
      return api(original);
    } catch {
      tokenStore.clear();

      if (window.location.pathname !== '/auth') {
        window.location.assign('/auth');
      }

      return Promise.reject(error);
    }
  },
);

const unwrap = <T>(res: AxiosResponse<ApiResponse<T>>) => {
  if (res.data.success === false) {
    throw new Error(res.data.message ?? 'Request failed.');
  }

  return res.data;
};

export const apiClient = {
  get: <T>(url: string, params?: object, config?: AxiosRequestConfig) =>
    api.get<ApiResponse<T>>(url, { ...config, params }).then(unwrap),

  post: <T>(url: string, body?: object, config?: AxiosRequestConfig) =>
    api.post<ApiResponse<T>>(url, body, config).then(unwrap),

  put: <T>(url: string, body?: object, config?: AxiosRequestConfig) =>
    api.put<ApiResponse<T>>(url, body, config).then(unwrap),

  patch: <T>(url: string, body?: object, config?: AxiosRequestConfig) =>
    api.patch<ApiResponse<T>>(url, body, config).then(unwrap),

  delete: <T = void>(url: string, config?: AxiosRequestConfig) =>
    api.delete<ApiResponse<T>>(url, config).then(unwrap),
};

export default api;
