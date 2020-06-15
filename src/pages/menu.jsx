import React from 'react';
import logoUser from '../images/dalLogo.png';
import { Link } from "react-router-dom";

const MenuPage = () => {
	return(
		 <div className="menuDiv">
			<div className="containerMenu">
				<img className="Dal-logoMenu" src={logoUser} alt="Logo" />
				<Link to="/schedule"><button className="weekHome"><b>Schedule</b></button></Link>	
			

			</div>
		 </div> 
	);
} // END const MenuPage

export default MenuPage;