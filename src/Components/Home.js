import React from "react";
import '../Styles/Home.css';
import {NavLink} from 'react-router-dom';

const Home = () => {
    
    return (
    <div id="homeSection">
        <div className="reserveTable">
            <h1 className="title">Little Lemon</h1>
            <h5 className="location">Chicago</h5>
            <p>At Little Lemon, we offer Veggies and every other healthy food you
                desire. Visit our restaurant and experience the beauty of our Ontario
                foods, taste our exceptional delicacies, and witness firsthand our
                dedication to preserving the environment for future generations.
                Visit our restaurant and experience the beauty of our Ontario
                foods, taste our exceptional delicacies, and witness firsthand our
                dedication to preserving the environment for future generations.
            </p>
           <NavLink to="/BookingPage"><button className="btn">Reserve a Table</button></NavLink>
        </div>
        <div>
            <img className="image"
            height = {90}
            width = {140}
            src={require("../assets/restauranfood.jpg")}
            alt="Little Lemon Logo"
            />
        </div>
    </div>
    )
}



export default Home;