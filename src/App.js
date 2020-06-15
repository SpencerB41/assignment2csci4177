import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router,
		Route, 
		Switch,  
		Redirect
} from "react-router-dom";



// Pages
import LandingPage from "./pages/landing";
import LoginPage from "./pages/login";
import ErrorPage from "./pages/404";
import NewUserPage from "./pages/newuser";
import CreatePassPage from "./pages/createpass";
import SchedulePage from "./pages/schedule";
import MenuPage from "./pages/menu";



class App extends Component {
	render(){
		return (
			<Router> 
				<Switch>
					<Route exact path = "/" component = {LandingPage}/>
					<Route exact path = "/login" component = {LoginPage}/>
					<Route exact path ="/404" component ={ErrorPage} />
					<Route exact path ="/newuser" component ={NewUserPage} />
					<Route exact path ="/createpass" component ={CreatePassPage} />
					<Route exact path ="/schedule" component ={SchedulePage} />
					<Route exact path ="/menu" component ={MenuPage} />
					<Redirect to="/404" />
				</Switch>
			</Router>
		); // END return
	} // END render
} // END class App

export default App;












