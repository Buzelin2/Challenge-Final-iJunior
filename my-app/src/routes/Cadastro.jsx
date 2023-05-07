import React, { useState } from 'react';

import "./Cadastro.css";

import LeftNavBar from "./components/LeftNavBar";

const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  
  function verificar (){
    
    for (var i = 0; i < localStorage.length; i++) {
      if (email === localStorage.key(i)){
        const senha1 = localStorage.getItem(email);
        if(senha1 === senha){
          alert("logado");
        } else {
          alert("Esta senha está inválida");
        }
      }
    }
  }
  
  return (
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

      <h1>iSpotify ®<br/><br/>Música para todos</h1>

      <div className="form-group">
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          id="email"
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
        />
        <span className="material-symbols-outlined">lock</span>
      </div>

      <button className="Login" onClick={() => { verificar(); }}>
        Entrar
      </button>

      <div className="fazerLogin">
        <p>Não tem uma conta? <a href="#">INSCREVA-SE</a></p>
      </div>
    </div>
  );
}

export default Cadastro;
