import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import {
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Group all values and functions securely
  const authInfo = {
    user,
    loading,
    login: (email, password) => signInWithEmailAndPassword(auth, email, password),
    googleLogin: () => signInWithPopup(auth, new GoogleAuthProvider()),
    resetPassword: (email) => sendPasswordResetEmail(auth, email),
  };

  return (
    // Only pass values down if context initialization has structure
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;