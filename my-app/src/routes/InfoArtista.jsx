import React, { useState, useEffect } from 'react';
import "./InfoArtista.css";
import LeftNavBar from "./components/LeftNavBar";
import { apiSpotify } from "../services/api";
import { useParams } from 'react-router-dom';
// import { TrackContext } from './TrackContext';



// function Musica(props) {


//   const { index, nome, artista, album, favorita, imagemFavorita, onDelete, onToggleFavorita, genero } = props;

//   function handleClickFavorita() {
//     onToggleFavorita();
//   }

//   function handleClickDeletar() {
//     onDelete();
//   }
//   return (
//     <div className="musica" id={`ms${index}`}>
//       <span className="numMusica">{index + 1}</span>
//       <div className="Musica">
//         <p>{nome}</p>
//         <p>{artista}</p>
//       </div>
//       <span className="Album">{album}</span>
//       <button onClick={() => handleClickFavorita(index)} className="coraçao" id={`cr${index}`}>
//         <img src={favorita ? imagemFavorita : "img/Property 1=Default.png"} className="heartt" id={`imagem${index}`} />
//       </button>
//       <button onClick={handleClickDeletar} className="Relogio">
//         <div className="rel1">
//           <div className="rel2"></div>
//           <div className="rel3"></div>
//         </div>
//       </button>
//     </div>
//   );
// }

// // function mudarcor(num) {
// //   const imgcv = "img/Property 1=Variant2.png";
// //   const imgc = "img/Property 1=Default.png";

// //   const meubotao = document.querySelector(`#cr${num}`);
// //   const imagen1 = meubotao.querySelector(`#imagem${num}`);

// //   if (imagen1.getAttribute("src") === "img/Property 1=Default.png") {
// //     imagen1.setAttribute("src", imgcv);
// //   } else {
// //     imagen1.setAttribute("src", imgc);
// //   }
// // }



const InfoArtista = () => {
  const { id } = useParams()
  const [artists, setArtists] = useState([]);
  const [heartColors, setHeartColors] = useState(() => {
    const savedHeartColors = Array(10).fill(false); // Array inicial com valores falsos
    for (let i = 0; i < 10; i++) {
      const savedColor = localStorage.getItem(`heartColor_${id}_${i}`);
      if (savedColor !== null) {
        savedHeartColors[i] = JSON.parse(savedColor);
      }
    }
    return savedHeartColors;
  });
  const [likedTracks, setLikedTracks] = useState([]);




  function handleClickHeart(index) {
    setHeartColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[index] = !newColors[index];
  
      const heartColorKey = `heartColor_${id}_${index}`;
      localStorage.setItem(heartColorKey, JSON.stringify(!heartColors[index]));
      return newColors;
    });
  
    setLikedTracks((prevTracks) => {
      const newTracks = [...prevTracks];
      const track = artists[return_index()].topTracks[index];
  
      if (newTracks.some((t) => t.id === track.id)) {
        // Se a música já estiver curtida, remove do array
        const indexToRemove = newTracks.findIndex((t) => t.id === track.id);
        newTracks.splice(indexToRemove, 1);
      } else {
        // Se a música não estiver curtida, adiciona ao array
        newTracks.push(track);
      }
  
      // Salvar o vetor newTracks no localStorage
      localStorage.setItem('newTracks', JSON.stringify(newTracks));
  
      // Emitir evento personalizado para notificar outras páginas
      const event = new CustomEvent('newTracksUpdated', { detail: newTracks });
      window.dispatchEvent(event);
  
      return newTracks;
    });
  }
  
  useEffect(() => {
    const savedLikedTracks = localStorage.getItem('likedTracks');
    if (savedLikedTracks) {
      setLikedTracks(JSON.parse(savedLikedTracks));
    }
  
    // Ouvir o evento de atualização de newTracks em outras páginas
    const handleNewTracksUpdated = (event) => {
      const updatedTracks = event.detail;
      setLikedTracks(updatedTracks);
  
      // Salvar o vetor newTracks no localStorage
      localStorage.setItem('newTracks', JSON.stringify(updatedTracks));
    };
  
    window.addEventListener('newTracksUpdated', handleNewTracksUpdated);
  
    // Limpar o listener ao desmontar o componente
    return () => {
      window.removeEventListener('newTracksUpdated', handleNewTracksUpdated);
    };
  }, []);
  const getTopTracks = async (id) => {
    try {
      const response = await apiSpotify.get(`/artists/${id}/top-tracks?market=US`);
      return response.data.tracks;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchArtists = async () => {
      const artistIds = [
        '06HL4z0CvFAxyc27GXpf02',
        '6olE6TJLqED3rqDCT0FyPh',
        '1b8kpp4DUwt1hWaxTiWQhD',
        '10naVTwNjE50daQVrN0bXh',
        '0k17h0D3J5VfsdmQ1iZtE9',
        '4C4kpaAdp6aKSkguw40SsU',
        '6tOsSffQQIXmK8TqsDck8t',
        '7dnT2FUXhjirperXaH22IJ',
        '4LLpKhyESsyAXpc4laK94U',
        '0du5cEVh5yTK9QJze8zA0C',
      ];

      const artistsWithTopTracks = await Promise.all(
        artistIds.map(async (id) => {
          const artist = await apiSpotify.get(`/artists/${id}`);
          const topTracks = await getTopTracks(id);
          return {
            id: artist.data.id,
            name: artist.data.name,
            image: artist.data.images[0].url,
            topTracks: topTracks,
          };
        })
      );

      setArtists(artistsWithTopTracks);
    };

    fetchArtists();
  }, []);

  function return_index() {

    if (id == '06HL4z0CvFAxyc27GXpf02') return 0;
    if (id == '6olE6TJLqED3rqDCT0FyPh') return 1;
    if (id == '1b8kpp4DUwt1hWaxTiWQhD') return 2;
    if (id == '10naVTwNjE50daQVrN0bXh') return 3;
    if (id == '0k17h0D3J5VfsdmQ1iZtE9') return 4;
    if (id == '4C4kpaAdp6aKSkguw40SsU') return 5;
    if (id == '6tOsSffQQIXmK8TqsDck8t') return 6;
    if (id == '7dnT2FUXhjirperXaH22IJ') return 7;
    if (id == '4LLpKhyESsyAXpc4laK94U') return 8;
    if (id == '0du5cEVh5yTK9QJze8zA0C') return 9;

  }

  return (

    <div className="Home">
      <LeftNavBar />
      {artists.slice(return_index(), return_index() + 1).map((artist) => (
        <div className="mainn">
          <div className="upper">
            <img className="album" src={artist.image}></img>
            <div className="textos">
              <p className="playlist">Artista</p>
              <div className='div2'>

              </div>
              <p className="daily">{artist.name}</p>
            </div>
          </div>

          <div className="icons-top">
            <img src="/img/icons8-circled-play-65.png" alt="" className="play" />
            <img src="/img/Property 1=Default.png" alt="" className="heart heartt" />
            <img src="/img/download-icon-white-21.jpg" id="download"></img>
            <img src="/img/icons8-ellipsis-35.png" alt="" className="three-dots" />
          </div>
          <div className="cabeçalhoMusica">
            <span className="titulo">#TITULO</span>
            <span className="alb">Album</span>


            <hr className="linha"></hr>

            {artist.topTracks.slice(0, 5).map((track, index) => (
              <div className="musica" id={`ms${index}`} key={track.id}>
                <div className="Musica">
                  <p className='trackname'>{track.name}</p>
                  <p className='artistname'>{artist.name}</p>
                </div>
                <span className="Album albumname">{track.album.name}</span>
                <button onClick={() => handleClickHeart(index)} className="coraçao" id={`cr${index + 1}`}>
                  <img src={heartColors[index] ? "/img/Property 1=Variant2.png" : "/img/Property 1=Default.png"} alt="coração"></img>
                </button>

              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default InfoArtista