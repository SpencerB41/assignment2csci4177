import React from 'react';
import logo from '../images/dalLogo.png';
import { Input, Space } from 'antd';
import { Link } from "react-router-dom";


const LoginPage = () => {
	return(
		<div className="App">
			<div className="backBlock">
				<img className="Dal-logo" src={logo} alt="Logo" />
				<div className = "Container">

					<h1 className = "Login-inst">Enter NetID and Password</h1>
					<input name="user" placeholder="NetID" className="Username-field"></input>


					<Space direction="vertical">
						<Input.Password className="pass" placeholder="Password"/>
					</Space>

					<Link to="/menu"><button className="Login-button"><b>LOGIN</b></button></Link>
					<Link to="/newuser" className="toNewUser">New User/Forgot Password</Link>
					<p className="netInstrOne"><i><b>Note: NetID </b>is the first two letters of your first name </i></p> 
					<p className="netInstrTwo"><i>followed by six provided numbers.</i></p>

				</div> 
			</div>
		 </div> // END div App 
	);
} // END const LoginPage


export default LoginPage