import React from 'react'
import { useEffect, useState } from "react";
import "./Home.css";

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
  const imgcv = "img/Property 1=Variant2.png";
  const imgc = "img/Property 1=Default.png";
  if (num === 1) {
    const meubotao = document.querySelector("#cr1");
    const imagen1 = meubotao.querySelector("#imagem1");

    if (imagen1.getAttribute("src") === "img/Property 1=Default.png") {
      imagen1.setAttribute("src", imgcv);
    } else {
      imagen1.setAttribute("src", imgc);
    }
  }

  if (num === 2) {
    const meubotao = document.querySelector("#cr2");
    const imagen1 = meubotao.querySelector("#imagem2");
    if (imagen1.getAttribute("src") === "img/Property 1=Default.png") {
      imagen1.setAttribute("src", imgcv);
    } else {
      imagen1.setAttribute("src", imgc);
    }
  }

  if (num === 3) {
    const meubotao = document.querySelector("#cr3");
    const imagen1 = meubotao.querySelector("#imagem3");
    if (imagen1.getAttribute("src") === "img/Property 1=Default.png") {
      imagen1.setAttribute("src", imgcv);
    } else {
      imagen1.setAttribute("src", imgc);
    }
  }
}

const Home = () => {
  const [color, setcolor] = useState();
  
  return (
    <div className="Home">

      <div className="main">
        <div className="upper">
          <img className="album" src="img/\81TnWHafWdL._AC_SL1448_.jpg"></img>
          <div className="textos">
            <p className="playlist">Playlist</p>
            <p className="daily">Daily Mix 1</p>
            <p className="texto3">Red Hot Chili Peppers, Coldplay e mais</p>
            <p className="texto3">Spotify - 50 músicas 1h 7min</p>
          </div>
        </div>

        <div className="icons-top">
          <img src="img/icons8-circled-play-65.png" alt="" className="play" />
          <img src="img/Property 1=Default.png" alt="" className="heart" />
          <img src="img/download-icon-down-arrow-23.png" id="download"></img>

          <img src="img/icons8-ellipsis-35.png" alt="" className="three-dots" />
        </div>

        <div className="cabeçalhoMusica">
          <span className="titulo">#TITULO</span>
          <span className="alb">ÁLBUM</span>
          <span className="relogio">REL</span>

          <hr className="linha"></hr>

          <div className="musica" id="ms0">
            <span className="numMusica">1</span>
            <div className="Musica">
              <p>The Zephyr Song</p>
              <p>Red Hot Chili Pepers</p>
            </div>
            <span className="Album">By The Way</span>
            <button onClick={() => mudarcor(1)} className="coraçao" id="cr1">
              <img
                src="img/Property 1=Default.png"
                className="heart"
                id="imagem1"
              ></img>
            </button>
            <button onClick={() => deletar(1)} className="Relogio">
              <div className="re1">
                <div className="re2"></div>
                <div className="re3"></div>
              </div>
            </button>
          </div>

          <div className="musica" id="ms1">
            <span className="numMusica">2</span>
            <div className="Musica">
              <p>Talk </p>
              <p>Coldplay</p>
            </div>
            <span className="Album">X&Y</span>
            <button onClick={() => mudarcor(2)} className="coraçao" id="cr2">
              <img
                src="img/Property 1=Default.png"
                className="heart"
                id="imagem2"
              ></img>
            </button>
            <button onClick={() => deletar(2)} className="Relogio">
              <div className="re1">
                <div className="re2"></div>
                <div className="re3"></div>
              </div>
            </button>
          </div>

          <div className="musica" id="ms2">
            <span className="numMusica">3</span>
            <div className="Musica">
              <p>Cidade Negra</p>
              <p>Firmamento</p>
            </div>
            <span className="Album">Cidade Negra Acústico MTV</span>
            <button onClick={() => mudarcor(3)} className="coraçao" id="cr3">
              <img
                src="img/Property 1=Default.png"
                className="heart"
                id="imagem3"
              ></img>
            </button>
            <button onClick={() => deletar(3)} className="Relogio">
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

export default Home