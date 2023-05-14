import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Account.css"
import LeftNavBar from './components/LeftNavBar';

const Account = () => {

  const [email, setEmail] = useState('');
  const [email1, setEmail1] = useState('');
  const [senha, setSenha] = useState('');
  const [senha1, setSenha1] = useState('');
  const [senha2, setSenha2] = useState('');
  const [nome, setNome] = useState('');

  const handleCadastro = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Senha: ${senha}, Nome: ${nome}`);
    // adicione aqui o código para enviar o formulário para o servidor
  };
 const modal  = document.querySelector('#modal1');
 const fade  = document.querySelector('#fade1');
 const modal3  = document.querySelector('#modal2');
 const fade3  = document.querySelector('#fade2');
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 function ab_tr_email(){
  
modal.style.opacity ="1";
fade.style.opacity ="1";
fade.style.position ="fixed";
modal.style.display = "block";
 }
 function fe_tr_email(){
  modal.style.opacity ="0";
fade.style.opacity ="0";
fade.style.position ="relative";
modal.style.display = "none";
 }

 function fe_tr_senha(){
  modal3.style.opacity ="0";
  fade3.style.opacity ="0";
  fade3.style.position ="relative";
  modal3.style.display = "none";
 }

 function conferir(){
  if (!emailRegex.test(email1)) {
    alert('Por favor, insira um endereço de email válido.');
    return;
    }
  for (var i = 0; i < localStorage.length; i++) {
    if( localStorage.key(i) === email1){
      alert ("este email já foi cadastrado")
      return;
    }
  }
  var valor = localStorage.getItem(email);
  localStorage.setItem(email1, valor);
 localStorage.removeItem(email);
 setEmail (email1)
 
}
function ab_tr_senha(){
  modal3.style.opacity ="1";
fade3.style.opacity ="1";
fade3.style.position ="fixed";
modal3.style.display = "block";
  
}
function conferir_s(){
  const senha_p = localStorage.getItem(email)
  
  if(senha_p === senha){
   if(senha1 === senha2){
    localStorage.setItem(email, senha1);
   }else{
    alert("as senhas estão diferentes")
   }
  }else{
    alert("senha incorreta")
    return;
  }
}

  return (
    <div>

      <LeftNavBar />
      <div className="principal">

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

        <h1 className="texto1" style={{ fontSize: "49px" }}>Minha Conta</h1>


        <form id="cadastroForm" onSubmit={handleCadastro}>
          <div className="form-group">
            <input className= "tamanho"
              type="texto"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome"
              id="nome"

              required
            />
            <span className="material-symbols-outlined">account_circle</span>
          </div>

          <div className="form-group">
            <input className= "tamanho"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              id="nome"
              required
            />
            <span className="material-symbols-outlined">
              mail
            </span>
          </div>
          <button id='trocaremail' onClick={ab_tr_email} className="cadastrar">
            Trocar Email
          </button >
          <br />
          <button onClick={ab_tr_senha} className="cadastrar">
            Trocar Senha
          </button>
        </form>
      </div>

      <div id='fade1' className="fade hide"></div>
      <div id='modal1' className="modal hide">
        <div className="modalT">
          <h1>Novo E-mail</h1>
        </div>
        <div className="form-group1">
          <input
            type="texto"
            value={email1}
            onChange={(e) => setEmail1(e.target.value)}
            placeholder="Email"
            id="nome"
            required
          />
          <span className="material-symbols-outlined">
            mail
          </span>
          
        </div>
<div className= "botao">
  <button onClick={conferir} className= "botaoc" > Confirmar</button>
  <button onClick={fe_tr_email} className= "botaoca"> Cancelar</button>
</div>
      </div>

      <div  id='fade2' className= "fade12"></div>
      <div id='modal2' className="modal12"> 
      <h1 className= "texto2"> Nova senha</h1>
      <div className="form-group2">
          <input className= "tamanho"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha atual"
            id="nome"
            required
          />
          <span className="material-symbols-outlined">
            lock
          </span>
          
        </div>

        <div className="form-group2">
          <input className= "tamanho" 
            type="password"
            value={senha1}
            onChange={(e) => setSenha1(e.target.value)}
            placeholder="Nova senha"
            id="nome"
            required
          />
          <span className="material-symbols-outlined">
            lock
          </span>
          
        </div>

        <div className="form-group2">
          <input className= "tamanho"
            type="password"
            value={senha2}
            onChange={(e) => setSenha2(e.target.value)}
            placeholder="Confirmar nova senha"
            id="nome"
            required
          />
          <span className="material-symbols-outlined">
            lock
          </span>
          
        </div>
        <div className= "botao">
  <button onClick={conferir_s} className= "botaoc" > Confirmar</button>
  <button onClick={fe_tr_senha} className= "botaoca"> Cancelar</button>
</div>

      </div>

    </div>
    
  );
};

export default Account;
