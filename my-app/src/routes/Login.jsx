import React from "react";
import { useEffect, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";




const Login = () => {

  function validarCampos(campos) {
    for (let i = 0; i < campos.length; i++) {
      const campo = campos[i];
      if (!campo.value) {
        alert(`Por favor, preencha o campo ${campo.id}`);
        return false;
      }
    }
    return true;
  }

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [nome, setNome] = useState();



  const armazenarDados = () => {
    const email1 = document.querySelector('#email');
    const senha1 = document.querySelector('#senha');
    const emaill = email1.value;
    const senhaa = senha1.value;

    const campos = [
      { id: 'email', value: email },
      { id: 'senha', value: senha },
      { id: 'nome', value: nome },
    ];

    if (!nome && !email && !senha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (!validarCampos(campos)) {
      return;
    }

    if (localStorage.getItem(emaill)) {
      alert("Este email já foi cadastrado.");
    } else {
      localStorage.setItem(emaill, senhaa);
      alert("Cadastro realizado com sucesso!");
      document.querySelector('#cadastroForm').reset();
    }

    // let aux = 0;
    // const email1 = document.querySelector('#email');
    // const senha1 = document.querySelector('#senha');
    // const emaill = email1.value;
    // const senhaa = senha1.value;

    // for (var i = 0; i < localStorage.length; i++) {
    //   if (emaill == localStorage.key(i)) {
    //     aux++;
    //   }
    // }
    // if (aux === 1) {
    //   alert("este email ja foi cadastrado")

    // } else {
    //   localStorage.setItem(emaill, senhaa);

    // }
  };



  return (

    <div class="principal">

      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

      <h1>Inscrever-se em uma <br></br>
        conta grátis do <br></br>
        iSpotify ®</h1>

      <form id="cadastroForm">
        <div class="form-group">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            id="email"
            required
          />
          <span class="material-symbols-outlined">mail</span>

        </div>
        <div class="form-group">
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Crie uma Senha"
            id="senha"
            required
          />
          <span class="material-symbols-outlined">lock</span>
        </div>
        <div class="form-group">
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Como devemos chamar você?"
            id="nome"
            required
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
      </form>

      <div className="fazerLogin">
        <p>Já é um usuário do iSpotify? <Link to="./cadastro">FAÇA LOGIN</Link></p>
      </div>
    </div>
  );
};

export default Login;
