import React, { useState } from "react";
import logo from "../../assets/logo/logo.svg";
import TextInput from "../../components/forms/TextInput";
import { Link, useNavigate } from "react-router-dom";
import { authApi } from "../../services/api/authApi";
import { toast } from "react-hot-toast";

function Register() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  function formHandler(e) {
    e.preventDefault();
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  const formSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await authApi.register(credentials);
      navigate("/success");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-screen-xl flex items-center justify-center h-screen flex-col lg:flex-row">
      <div className="font-secondary text-accent w-full text-4xl md:text-5xl md:mb-10 font-bold flex justify-center items-center gap-4 lg:px-12">
        <img src={logo} alt="logo" className="w-12 h-12 md:w-24 md:h-24" />
        KING BURGER
      </div>

      <div className="w-full flex justify-center items-center ">
        <form
          onSubmit={formSubmit}
          className="md:bg-secondary md:p-16 px-12 py-16 rounded-xl flex flex-col gap-8 w-full max-w-xl"
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
            disabled={loading}
            required={true}
            minLength="6"
            maxLength="20"
          />
          <TextInput
            label={"E-mail:"}
            name={"email"}
            placeholder={"Exemplo: exemplo@exemplo.com.br"}
            type={"text"}
            handler={formHandler}
            disabled={loading}
            required={true}
          />
          <TextInput
            label={"Senha:"}
            name={"password"}
            placeholder={"No mínimo 6 caracteres"}
            type={"password"}
            minLength="6"
            handler={formHandler}
            disabled={loading}
            required={true}
          />

          <button type="submit" className="btn-primary" disabled={loading}>
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
