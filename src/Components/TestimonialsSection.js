import React from "react";
import '../Styles/TestimonialsSection.css'

const TestimonialsSection = () => {
    return (
        <div id="testimonialParentBox">
            <div className="testimonials">
            <div className = "card">
                <img height = {90}
                    width = {130}
                    src={require("../images/image4")}
                    alt="Adam"
                    />
                    <h5>Adam</h5>
                    <h6>I utmostly enjoyed myself at the Little Lemon restuarant.
                        Their salad is made for your lovely appetite and will get
                        you hooked.
                    </h6>
            </div>
            <div  className = "card">
                <img height = {90}
                    width = {130}
                    src={require("../images/image5")}
                    alt="Romeo"
                    />
                    <h5>Romeo</h5>
                    <h6>I utmostly enjoyed myself at the Little Lemon restuarant.
                        Their salad is made for your lovely appetite and will get
                        you hooked.
                    </h6>
            </div>
            <div className = "card">
                <img height = {90}
                    width = {130}
                    src={require("../images/image1")}
                    alt="Loveth"
                    />
                    <h5>Loveth</h5>
                    <div>
                    <h6>I utmostly enjoyed myself at the Little Lemon restuarant.
                        Their salad is made for your lovely appetite and will get
                        you hooked.
                    </h6>

                    </div>
            </div>
        </div>
        </div>
    )
};


export default TestimonialsSection;