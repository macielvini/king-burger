import React, { useState } from "react";
import logo from "../../assets/logo/logo.svg";
import TextInput from "../../components/forms/TextInput";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { authApi } from "../../services/api/authApi";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { credentials, setCredentials, updateStorage } = useAuth();
  const navigate = useNavigate();

  function formHandler(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function formSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await authApi.login(form);
      setCredentials({ ...credentials, token: res.accessToken });
      updateStorage({ ...credentials, token: res.accessToken });

      navigate("/");
    } catch (error) {
      if (error.response?.status === 401) {
        toast.error("E-mail ou senha inválido(s)");
      } else {
        toast.error("Erro inesperado");
        console.log(error.response);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex w-screen items-center justify-center h-screen flex-col md:flex-row">
      <div className="font-secondary w-full text-4xl md:text-5xl font-bold flex justify-center items-center gap-4">
        <img src={logo} alt="logo" className="md:h-16 h-10" />
        food explorer
      </div>
      <div className="w-full flex justify-center items-center">
        <form
          onSubmit={formSubmit}
          action=""
          className="md:bg-slate-800 md:p-16 px-12 py-16 mt-3 rounded-xl flex flex-col gap-8 w-full max-w-xl"
        >
          <p className="hidden md:block text-4xl text-center font-medium">
            Faça login
          </p>
          <TextInput
            label={"E-mail:"}
            name={"email"}
            placeholder={"Exemplo: exemplo@exemplo.com.br"}
            type={"email"}
            handler={formHandler}
            disabled={loading}
          />
          <TextInput
            label={"Senha:"}
            name={"password"}
            placeholder={"No mínimo 6 caracteres"}
            type={"password"}
            minLength="6"
            handler={formHandler}
            disabled={loading}
          />
          <button type="submit" className="btn-primary">
            Entrar
          </button>
          <Link to={"/register"} className="text-center">
            Criar uma conta
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
