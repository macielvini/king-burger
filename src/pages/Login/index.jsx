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
    <div className="flex w-screen items-center justify-center h-screen">
      <div className="font-secondary w-full text-5xl font-bold flex justify-center items-center gap-4">
        <img src={logo} alt="logo" className="h-16" />
        food explorer
      </div>
      <div className="w-full flex justify-center items-center">
        <form
          action=""
          className="bg-slate-800 p-16 rounded-xl flex flex-col gap-8 w-full max-w-xl"
        >
          <p className="text-4xl text-center font-medium">Faça login</p>
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
          <button
            type="submit"
            className="w-full bg-accent font-bold p-3 rounded-lg hover:brightness-90 hover:transition-all"
          >
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
