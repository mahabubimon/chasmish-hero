import { createContext } from "react";
import useFirebase from "../hooks/useFirebase";
import useGlasses from "../hooks/useGlasses";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const firebaseData = useFirebase();
  const glassesData = useGlasses();

  const data = { firebaseData, glassesData };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
