import React from 'react';
import logoUser from '../images/dalLogo.png';
import { Link } from "react-router-dom";
import { Input, Space } from 'antd';

const CreatePassPage = () => {
	return(
		 <div className="newUser">
			<div className="backBlockUser">
				<img className="Dal-logoUser" src={logoUser} alt="Logo" />
				
				<h1 className="CreatePass-instr">Create Password</h1>
				<div className="NewPass-field">
					<p>Enter New Password:</p>
					<Space direction="vertical">
						<Input.Password className="NewPass-input" placeholder="New Password"/>
					</Space>
				</div>

				<div className="VerifyPass-field">
					<p>Verify Password:</p>
					<Space direction="vertical">
						<Input.Password className="VerifyPass-input" placeholder="Verify Password"/>
					</Space>
				</div>

				<Link to="/login" className="CreateBtn"><button><b>Create Account</b></button></Link>

			</div>
		 </div> // END div newUser
	);
} // END const CreatePassPage

export default CreatePassPage;