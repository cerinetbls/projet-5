import { NavLink } from "react-router-dom";
import './Error.scss'

export default function Error() {
    return (
        <>
            <div className="error_Container">
                <p className="error_Container__Number">404</p>
                <div className="error_Container__text_content">
                    <span className="error_Container__Text">
                        Oups! La page que vous demandez n'existe pas.
                    </span>
                </div>
                <NavLink to="/" className="error_Container__Link">
                    Retourner sur la page d'accueil
                </NavLink>
            </div>
        </>
    );
}