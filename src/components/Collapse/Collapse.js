import React, { useState } from 'react';
import './Collapse.scss';
import flechUp from '../../assets/hightArrow.jpg';

function Collapse({ title, children }) {
      // Défini l'état open pour savoir si le contenu est ouvert ou fermé
    const [open, setOpen] = useState(false);

// Fonction pour gérer le clic sur le titre
    const handleToggle = (event) => {
        // Vérifie si l'image a été cliquée
        if (event.target.tagName === 'IMG') {
            // Basculer l'état open
            setOpen(!open);
        }
    };

    return (
        <div className='Collapse__container'>
            <div className={`Collapse ${open ? "open" : ""}`}>
                <div className='Collapse__title' onClick={handleToggle}>
                    <h2>{title}</h2>
                    <img
                        src={flechUp}
                        alt={open ? "Up" : "Down"}
                        className={open ? "Collapse__title_img rotate" : "Collapse__title_img"}
                    />
                </div>
                <div className='Collapse__content'>
                    {open && children}
                </div>
            </div>
        </div>
    );
}

export default Collapse;
