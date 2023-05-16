import { createContext, useEffect, useState } from "react";
import { api } from "../services/api/api";

export const authContext = createContext();

export default function AuthProvider({ children }) {
  const [credentials, setCredentials] = useState({
    token: "",
    name: "",
    email: "",
  });

  function setHeaders(token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
  }

  function updateStorage(credentials) {
    localStorage.setItem("credentials", JSON.stringify(credentials));
  }

  useEffect(() => {
    const storage = localStorage.getItem("credentials");
    if (storage) setCredentials(JSON.parse(storage));
    if (storage?.token) localStorage.removeItem("credentials");
  }, []);

  useEffect(() => {
    setHeaders(credentials.token);
  }, [credentials.token]);

  return (
    <authContext.Provider
      value={{ credentials, setCredentials, updateStorage }}
    >
      {children}
    </authContext.Provider>
  );
}
