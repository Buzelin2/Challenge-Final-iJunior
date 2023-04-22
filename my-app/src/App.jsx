import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function deletar(dnum) {
  if (dnum === 1) {
    const meum = document.querySelector("#ms0");
    meum.style.display = "none";
  }
  if (dnum === 2) {
    const medo = document.querySelector("#ms1");
    medo.style.display = "none";
  }
  if (dnum === 3) {
    const metr = document.querySelector("#ms2");
    metr.style.display = "none";
  }
}
function mudarcor(num) {
  if (num === 1) {
    const meubotao = document.querySelector("#cr1");

    if (meubotao.style.backgroundColor === "green") {
      meubotao.style.backgroundColor = "transparent";
    } else {
      meubotao.style.backgroundColor = "green";
    }
  }

  if (num === 2) {
    const meubotao = document.querySelector("#cr2");

    if (meubotao.style.backgroundColor === "green") {
      meubotao.style.backgroundColor = "transparent";
    } else {
      meubotao.style.backgroundColor = "green";
    }
  }

  if (num === 3) {
    const meubotao = document.querySelector("#cr3");

    if (meubotao.style.backgroundColor === "green") {
      meubotao.style.backgroundColor = "transparent";
    } else {
      meubotao.style.backgroundColor = "green";
    }
  }
}

function App() {
  const [color, setcolor] = useState();

  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,300,0,0"
      />

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0"
      />

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0"
      />

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0"
      />

      <div className="esquerda">
        <div className="esquerda-box">
          <h1>
            iSpotify
            <img
              src="icons8-registered-48.png"
              alt=""
              className="registrated"
            />
          </h1>
          <div className="artistas-musicas">
            <p>
              <span class="material-symbols-outlined">album</span>
              Artistas
            </p>
            <p>
              <span class="material-symbols-outlined">favorite</span>
              Músicas Curtidas
            </p>
          </div>
          <div className="logout">
            <p>
              <span class="material-symbols-outlined">logout</span>
              Logout
            </p>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="upper">
          <img className="album" src="\81TnWHafWdL._AC_SL1448_.jpg"></img>
          <div className="textos">
            <p className="playlist">Playlist</p>
            <p className="daily">Daily Mix 1</p>
            <p className="texto3">Red Hot Chili Peppers, Coldplay e mais</p>
            <p className="texto3">Spotify - 50 músicas 1h 7min</p>
          </div>
        </div>

        <div className="icons-top">
          <img src="icons8-circled-play-65.png" alt="" className="play" />
          <img src="Property 1=Default.png" alt="" className="hearth" />
          <span class="material-symbols-outlined md-36" id="download">
            download_for_offline
          </span>
          <img src="icons8-ellipsis-35.png" alt="" className="three-dots" />
        </div>

        <div class="cabeçalhoMusica">
          <span class="titulo">#TITULO</span>
          <span class="alb">ÁLBUM</span>
          <span class="relogio">REL</span>

          <hr class="linha"></hr>

          <div class="musica" id="ms0">
            <span class="numMusica">1</span>
            <div class="Musica">
              <p>The Zephyr Song</p>
              <p>Red Hot Chili Pepers</p>
            </div>
            <span class="Album">By The Way</span>
            <button onClick={() => mudarcor(1)} class="coraçao" id="cr1">
              <img src="Property 1=Default.png"></img>
            </button>
            <button onClick={() => deletar(1)} class="Relogio">
              <div className="re1">
                <div className="re2"></div>
                <div className="re3"></div>
              </div>
            </button>
          </div>

          <div class="musica" id="ms1">
            <span class="numMusica">2</span>
            <div class="Musica">
              <p>Talk </p>
              <p>Coldplay</p>
            </div>
            <span class="Album">X&Y</span>
            <button onClick={() => mudarcor(2)} class="coraçao" id="cr2">
              <img src="Property 1=Default.png"></img>
            </button>
            <button onClick={() => deletar(2)} class="Relogio">
              <div className="re1">
                <div className="re2"></div>
                <div className="re3"></div>
              </div>
            </button>
          </div>

          <div class="musica" id="ms2">
            <span class="numMusica">3</span>
            <div class="Musica">
              <p>Cidade Negra</p>
              <p>Firmamento</p>
            </div>
            <span class="Album">Cidade Negra Acústico MTV</span>
            <button onClick={() => mudarcor(3)} class="coraçao" id="cr3">
              <img src="Property 1=Default.png"></img>
            </button>
            <button onClick={() => deletar(3)} class="Relogio">
              <div className="re1">
                <div className="re2"></div>
                <div className="re3"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
