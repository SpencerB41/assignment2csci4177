import React from 'react';
import logoUser from '../images/dalLogo.png';
import { Link } from "react-router-dom";

const NewUserPage = () => {
	return(
		 <div className="newUser">
			<div className="backBlockUser">
				<img className="Dal-logoUser" src={logoUser} alt="Logo" />
				<div className="user-container">
					
					{/* Unknown NetID */}
					<p><b className="unknownNet">Don't know your NetID/Dalhousie ID?</b></p>
					<p className="call-instr"> Call the registrars office at 902-494-2450
					<b> OR </b>
					Call Human Resources at 902-494-3700</p>

					<div className="newUserDiv">
						{/*New User Activation*/}
						<h1 className = "actMsg">New User</h1>
						<div className="newUserInput">
							<p className="netID-instr"><b>Enter NetID: </b></p>
							<input placeholder="NetID" className="NetID-field"></input>
							<p><i>Example: xy123123</i></p>
						</div>
						<Link to="/createpass" className="submitBtn"><button><b>Submit</b></button></Link>
					</div>

					<div className="forgotPassDiv">
						{/*Forgotten Password*/}
						<h1 className="forgotPass">Forgotten Password</h1>

						<div className="dalInput">
							<p><b>Enter Dalhousie ID: </b></p>
							<input placeholder="Dalhousie ID" className="DalID-field"></input>
							<p><i>Example: B00123123</i></p>
						</div>

						<div className="netInput">
							<p><b>Enter NetID: </b></p>
							<input placeholder="NetID" className="NetID-fieldTwo"></input>
							<p><i>Example: xy123123</i></p>
						</div>

						<Link to="/404" className="recoveryBtn"><button><b>Send Recovery Email</b></button></Link>
					</div>

				</div>
			</div>
		 </div> // END div newUser
	);
} // END const NewUserPage

export default NewUserPage;