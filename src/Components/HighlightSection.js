import React from "react";

const HighlightSection = () => {
    return (
        <div id='highlight'>
            <div className="highlightMenu">
                <h2>Specials for you</h2>
                <button>Online Menu</button>
            </div>
            <div id="Cards">
                <div className="card1">
                    <img className="image"
                        height = {90}
                        width = {130}
                        src={require("../assets/lemon dessert.jpg")}
                        alt="Pictures of Mario and Adrian"
                        />
                    <div className="menuDetails">
                        <div className="foodName">
                            <h5>Lovely delicacy</h5>
                            <p>$5.23</p>
                        </div>
                        <h6>
                            Our delicacy serves you healthy eating.
                            This burger is made for your lovely appetite.
                            Our fresh hanburger serves you healthy eating.
                            This burger is made for your lovely appetite.
                        </h6>
                        <h4>Order a delivery</h4>
                    </div>
                </div>

                <div className="card2">
                    <img className="image"
                    height = {90}
                    width = {130}
                    src={require("../assets/greek salad.jpg")}
                    alt="Pictures of Mario and Adrian"
                    />
                <div className="menuDetails">
                    <div className="foodName">
                        <h5>Garland Salad</h5>
                        <p>$10.99</p>
                    </div>
                    <h6>Fresh salad for your every healthy eating.
                        This salad is made for your lovely appetite.
                        Fresh salad for your every healthy eating.
                        This salad is made for your lovely appetite.
                    </h6>
                    <h4>Order a delivery</h4>
                </div>
            </div>
            <div className="card3">
                    <img className="image"
                    height = {90}
                    width = {130}
                    src={require("../assets/lemon dessert.jpg")}
                    alt="Pictures of Mario and Adrian"
                    />
                <div className="menuDetails">
                    <div className="foodName">
                        <h5>Lemon Dessert</h5>
                        <p>$10.51</p>
                    </div>
                    <h6>Lemon dessert for your every healthy eating.
                        This dessert is made for your lovely appetite.
                        Lemon dessert for your every healthy eating.
                        This dessert is made for your lovely appetite.
                    </h6>
                    <h4>Order a delivery</h4>
                </div>
                </div>
            </div>
        </div>
    )
}





export default HighlightSection;