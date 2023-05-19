import React from "react";

import { Link } from "react-router-dom";
import "./LeftNavBar.css";

const LeftNavBar = () => {
  return (
    <nav className="esquerda">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0"
      />
      <div className="esquerda-box">
        <h1 className="ispot">iSpotify ®</h1>
        <div className="artistas-musicas">
          <p className="alo3">
            <img className="alo" src="/img\album.svg"></img>
            <Link className="oi" to="/artists">
              Artistas
            </Link>
          </p>
          <p>
            <img className="alo" src="/img/favorite.svg"></img>
            <Link className="oi" to="/home">
              Músicas Curtidas
            </Link>
          </p>
          <div className="minha-conta">
            <p className="alo3">
              <img className="alo" src="/img/account.png"></img>
              <Link className="oi" to="/conta">
                Minha Conta
              </Link>
            </p>
          </div>
        </div>
        <div className="logout">
          <p>
            <img src="/img/logout.svg"></img>
            <Link className="oi" to="/">Logout</Link>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default LeftNavBar;
