import React from "react";
import logo from "../../assets/logo/logo.svg";

function Login() {
  return (
    <div className="flex w-screen items-center justify-center h-screen">
      <div className="font-secondary w-full text-5xl font-bold flex justify-center items-center gap-4">
        <img src={logo} alt="logo" className="h-16" />
        food explorer
      </div>
      <div className="w-full flex justify-center items-center">
        <form
          action=""
          className="bg-slate-800 p-16 rounded-xl flex flex-col gap-8"
        >
          <p className="text-4xl text-center font-medium">Faça login</p>
          <div className="flex flex-col gap-2">
            <label htmlFor="">E-mail</label>
            <input
              type="text"
              placeholder="Exemplo: exemplo@exemplo.com.br"
              className="p-3 bg-transparent border-gray-400 border-[1px] rounded-lg focus:outline-none focus:border-white"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Senha</label>
            <input
              type="text"
              placeholder="No mínimo 6 caracteres"
              className="p-3 bg-transparent border-gray-400 border-[1px] rounded-lg focus:outline-none focus:border-white"
            />
          </div>
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
