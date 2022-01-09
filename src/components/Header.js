import React from "react";
import logo from "../logo.png";

const Header = () => {
	return (
		<header className="header" onClick={() => window.location.reload()}>
			<img src={logo} alt="Logo header" />
			<h1>Context</h1>
		</header>
	);
};

export default Header;
