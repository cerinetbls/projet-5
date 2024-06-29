// import React from "react";
import React from "react";
import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Collapse from "../../components/Collapse/Collapse";
import imgAproposBanner from "../../assets/paysageApropos.png";
import './Apropos.scss';

const DEFAULT_COLLAPSE = [
    {
        id: 0,
        title: "Fiabilité",
        content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
        id: 1,
        title: "Respect",
        content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
        id: 2,
        title: "Service",
        content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
        id: 3,
        title: "Sécurité",
        content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
];

function Apropos() {
    // const [collapses, setCollapses] = useState(DEFAULT_COLLAPSE);

    const CollapsesListe = DEFAULT_COLLAPSE.map((collapse) => (
        <Collapse
            key={collapse.id}
            title={collapse.title}
            content={collapse.content}
        />
    ));

    return (
        <div className="apropos">
            
                <Header />
                <Banner texte="" image={imgAproposBanner} />
                
                <div className="Collapse__container">{CollapsesListe}</div>
                <Footer />
            
        </div>
    );
}

export default Apropos;