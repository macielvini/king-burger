import { api } from "./api";

async function register(body) {
  const res = await api.post("/auth/register", body);
  return res.data;
}

async function login(body) {
  const res = await api.post("/auth", body);
  return res.data;
}

export const authApi = { register, login };
