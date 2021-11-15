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
  const [admin, setAdmin] = useState(false);
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
    const url = "https://chasmish-hero.herokuapp.com/users";
    axios.post(url, user).then().catch();
  };

  const updateUser = (email, displayName) => {
    const user = { email, displayName };
    const url = "https://chasmish-hero.herokuapp.com/";
    axios.put(url, user).then().catch();
  };

  useEffect(() => {
    const url = `https://chasmish-hero.herokuapp.com/admin/${user.email}`;
    axios.get(url).then((user) => {
      const admin = user.data;
      setAdmin(admin.admin);
      setIsLoading(false);
    });
  }, [user.email]);
  return {
    user,
    admin,
    setUser,
    error,
    saveUser,
    updateUser,
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
