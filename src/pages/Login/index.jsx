import React, { useState } from "react";
import logo from "../../assets/logo/logo.svg";
import TextInput from "../../components/forms/TextInput";

function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  function formHandler(e) {
    e.preventDefault();
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  return (
    <div className="flex w-screen items-center justify-center h-screen flex-col md:flex-row">
      <div className="font-secondary w-full text-4xl md:text-5xl font-bold flex justify-center items-center gap-4">
        <img src={logo} alt="logo" className="md:h-16 h-10" />
        food explorer
      </div>
      <div className="w-full flex justify-center items-center">
        <form
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
            type={"text"}
            handler={formHandler}
          />
          <TextInput
            label={"Senha:"}
            name={"password"}
            placeholder={"No mínimo 6 caracteres"}
            type={"password"}
            minLength="6"
            handler={formHandler}
          />
          <button type="submit" className="btn-primary">
            Entrar
          </button>
          <a href="#" className="text-center">
            Criar uma conta
          </a>
        </form>
      </div>
    </div>
  );
}

export default Login;
