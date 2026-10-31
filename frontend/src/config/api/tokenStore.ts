const REFRESH_KEY = 'refreshToken';

let accessToken: string | null = null;

export const tokenStore = {
  getAccessToken: () => accessToken,

  getRefreshToken: () => localStorage.getItem(REFRESH_KEY),

  setTokens: (tokens: { accessToken: string; refreshToken: string }) => {
    accessToken = tokens.accessToken;
    localStorage.setItem(REFRESH_KEY, tokens.refreshToken);
  },

  clear: () => {
    accessToken = null;
    localStorage.removeItem(REFRESH_KEY);
  },
};
