import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import CardsSection from "./CardsSection.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
            
			<Navbar/>
			<Jumbotron/>
			<CardsSection/>
			<Footer/>

		</div>
	);
};

export default Home;