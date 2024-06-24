import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Gallery from '../../components/Gallery/Gallery'; 
import imgHomeBanner from "../../assets/paysage.png";
import './Home.scss';

function Home() {

    return (
    <div className="home">        
        <main>
        <Header />
    <Banner texte="Chez vous, partout et ailleurs" image={imgHomeBanner} />
    <Gallery>
          <Link to="/Logement">
            {/* Contenu de la galerie */}
          </Link>
        </Gallery>
    <Footer />
    </main>
    </div>
    );
}

export default Home;