import React from "react";
import '../Styles/Header.css';

const Header = () => {
    return (
    <nav className="navigation">
        <img className="navImage"
        height = {30}
        width = {60}
        src={require("../assets/Logo.jpg")}
        alt="Little Lemon Logo"
        />
        <ul className="navMenu">
            <li className="home">
                <a key="Home" href="/">Home</a>
            </li>
            <li className="about">
                <a key="About" href="/about">About</a>
            </li>
            <li className="menu">
                <a key="HighlightSection" href="/HighlightSection">Menu</a>
            </li>
            <li className="Testimonials">
                <a key="Testimonials" href="/TestimonialsSection">Testimonials</a>
            </li>
            <li className="reservation">
                <a key="Reservation" href="/BookingPage">Reservations</a>
            </li>
        </ul>
        <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </nav>
    )
}



export default Header;