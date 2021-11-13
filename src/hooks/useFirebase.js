import axios from "axios";
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

  const handleLogout = (history) => {
    signOut(auth)
      .then(() => {
        setUser("");
        history.push("/");
      })
      .finally(() => setIsLoading(false));
  };

  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    const url = "http://localhost:5000/users";
    axios.post(url, user).then().catch();
  };
  const updateUser = (email, displayName) => {
    const user = { email, displayName };
    const url = "http://localhost:5000/users";
    axios.put(url, user).then().catch();
  };

  return {
    user,
    setUser,
    error,
    saveUser,updateUser,
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
