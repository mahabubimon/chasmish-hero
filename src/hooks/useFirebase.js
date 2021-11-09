import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const auth = getAuth();

  const registerNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const setNewUser = (name) => {
    return updateProfile(auth.currentUser, { displayName: name });
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser("");
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    setUser,
    error,
    setError,
    isLoading,
    setIsLoading,
    registerNewUser,
    setNewUser,
    signIn,
    googleSignIn,
    handleLogout,
  };
};

export default useFirebase;
