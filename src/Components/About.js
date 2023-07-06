import React, { useEffect, useRef } from "react";
import '../Styles/About.css'

const About = () => {
    return (
    <div id="about">
        <div className="detailsSection">
            <h1 className="header">Little Lemon</h1>
            <h5 className="location">Chicago</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at
                ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque
                massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor
                condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in
                accumsan id, vehicula sit amet tellus. Pellentesque porttitor elit
                lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi
                hendrerit consequat.
            </p>
        </div>
        <div className="aboutImages">
            <img className="image1"
            height = {90}
            width = {130}
            src={require("../assets/Mario and Adrian A.jpg")}
            alt="Pictures of Mario and Adrian"
            />
            <img className="image2"
            height = {90}
            width = {130}
            src={require("../assets/Mario and Adrian b.jpg")}
            alt="Pictures of Mario and Adrian"
            />
        </div>
    </div>
        )
}




export default About;