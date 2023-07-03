import React from "react";

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
                <a key="Reservation" href="/*">Reservations</a>
            </li>
            <li className="order">
                <a key="Order" href="/MakeOrder">Order online</a>
            </li>
            <li className="login">
                <a key="Login" href="/Login/*">Log in</a>
            </li>
        </ul>
    </nav>
    )
}



export default Header;