import React, { useEffect, useState } from "react";

function Success() {
  const [count, setCount] = useState(5);

  function countdown() {
    setTimeout(() => {
      if (count > 0) {
        setCount(count - 1);
      }
    }, 1000);
  }

  useEffect(() => countdown(), [count]);

  return (
    <div className="text-center flex h-screen items-center justify-center flex-col md:p-16 px-12 py-16 gap-8">
      <h1 className="font-bold text-3xl ">Conta criado com sucesso!</h1>
      <p>Em alguns segundos vamos te redirecionar para página de login!</p>
      <p className="font-bold text-6xl bg-accent px-4 py-2 rounded-lg">
        {count}
      </p>
      <button className="btn-primary mt-3">Ir agora!</button>
    </div>
  );
}

export default Success;
