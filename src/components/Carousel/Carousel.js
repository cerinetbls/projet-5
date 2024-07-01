import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import logements from "../../datas/logements.json";
import flechprev from '../../assets/flech-prev.png';
import flechnext from '../../assets/flech-next.png';
import './Carousel.scss';

const Carousel = () => {
    const { id } = useParams();
    const [logementData, setLogementData] = useState(null);

    useEffect(() => {
        // Récupérer les données du logement correspondant à l'ID passé dans l'URL
        const data = logements.find((item) => item.id === id); // Utilisez logements au lieu de jsonData
        setLogementData(data);
    }, [id]);

    const CarouselComponent = ({ pictures }) => {
        const [currentIndex, setCurrentIndex] = useState(0);

        const previousSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
        };

        const nextSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
        };

        if (pictures.length === 1) {
            return (
                <div className="carousel">
                    <img className="carouselImage" src={pictures[0]} alt="" />
                </div>
            );
        }

        return (
            <div className="carousel">
                <img className="carouselPrev" src={flechprev} alt="Previous" onClick={previousSlide} />
                <img className="carouselImage" src={pictures[currentIndex]} alt="" />
                <img className="carouselNext" src={flechnext} alt="Next" onClick={nextSlide} />
                <div className="counter">{`${currentIndex + 1}/${pictures.length}`}</div>
            </div>
        );
    };

    return (
        <div className="carouselWrapper">
            {logementData && <CarouselComponent pictures={logementData.pictures} />}
            {/* Autres éléments de présentation du logement */}
        </div>
    );
};

export default Carousel;
