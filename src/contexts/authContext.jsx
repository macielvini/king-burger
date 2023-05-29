import { createContext, useEffect, useState } from "react";
import { api } from "../services/api/api";
import { useNavigate } from "react-router-dom";

export const authContext = createContext();

export default function AuthProvider({ children }) {
  const [credentials, setCredentials] = useState({
    token: "",
    name: "",
    email: "",
    role: "",
  });

  function setHeaders(token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
  }

  function updateStorage(credentials) {
    localStorage.setItem("credentials", JSON.stringify(credentials));
  }

  function clearStorage() {
    localStorage.removeItem("credentials");
  }

  function logout() {
    const sure = window.confirm("Deseja mesmo sair da sua conta?");
    if (sure) {
      clearStorage();
      window.location.href = "/";
    }
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
      value={{
        credentials,
        setCredentials,
        updateStorage,
        clearStorage,
        logout,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
