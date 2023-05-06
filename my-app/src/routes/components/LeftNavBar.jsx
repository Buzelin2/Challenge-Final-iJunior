import React from 'react'

import {Link}  from 'react-router-dom'
import './LeftNavBar.css'

const LeftNavBar = () => {
  return (
    <nav className="esquerda">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0"
      />
      <div className="esquerda-box">
        <h1 className="ispot">
          iSpotify
          <img
            src="img/icons8-registered-48.png"
            alt=""
            className="registrated"
          />
        </h1>
        <div className="artistas-musicas">
          <p className="alo3">
            <img className="alo2" src="img/1378161.png"></img>
            <Link className="oi" to="/artists">
              Artistas
            </Link>
          </p>
          <p>
            <img className="alo" src="img/Property 1=Default.png"></img>
            <Link className="oi" to="/home">Músicas Curtidas</Link>
          </p>
        </div>
        <div className="logout">
          <p>
            <span className="material-symbols-outlined alo">logout</span>
            <span className="oi">Logout</span>
          </p>
        </div>
      </div>
    </nav>
  );
}

export default LeftNavBar