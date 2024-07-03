import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import logements from "../../datas/logements.json";
import Carousel from '../../components/Carousel/Carousel';
import Collapse from "../../components/Collapse/Collapse";
import starf from '../../assets/starOrange.jpg';
import stare from '../../assets/starGris.jpg';
import './Logement.scss';

const Logement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logementData, setLogementData] = useState(null);

  useEffect(() => {
    const data = logements.find((item) => item.id === id);
    if (!data) {
      navigate("/error");
    } else {
      setLogementData(data);
    }
  }, [id, navigate]);

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
  const [isEquipementOpen, setIsEquipementOpen] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const toggleEquipement = () => {
    setIsEquipementOpen(!isEquipementOpen);
  };

  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img key={i} src={i <= rating ? starf : stare} alt={i <= rating ? "Etoile-pleine" : "Etoile-vide"} />
      );
    }
    return stars;
  };

  return (
    <div className="logement_body">
      <Header />
      <div className="logementsCarrousel">
        {logementData && <Carousel pictures={logementData.pictures} />}
      </div>
      <div className="section_2_logements">
        {logementData && (
          <div className="logement_info_container_wrapper">
            <div className="logements_info_container">
              <h2 className="logement-title">{logementData.title}</h2>
              <div className="logement-location">{logementData.location}</div>
              <div className="logement-tags">
                {logementData.tags.map((tag, index) => (
                  <span key={index} className="logement-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="host_rating_container">
              <div className="host">
                <img src={logementData.host.picture} alt={logementData.host.name} />
                <span>{logementData.host.name}</span>
              </div>
              <div className="rating">
                <div className="rating-stars">
                  {renderRatingStars(parseInt(logementData.rating))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="Collapse-logements">
        {logementData && (
          <>
            <Collapse
              className={`Collapse-description ${isDescriptionOpen ? "open" : ""}`}
              title="Description"
              isOpen={isDescriptionOpen}
              onToggle={toggleDescription}
            >
              <p>{logementData.description}</p>
            </Collapse>
            <Collapse
              className={`Collapse-equipement ${isEquipementOpen ? "open" : ""}`}
              title="Équipements"
              isOpen={isEquipementOpen}
              onToggle={toggleEquipement}
            >
              <ul>
                {logementData.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </Collapse>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Logement;
