import logo from "../../assets/logo.jpg";
import { NavLink } from "react-router-dom";
import './Header.scss';

export default function Header() {
    return (
        <header className="header">
            <figure className="header__fig">
                <img className="header-logo" src={logo} alt="logo de l'agence kasa" />
            </figure>
            <nav className="nav-header">
                <NavLink 
                    to="/" 
                    end 
                    className={({ isActive }) => isActive ? "nav-bar_link-Home active" : "nav-bar_link-Home"}>
                    Accueil
                </NavLink>
                <NavLink 
                    to="/Apropos" 
                    className={({ isActive }) => isActive ? "nav-bar_link-Apropos active" : "nav-bar_link-Apropos"}>
                    A Propos
                </NavLink>
            </nav>
        </header>
    );
}
