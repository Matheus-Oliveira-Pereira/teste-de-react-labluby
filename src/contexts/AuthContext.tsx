import React, { createContext, useCallback, useState, useContext, ReactNode } from 'react';
import { api } from '../services/api';
import { User } from '../types/User';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthState {
  token: string;
  user: User;
  totalEmployees: number;
  totalVehicles: number;
}

interface AuthContextData {
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  token: string;
  user: User | undefined;
  totalEmployees: number | undefined;
  totalVehicles: number | undefined;
  totalVehiclesLoggedUser: number | undefined;
}

interface authProviderProps {
    children: ReactNode
}

export const AuthContext = createContext<AuthContextData|null >(null);

const AuthProvider: React.FC<authProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>();
  const [totalEmployees, setTotalEmployees] = useState<number>();
  const [totalVehicles, setTotalVehicles] = useState<number>();
  const [totalVehiclesLoggedUser, setTotalVehiclesLoggedUser] = useState<number>();
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('token');
    const totalVehiclesString = localStorage.getItem('totalVehicles');
    const totalVehicles = totalVehiclesString ? JSON.parse(totalVehiclesString) : null; 
    const totalEmployeesString = localStorage.getItem('totalEmployees');
    const totalEmployees = totalEmployeesString ? JSON.parse(totalEmployeesString) : null; 
    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null; 
    if (token && user) {
      return { token , user, totalVehicles, totalEmployees };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const params = new URLSearchParams();
     params.append('email', email);
     params.append('password', password);

    const response = await api.post('login', params);
    const { token, user, totalEmployees, totalVehicles, totalVehiclesLoggedUser } = response.data;

    setUser(user);
    setTotalEmployees(totalEmployees);
    setTotalVehicles(totalVehicles);
    setTotalVehiclesLoggedUser(totalVehiclesLoggedUser);
    localStorage.setItem('token', token);
    localStorage.setItem('totalEmployees', totalEmployees);
    localStorage.setItem('totalVehicles', totalVehicles);
    localStorage.setItem('user', JSON.stringify(user));

    setData({ token, user, totalEmployees, totalVehicles });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('token');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider 
      value={{
        signIn, 
        signOut, 
        token: data.token, 
        user: data.user, 
        totalEmployees: data.totalEmployees, 
        totalVehicles: data.totalVehicles, 
        totalVehiclesLoggedUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('UseAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };