import React, { useState, useCallback, useMemo } from 'react';
import type { User } from '../types';
import { AuthContext } from '../hooks/useAuth';

const STORAGE_KEY_TOKEN = 'koda_token';
const STORAGE_KEY_USER = 'koda_user';

const getStoredToken = (): string | null => {
  return localStorage.getItem(STORAGE_KEY_TOKEN) || sessionStorage.getItem(STORAGE_KEY_TOKEN);
};

const getStoredUser = (): User | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_USER) || sessionStorage.getItem(STORAGE_KEY_USER);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(getStoredToken);
  const [user, setUser] = useState<User | null>(getStoredUser);
  const [isLoading] = useState(false);

  const login = useCallback((newToken: string, userData: User, rememberMe: boolean = true) => {
    const storage = rememberMe ? localStorage : sessionStorage;
    storage.setItem(STORAGE_KEY_TOKEN, newToken);
    storage.setItem(STORAGE_KEY_USER, JSON.stringify(userData));
    setToken(newToken);
    setUser(userData);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY_TOKEN);
    localStorage.removeItem(STORAGE_KEY_USER);
    sessionStorage.removeItem(STORAGE_KEY_TOKEN);
    sessionStorage.removeItem(STORAGE_KEY_USER);
    setToken(null);
    setUser(null);
  }, []);

  const contextValue = useMemo(() => ({
    user,
    token,
    login,
    logout,
    isAuthenticated: !!token,
    isLoading
  }), [user, token, login, logout, isLoading]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};