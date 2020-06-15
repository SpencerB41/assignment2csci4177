import React from 'react';
import errLogo from '../images/dalLogo.png';

const ErrorPage = () => {
	return(
		 <div className="Error">
			<img className="Dal-logoErr" src={errLogo} alt="Logo" />
			<h1 className= "exceptionMsg">ERROR 404: Page not created</h1>
		 </div> // END div Error

	);
} // END const ErrorPage

export default ErrorPage;