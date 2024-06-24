import logo from "../../assets/logoNoir.jpg";
import './Footer.scss'

export default function Footer() {
	return (
		<div className="footer">
            <figure className="footer__fig">
                <img className="logo" src={logo} alt="logo de l'agence kasa" />
            </figure>
			<div className="copy">© 2020 Kasa. All rights reserved</div>
		</div>
	);
}