import React from "react";
import { useEffect, useState } from "react";
import "./Login.css";

const Login = () => {
  
  

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [nome, setNome] = useState();
  

  const armazenarDados = () => {
      let aux = 0;
      const email1 = document.querySelector('#email');
      const senha1 = document.querySelector('#senha');
      const emaill = email1.value;
      const senhaa = senha1.value;
     
     for(var i = 0; i < localStorage.length; i++){
      if(emaill ==  localStorage.key(i)){
       aux++;
      }
     }
     if(aux === 1){
      alert("este email ja foi cadastrado")
      
     }else{
      localStorage.setItem(emaill, senhaa);
      
     }

  };

  

  return (
    <div>
      <h1>Inscrever-se em uma conta grátis do iSpotify ®</h1>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        id="email"
      />
      <input
        type="text"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        placeholder="Senha"
        id="senha"
      />
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome"
      />
      <button
        onClick={() => {
          armazenarDados();
        }}
      >
        Cadastrar
      </button>
    </div>
  );
};

export default Login;
