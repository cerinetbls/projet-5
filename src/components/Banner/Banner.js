import React from "react";
import './Banner.scss'

function Banniere({ image, texte }) {
    return (
        <div className="banner">
            <img className="banner__img" src={image} alt="Bannière" />
            <div className="banner__filtre"></div> 
            <span className="banner__txt">{texte}</span>
        </div>
    );
}

export default Banniere;