import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import "./Cadastro.css";

import LeftNavBar from "./components/LeftNavBar";

const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

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

  function verificar() {
    const campos = [
      { id: 'email', value: email },
      { id: 'senha', value: senha },
    ];

    if (!email && !senha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (!validarCampos(campos)) {
      return;
    }

    const storedSenha = localStorage.getItem(email);

    if (storedSenha) {
      if (storedSenha === senha) {
        alert("Sucesso!");
      } else {
        alert("Esta senha está inválida");
      }
    } else {
      alert("Email não cadastrado.");      
    }

    document.querySelector('#cadastroForm').reset();

    // for (var i = 0; i < localStorage.length; i++) {
    //   if (email === localStorage.key(i)) {
    //     const senha1 = localStorage.getItem(email);
    //     if (senha1 === senha) {
    //       alert("logado");
    //     } else {
    //       alert("Esta senha está inválida");
    //     }
    //   }
    // }
  }

  return (
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

      <div class="principal">
        <h1>iSpotify ®<br /><br />Música para todos</h1>

        <form class="cadastroForm">
          <div className="form-group">
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              id="email"
              required
            />
            <span className="material-symbols-outlined">mail</span>
          </div>

          <div className="form-group">
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Senha"
              id="senha"
              required
            />
            <span className="material-symbols-outlined">lock</span>
          </div>

          <button className="Login" onClick={() => { verificar(); }}>
            Entrar
          </button>
        </form>

        <div className="inscrever">
          <p>Não tem uma conta? <Link to="/">INSCREVA-SE</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
