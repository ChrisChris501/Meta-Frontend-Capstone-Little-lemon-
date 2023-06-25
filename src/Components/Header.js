import React from "react";

const Header = () => {
    return (
    <nav>
        <img
        height = {30}
        width = {60}
        src={require("../assets/Logo.jpg")}
        alt="Little Lemon Logo"
        />
        <ul>
            <li>
                <a key="About" href="/about">About</a>
            </li>
            <li>
                <a key="Menu" href="/HighlightSction">Menu</a>
            </li>
            <li>
                <a key="Reservation" href="/HeroSection">Reservations</a>
            </li>
            <li>
                <a key="Order" href="/MakeOrder">Order online</a>
            </li>
            <li>
                <a key="Login" href="/Login">Log in</a>
            </li>
        </ul>
    </nav>
    )
}



export default Header;