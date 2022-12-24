
import style from "./index.module.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { firestore } from '../../firebase';
import { collection, getDocs, } from "firebase/firestore";
import React from "react";
export default function Highlights() {
    const [highlightsData, setHighlights] = React.useState([])
    const callbackfunction = async () => {
        const collectionRef = collection(firestore, 'Product');
        const products = await getDocs(collectionRef);
        var product = [];
        for (var snap of products.docs) {
            var data = snap.data();
            // data.ID = snap.id
            product.push(data);
        }
        setHighlights(product);
    }
    React.useEffect(() => {
        callbackfunction();
    }, [highlightsData]);

    return (
        <>
            <br /> <br /> <br />
            <div className={style.product}>
                <Container>
                    <Row>
                        <Col md={10}>
                            <div className={style.heading}>
                                <h1>Highlights <span>Categories</span></h1>
                            </div>
                        </Col>
                        <Col md={2} className="text-end">
                            <Link className="shop_btn " to="./shop">View All</Link>
                        </Col>
                    </Row>
                    <br />
                </Container>
                <Swiper
                    slidesPerView={highlightsData.length < 5 ? highlightsData.length : 5}
                    spaceBetween={10}
                    slidesPerGroup={1}
                    breakpoints={{
                        375: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Autoplay, Navigation]}
                    className="mySwiper product"
                >
                    {
                        highlightsData.map((items) => {
                            return (
                                <SwiperSlide>
                                    <div className={style.slider}>
                                        <img src={items.product_image} alt="product" />
                                        <div>
                                            <h1>{items.subcategories}</h1>
                                            <h5>Casual Collection</h5>
                                            <p>{items.sold_price} </p>

                                            <Link className="shop_high" to="/shop">Shop Now</Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div >
        </>
    )

}