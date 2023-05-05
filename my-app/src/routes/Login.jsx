import React from "react";
import { useEffect, useState } from "react";
import "./Login.css";

const Login = () => {
  const [color, setcolor] = useState();

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [nome, setNome] = useState();
  let dados = [];

  const armazenarDados = () => {

    let novoUsuario = {
      email: email,
      senha: senha,
      nome: nome,
    };

    verificarExistencia();
    dados.push(novoUsuario);
    let dadosJSON = JSON.stringify(dados);
    localStorage.setItem("dadosUsuarios", dadosJSON);
  };

  const verificarExistencia = () => {
    let dadosExtraidos = localStorage.getItem("dadosUsuarios");
    console.log('');
    for(let i=0 ; i<dadosExtraidos.length ; i++){
      console.log()
      if(dadosExtraidos[i].email === email){
        console.log("ESTE EMAIL JA ESTA CADASTRADO!!!!")
      }
    }
  }

  return (
    <div>
      <h1>Inscrever-se em uma conta grátis do iSpotify ®</h1>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="text"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        placeholder="Senha"
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
