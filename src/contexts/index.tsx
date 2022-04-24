import { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";

interface AppProviderProps {
  children: ReactNode
}

const AppProvider: React.FC<AppProviderProps> = ({ children }: AppProviderProps) => {
  return (
    <>
      <AuthProvider>
        {children}
      </AuthProvider>
    </>
  );
};

export default AppProvider;