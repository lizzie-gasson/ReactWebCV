import React, { useState } from "react";
import { goHome } from "../utils/utils";
import Menu from "./Menu.jsx";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className="header">
			<span onClick={() => goHome()} className="title">
				Lizzie Gasson
			</span>

			<div className="contact-links">
				<a
					target="_blank"
					rel="noopener noreferrer"
					className="link email"
					href="mailto:lizzie.gasson@gmail.com"
				></a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					className="link codepen"
					href="https://codepen.io/LizzieGasson/"
				></a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					className="link github"
					href="https://github.com/lizzie-gasson"
				></a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					className="link linkedin"
					href="https://www.linkedin.com/in/lizziegasson/"
				></a>
				<button className={`menu-button link ${menuOpen ? `in-front` : ``}`} onClick={() => setMenuOpen(!menuOpen)}>
					<i className={`fas ${menuOpen ? `fa-times` : `fa-bars`}`}></i>
				</button>
			</div>
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
		</div>
	);
};

export default Header;
