import React from 'react'
import { useEffect, useState } from "react";
import "./Home.css";
import LeftNavBar from "./components/LeftNavBar";







function Musica(props) {
  const { index, track, favorita, imagemFavorita, onDelete, onToggleFavorita } = props;
  const { name, artists, album } = track;

  function handleClickFavorita() {
    onToggleFavorita();
  }

  function handleClickDeletar() {
    onDelete();
  }

  return (
    <div className="musica" id={`ms${index}`}>
      <span className="numMusica">{index + 1}</span>
      <div className="Musica">
        <p>{name}</p>
        <p>{artists[0].name}</p>
      </div>
      <span className="Album">{album.name}</span>
      <button onClick={handleClickFavorita} className="coraçao" id={`cr${index}`}>
        <img src={favorita ? imagemFavorita : "img/Property 1=Default.png"} className="heart" id={`imagem${index}`} />
      </button>
      <button onClick={handleClickDeletar} className="Relogio">
        <div className="re1">
          <div className="re2"></div>
          <div className="re3"></div>
        </div>
      </button>
    </div>
  );
}

function ListaMusicas() {
  const [musicas, setMusicas] = useState([]);

  const [imagemFavorita, setImagemFavorita] = useState("img/Property 1=Default.png");

  function deletar(index) {
    const novasMusicas = [...musicas];
    novasMusicas.splice(index, 1);
    setMusicas(novasMusicas);
  }

  function mudarcor(index) {
    const novasMusicas = [...musicas];
    novasMusicas[index].favorita = !novasMusicas[index].favorita;
    setMusicas(novasMusicas);

    if (novasMusicas[index].favorita) {
      setImagemFavorita("img/Property 1=Variant2.png");
    } else {
      setImagemFavorita("img/Property 1=Default.png");
    }
  }

  useEffect(() => {
    // Recuperar os dados do localStorage e definir o estado inicial de musicas
    const newTracksString = localStorage.getItem('newTracks');
    const newTracks = JSON.parse(newTracksString) || [];
    setMusicas(newTracks);
  }, []);

  return (
    <div className='ss'>
      {musicas.map((track, index) => (
        <Musica
          key={track.id}
          index={index}
          track={track}
          favorita={track.favorita}
          imagemFavorita={imagemFavorita}
          onDelete={() => deletar(index)}
          onToggleFavorita={() => mudarcor(index)}
        />
      ))}
    </div>
  );
}

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

// apiSpotify.get ("/artists/0TnOYISbd1XYRBk9myaseg").then((response) => console.log(response.data));
//   .get("/api/users")
//   .then((response) => setUser(response.data))
//   .catch((err) => {
//     console.error("ops! ocorreu um erro" + err);
//   });


const Home = () => {
  const [color, setcolor] = useState();

  return (

    <div className="Home">
      <LeftNavBar />

      <div className="main">
        <div className="upper">
          <img className="album" src="img\image 4.png"></img>
          <div className="textos">
            <p className="playlist">Playlist</p>
            <p className="daily">Musicas Curtidas</p>
          </div>
        </div>

        <div className="icons-top">
          <img src="img/icons8-circled-play-65.png" alt="" className="play" />
          <img src="img/Property 1=Default.png" alt="" className="heart" />
          <img src="img\download-icon-white-21.jpg" id="download"></img>

          <img src="img/icons8-ellipsis-35.png" alt="" className="three-dots" />
        </div>

        <div className="cabeçalhoMusica">
          <span className="titulo">#TITULO</span>
          <span className="alb">Album</span>


          <hr className="linha"></hr>

          <div className='Homee'>
            <ListaMusicas />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home