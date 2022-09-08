
import style from "./index.module.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Product() {
    const PRODUCT_LIST = [
        {
            product_img: "https://assets.ajio.com/medias/sys_master/root/20220121/8pKF/61ea5b4baeb2695cdd24612b/-473Wx593H-461592493-multi-MODEL.jpg",
            product_category: "T-shirt"

        },
        {
            product_img: "https://i.pinimg.com/originals/b0/eb/2a/b0eb2a1db7e899cf0b0cd303341fc27a.jpg",
            product_category: "T-shirt"

        },
        {
            product_img: "https://i.pinimg.com/736x/d8/52/f0/d852f0326d9d5cf648cd687e7127e7df.jpg",
            product_category: "T-shirt"

        },
        {
            product_img: "https://images.rue21.com/is/image/rue21/0077_002069_0008711_0042_m?width=414",
            product_category: "T-shirt"

        },
        {
            product_img: "https://i.pinimg.com/736x/4a/20/a7/4a20a7df61cec360e7ac6f6791bee6a1.jpg",
            product_category: "T-shirt"

        }
    ]
    return (
        <>
            <br /> <br /> <br />
            <div className={style.product}>
                <Container>
                    <Row>
                        <Col md={10}>
                            <div className={style.heading}>
                                <h1>Trending <span>Categories</span></h1>
                            </div>
                        </Col>
                        <Col md={2} className="text-end">
                            <button className="shop_btn  ">View All</button>
                        </Col>
                    </Row>
                    <br />
                </Container>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={50}
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
                        PRODUCT_LIST && PRODUCT_LIST.map((items, i) => {
                            return (
                                <SwiperSlide>
                                    <div className={style.slider}>
                                        <Link to="/shop">
                                            <img src={items.product_img} alt="product" />
                                            <p>{items.product_category}</p>
                                        </Link>
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