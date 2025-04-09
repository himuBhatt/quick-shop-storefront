
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: string;
  email?: string;
  name?: string;
  avatar_url?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  signInWithGithub: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // This will be updated once Supabase is integrated
  const signInWithGithub = async () => {
    console.log("GitHub sign in requested - waiting for Supabase integration");
    // This will be implemented with Supabase
  };

  const signOut = async () => {
    console.log("Sign out requested - waiting for Supabase integration");
    // This will be implemented with Supabase
    setUser(null);
  };

  // Check for existing session on load
  useEffect(() => {
    const checkSession = async () => {
      try {
        // This will be implemented with Supabase
        setIsLoading(false);
      } catch (error) {
        console.error("Session check error:", error);
        setIsLoading(false);
      }
    };

    checkSession();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, signInWithGithub, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
