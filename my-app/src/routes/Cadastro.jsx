import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { redirect } from "react-router-dom";

import "./Cadastro.css";



const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [varteste, setVarTeste] = useState(false);

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
    

let aux1 = 0;
    for (var i = 0; i < localStorage.length; i++) {;
       if (email === localStorage.key(i)) {
         const senha1 = localStorage.getItem(email);
           if (senha1 === senha) {
             alert("logado");
               aux1 = 1;
         } else {
          alert("Esta senha está inválida");
          aux1 = 1;
         }
       }
      
     }
     if (aux1 === 0){
     alert("este email não foi cadastrado");
     }
  }

  return (
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

      <div class="principal">
        <h1>iSpotify ®<br /><br />Música para todos</h1>

        <form class="cadastroForm" onSubmit="return false" action={varteste? "/home" : "/cadastro"}>
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
