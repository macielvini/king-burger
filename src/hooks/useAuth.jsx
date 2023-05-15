import { useContext } from "react";
import { authContext } from "../contexts/authContext";

export const useAuth = () => useContext(authContext);
