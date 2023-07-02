import React from "react";

const Footer = () => {
    return (
        <footer id="theFooter">
                <img className="image"
                height = {30}
                width = {60}
                src={require("../assets/Logo.jpg")}
                alt="Little Lemon Logo"
                />
                <ul className="Links">
                    <li className="aboutLink">
                        <a key="About" href="/about">Doormat Navigation</a>
                    </li>
                    <li className="contactLink">
                        <a key="Contact" href="/Contact">Contact</a>
                    </li>
                    <li className="socialLink">
                        <a key="Socials" href="/SocialLinks">Links to Social Media</a>
                    </li>
                </ul>
        </footer>
    )
}



export default Footer;