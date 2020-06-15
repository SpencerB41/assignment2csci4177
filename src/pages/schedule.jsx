import React from 'react';
import logoSchedule from '../images/dalLogo.png';
import { Link } from "react-router-dom";
import schedule from '../images/schedule.png';

const SchedulePage = () => {
	return(
		 <div className="scheduleDiv">
			<div className="containerSchedule">
				<img className="Dal-logoSchedule" src={logoSchedule} alt="Logo" />
				<Link to="/menu"><button className="scheduleBtn"><b>Home</b></button></Link>
				<img className="Dal-Schedule" src={schedule} alt="schedule" />
				<Link to="/404"><button className="scheduleDetail"><b>Student Detail Schedule</b></button></Link>
			</div>
		 </div> 
	);
} // END const SchedulePage

export default SchedulePage;