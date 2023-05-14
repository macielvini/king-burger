import React, { useState } from "react";
import logo from "../../assets/logo/logo.svg";
import TextInput from "../../components/forms/TextInput";
import { Link } from "react-router-dom";

function Register() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

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
            Criar uma conta
          </p>
          <TextInput
            label={"Seu nome:"}
            name={"name"}
            placeholder={"Exemplo: John Doe"}
            type={"text"}
            handler={formHandler}
          />
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
            Criar conta
          </button>
          <Link to={"/"} className="text-center">
            Já tenho uma conta
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
