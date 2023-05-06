import React from 'react'
import "./Artists.css";
import { apiSpotify } from '../services/api';
import LeftNavBar from "./components/LeftNavBar";

let artista1, artista2, artista3, artista4, artista5, artista6, artista7, artista8, artista9, artista10;

apiSpotify.get("/artists/06HL4z0CvFAxyc27GXpf02?si=2f5d50325251476e").then((response) => { artista1 = response.data });
apiSpotify.get("/artists/0i1s9WcIu0PrUvHzALgofo?si=wIuwtOIATxWGYsNg8KdtOw").then((response) => { artista2 = response.data });
apiSpotify.get("/artists/1b8kpp4DUwt1hWaxTiWQhD?si=nEsm5KLCQYCh9DKMCECJjg").then((response) => { artista3 = response.data });
apiSpotify.get("/artists/10naVTwNjE50daQVrN0bXh?si=ZMjxTVmBTf20BXLrA1rWVQ").then((response) => { artista4 = response.data });
apiSpotify.get("/artists/3PhoLpVuITZKcymswpck5b?si=WJz3KzVfTkaznO_2sLn4wQ").then((response) => { artista5 = response.data });
apiSpotify.get("/artists/4C4kpaAdp6aKSkguw40SsU?si=P4HNjoUfRfe_gKMsillutA").then((response) => { artista6 = response.data });
apiSpotify.get("/artists/6tOsSffQQIXmK8TqsDck8t?si=UTLy3cFnTKqL0aYMEdjQAg").then((response) => { artista7 = response.data });
apiSpotify.get("/artists/5JYtpnUKxAzXfHEYpOeeit?si=ahyI7aLTQmmK5rOewVq8OA").then((response) => { artista8 = response.data });
apiSpotify.get("/artists/1dfeR4HaWDbWqFHLkxsg1d?si=FawcgZhBTFqrveGp3qtCEg").then((response) => { artista9 = response.data });
apiSpotify.get("/artists/0du5cEVh5yTK9QJze8zA0C?si=ZEY4A5HhQM-cF99OzWW0LQ").then((response) => { artista10 = response.data });


const Artists = () => {
  return (
    <div className='teste123'>
      <LeftNavBar />
      <div className='artistas-main'>
        <p className='text-top'>Artistas</p>
        <div className='div1'>
          <div className='artista art1'>
            <img className='img-artista' src={artista1.images[0].url}></img>
            <p className='nome-artista'>{artista1.name}</p>
            <p className='art-text'>Artista</p>
          </div>
          <div className='artista art2'>
          <img className='img-artista' src={artista2.images[0].url}></img>
            <p className='nome-artista'>{artista2.name}</p>
            <p className='art-text'>Artista</p>
          </div>
          <div className='artista art3'>
          <img className='img-artista' src={artista3.images[0].url}></img>
            <p className='nome-artista'>{artista3.name}</p>
            <p className='art-text'>Artista</p>
          </div>
          <div className='artista art4'>
          <img className='img-artista' src={artista4.images[0].url}></img>
            <p className='nome-artista'>{artista4.name}</p>
            <p className='art-text'>Artista</p>
          </div>
          <div className='artista art5'>
          <img className='img-artista' src={artista5.images[0].url}></img>
            <p className='nome-artista'>{artista5.name}</p>
            <p className='art-text'>Artista</p>
          </div>
        </div>
        <div className='div2'>
          <div className='artista art6'>
          <img className='img-artista' src={artista6.images[0].url}></img>
            <p className='nome-artista'>{artista6.name}</p>
            <p className='art-text'>Artista</p>
          </div>
          <div className='artista art7'>
          <img className='img-artista' src={artista7.images[0].url}></img>
            <p className='nome-artista'>{artista7.name}</p>
            <p className='art-text'>Artista</p>
          </div>
          <div className='artista art8'>
          <img className='img-artista' src={artista8.images[0].url}></img>
            <p className='nome-artista'>{artista8.name}</p>
            <p className='art-text'>Artista</p>
          </div>
          <div className='artista art9'>
          <img className='img-artista' src={artista9.images[0].url}></img>
            <p className='nome-artista'>{artista9.name}</p>
            <p className='art-text'>Artista</p>
          </div>
          <div className='artista art10'>
          <img className='img-artista' src={artista10.images[0].url}></img>
            <p className='nome-artista'>{artista10.name}</p>
            <p className='art-text'>Artista</p>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Artists