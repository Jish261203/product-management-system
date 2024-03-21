import React from "react";
import { Link } from "react-router-dom";
import "./Index.css";

const Index = () => {
	return (
		<>
			<div className="index-container">
				<div className="index-content">
					<h1 className="index-title">Welcome to Product Managment System</h1>
					<p className="index-description">
						Stay organized and manage your products effectively with our Product
						Management System.
					</p>
					<div className="index-buttons">
						<Link to="/home" className="index-link">
							<button className="index-button">Go to Dashboard</button>
						</Link>
						<Link to="/register" className="index-link">
							<button className="index-button">Sign Up</button>
						</Link>
						<Link to="/login" className="index-link">
							<button className="index-button">Log In</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Index;
