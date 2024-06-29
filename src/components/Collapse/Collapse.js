import React, { useState } from 'react';
import './Collapse.scss';
import flechUp from '../../assets/hightArrow.jpg';

function Collapse({ title, content }) {
    const [open, setOpen] = useState(false);

    const handleToggle = (event) => {
        // Vérifier si la cible du clic est l'image hightArrow
        if (event.target.tagName === 'IMG') {
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
                    {open && (
                        Array.isArray(content) ? (
                            <ul>
                                {content.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>{content}</p>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}


export default Collapse;