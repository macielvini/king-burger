import { createContext, useEffect, useState } from "react";
import { api } from "../services/api/api";

export const authContext = createContext();

export default function AuthProvider({ children }) {
  const [credentials, setCredentials] = useState({
    token: undefined,
    name: undefined,
    email: undefined,
  });

  function setHeaders(token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
  }

  useEffect(() => {
    const storage = localStorage.getItem("credentials");
    if (storage) setCredentials(JSON.parse(storage));
  }, []);

  useEffect(() => {
    setHeaders(credentials.token);
    localStorage.setItem("credentials", JSON.stringify(credentials));
  }, [credentials.token, credentials.email, credentials.name]);

  return (
    <authContext.Provider value={{ credentials, setCredentials }}>
      {children}
    </authContext.Provider>
  );
}
