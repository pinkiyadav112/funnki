import React from "react";
import Brand from "../../components/brand";
import Highlights from "../../components/highlights";
import Main from "../../components/Main";
import Product from "../../components/product";
import Subscribe from "../../components/subscribe";
import Testimonial from "../../components/testimonial";
import Winter from "../../components/winter";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import BestCollection from "../../components/bestCollection";

export default function Home() {
    return (
        <>
            <br />
            <Main />
            <Brand />
            <Product />
            <Winter />
            <Highlights />
            
            <br />
            <BestCollection />
            <br />
            <Testimonial />
            <br />
            <Subscribe />

        </>
    )
};