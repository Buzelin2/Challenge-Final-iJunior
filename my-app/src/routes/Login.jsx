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

    for (var i = 0; i < localStorage.length; i++) {
      if (emaill == localStorage.key(i)) {
        aux++;
      }
    }
    if (aux === 1) {
      alert("este email ja foi cadastrado")

    } else {
      localStorage.setItem(emaill, senhaa);

    }

  };



  return (

    <div class="principal">

      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

      <h1>Inscrever-se em uma <br></br>
        conta grátis do <br></br>
        iSpotify ®</h1>
      <div class="form-group">
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          id="email"
        />
        <span class="material-symbols-outlined">mail</span>
      </div>
      <div class="form-group">
        <input
          type="text"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Crie uma Senha"
          id="senha"
        />
        <span class="material-symbols-outlined">lock</span>
      </div>
      <div class="form-group">
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Como devemos chamar você?"
        />
        <span class="material-symbols-outlined">
          account_circle
        </span>
      </div>
      <button class="cadastrar"
        onClick={() => {
          armazenarDados();
        }}
      >
        Cadastrar
      </button>

      <div className="fazerLogin">
        <p>Já é um usuário do iSpotify? <a href="#">FAÇA LOGIN</a></p>
      </div>
    </div>
  );
};

export default Login;
