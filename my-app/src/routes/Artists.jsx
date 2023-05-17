import React, { useState, useEffect } from "react";
import "./Artists.css";
import { apiSpotify } from "../services/api";
import LeftNavBar from "./components/LeftNavBar";
import { Link } from "react-router-dom";

const Artists = () => {
  const [artists, setArtists] = useState([]);

  const getTopTracks = async (id) => {
    try {
      const response = await apiSpotify.get(
        `/artists/${id}/top-tracks?market=US`
      );
      return response.data.tracks;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchArtists = async () => {
      const artistIds = [
        "06HL4z0CvFAxyc27GXpf02",
        "0i1s9WcIu0PrUvHzALgofo",
        "1b8kpp4DUwt1hWaxTiWQhD",
        "10naVTwNjE50daQVrN0bXh",
        "3PhoLpVuITZKcymswpck5b",
        "4C4kpaAdp6aKSkguw40SsU",
        "6tOsSffQQIXmK8TqsDck8t",
        "5JYtpnUKxAzXfHEYpOeeit",
        "1dfeR4HaWDbWqFHLkxsg1d",
        "0du5cEVh5yTK9QJze8zA0C",
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

  return (
    <div className="teste123">
      <LeftNavBar />
      <div className="artistas-main">
        <p className="text-top">Artistas</p>
        <div className="div1">
          {artists.slice(0, 5).map((artist) => (
            <div className="artista art1" key={artist.id}>
              <img
                className="img-artista"
                src={artist.image}
                alt={artist.name}
              />
              <Link className="nome-artista" to={`/infoartista/${artist.id}`}>
                {artist.name}
              </Link>
              <p className="art-text">Artista</p>
              {/* <ul>
                {artist.topTracks.slice(0, 5).map((track) => (
                  <li key={track.id}>{track.name}</li>
                ))}
              </ul> */}
            </div>
          ))}
        </div>
        <div className="div2">
          {artists.slice(5, 10).map((artist) => (
            <div className="artista art2" key={artist.id}>
              <img
                className="img-artista"
                src={artist.image}
                alt={artist.name}
              />
              <Link className="nome-artista" to={`/infoartista/${artist.id}`}>
                {artist.name}
              </Link>
              <p className="art-text">Artista</p>
              {/* <ul>
                {artist.topTracks.slice(0, 5).map((track) => (
                  <li key={track.id}>{track.name}</li>
                ))}
              </ul> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artists;
