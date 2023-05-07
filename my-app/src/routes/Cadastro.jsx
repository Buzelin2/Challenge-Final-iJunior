import React from 'react'
import { useEffect, useState } from "react";
import "./Cadastro.css";
import LeftNavBar from "./components/LeftNavBar";

const Cadastro = () => {
    const [color, setcolor] = useState();
  
    return (
      <div>    
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

      <h1>iSpotify ®<br></br><br></br>
        Música para todos</h1>
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
          placeholder="Senha"
          id="senha"
        />
        <span class="material-symbols-outlined">lock</span>
      </div>
      <button class="Login"
        onClick={() => {
          armazenarDados();
        }}
      >
        Entrar
      </button>

      <div className="fazerLogin">
        <p>Não tem uma conta? <a href="#">INSCREVA-SE</a></p>
      </div>
    </div>
    );
  }
  
  export default Cadastro