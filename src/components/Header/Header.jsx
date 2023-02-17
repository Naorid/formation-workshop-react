import React from "react";
import './header.css';

const Header = () => {
  return (
    <>
        <h1>Les bases du dev web</h1>
        <nav>
            <a href="/">Accueil</a>
            <a href="/post">Publier</a>
            <a href="/Articles">Articles</a>
            <a href="/Weather">Météo</a>
        </nav>
    </>
  );
};

export default Header;
