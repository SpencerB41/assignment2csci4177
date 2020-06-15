import React from 'react';
import { Link } from "react-router-dom";

/* Import Images */
import logoLanding from '../images/dalLogo.png';
import eye from '../images/eye.png';
import pencil from '../images/pencil.png';
import wrench from '../images/wrench.png';
import prof from '../images/prof.PNG';
import map from '../images/map.PNG';
import courseList from '../images/list.PNG';

const LandingPage = () => {
	return(
		 <div className="landingDiv">

			<header className="landingHeader">
				<img className="Dal-logoLanding" src={logoLanding} alt="Logo" />
				<h1>Dalhousie University Schedule Builder</h1>
				<Link to="/login"><button className="landing-Login"><b>LOGIN</b></button></Link>
			</header>

			<p className="subtext"><i>Schedule your time in an efficient way</i></p>

			<div className="containerBenefit">
			
				<div className="Benefit-list">
					
					<div className="benefitOne">
						<h2>See all your options</h2>
						<p>Easily make decisions about your coming semester with all information just a couple clicks away</p>					
						<img className="eye-symbol" src={eye} alt="eye" />
					</div>

					<div className="benefitTwo">
						<h2>New Student Friendly</h2>
						<img className="pencil-symbol" src={pencil} alt="pencil" />
						<p className="benefitTwoBlurb">Extra tools to make the transition from High School to University easier</p>
					</div>

					<div className="benefitThree">
						<h2>All Tools in one place</h2>
						<img className="wrench-symbol" src={wrench} alt="wrench" />
						<p>All tools accessiable within one tab. Schedule viewer while registering</p>
					</div>

				</div>

			</div>

			<div className="containerFeature">

				<div className="Feature-list">

					<div className="featureOne">
						<h2>Relevant Courses First</h2>
						<img className="list-pic" src={courseList} alt="course list" />
						<p>Courses related to your program/major displayed first</p>
					</div>

					<div className="featureTwo">
						<h2>Professor Contact Information</h2>
						<img className="prof-pic" src={prof} alt="prof contact info" />
						<p>Find professor contact information directly from registration</p>
					</div>

					<div className="featureThree">
						<h2>Cource Location Map</h2>
						<img className="map-pic" src={map} alt="course location" />
						<p>Find the location of a class directly from regisitration</p>
					</div>

				</div>

			</div>

		 </div> 
	);
} // END const LandingPage

export default LandingPage;