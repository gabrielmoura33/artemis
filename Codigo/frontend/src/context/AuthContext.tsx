import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
} from 'firebase/auth';
import Router from 'next/router';
import { setCookie } from 'nookies';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../lib/firebase';

interface AuthContextProps {
  user: User | any;
  login: (email: string, password: string) => Promise<UserCredential>;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  logout: any;
}
const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          token: await user.getIdToken(),
        });

        // setCookie(undefined, 'artemis.token', user.uid, {
        //   maxAge: 60 * 60 * 1, // 1 Hour
        // });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signUp = (email: string, password: string): Promise<UserCredential> => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    const user = await signInWithEmailAndPassword(auth, email, password);

    const token = await user.user.getIdToken();

    if (user.user) {
      setCookie(undefined, 'artemis.token', token, {
        maxAge: 60 * 60 * 1, // 1 Hour
      });
      Router.push('/doacoes');
    }

    return user;
  };

  const logout = async () => {
    setUser(null);
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, login, signUp, logout }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
