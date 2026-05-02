import React, { useState, useCallback, useMemo } from 'react';
import type { User } from '../types';
import { AuthContext } from '../hooks/useAuth';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem('koda_token') || sessionStorage.getItem('koda_token');
  });
  const [user, setUser] = useState<User | null>(
    token ? { id: '1', name: 'Usuario', email: 'user@koda.com' } : null
  );
  const [isLoading] = useState(false);

  const login = useCallback((newToken: string, userData: User, rememberMe: boolean = true) => {
    if (rememberMe) {
      localStorage.setItem('koda_token', newToken);
    } else {
      sessionStorage.setItem('koda_token', newToken);
    }
    setToken(newToken);
    setUser(userData);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('koda_token');
    sessionStorage.removeItem('koda_token');
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