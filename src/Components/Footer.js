import React from "react";

const Footer = () => {
    return (
        <footer>
            <>
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
                        <a key="Contact" href="/Contact">Contact</a>
                    </li>
                    <li>
                        <a key="Socials" href="/SocialLinks">Links to Social Media</a>
                    </li>
                </ul>
            </>
        </footer>
    )
}



export default Footer;