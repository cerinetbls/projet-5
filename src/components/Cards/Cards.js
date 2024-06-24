import React from 'react';
import './Cards.scss'

function Cards({ image, title }) {
    return (
        <div className="cards">
            <img src={image} alt={title} className="cards__img" />          
            <h2 className="cards__title">{title}</h2>
        </div>
    );
}

export default Cards;