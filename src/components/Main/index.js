import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Container} from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Main() {

    return (
        <>
         <Container>
            <div className="main2">
                <div className="main">
                    <Carousel autoPlay interval="8000" infiniteLoop transitionTime="1000">
                        <div className="slide">
                            <img src="https://media2.newlookassets.com/i/newlook/685736009/womens/clothing/dresses/black-ditsy-floral-chiffon-pleated-tie-strap-midi-dress.jpg?strip=true&qlt=80&w=720" alt="slide" />
                        </div>
                        <div className="slide">
                            <img src="https://looksgud.com/blog/wp-content/uploads/2017/06/all-about-you.jpg" alt="slide" />
                        </div>
                    </Carousel>
                </div>
                <div className="heading">
                    <h1>Style That Speak</h1>
                    <br/>
                    <p>There are a number of other properties to configure the behavior of the React Responsive Carousel. Let’s check them below</p>
                    <Link className="shop_btn  " to="/shop">Shop Now</Link>
                </div>
                <div className="slide2">
                    <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1654189100-dual-toned-striped-button-up-dress-shirt-1654189008.png?crop=1xw:1xh;center,top&resize=480:*" alt="slide" />
                </div>
            </div>
            </Container>
        </>
    )
};





