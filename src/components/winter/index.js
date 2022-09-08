import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import style from "./index.module.scss"
export default function Winter() {
    return (
        <>
            <br /><br /><br />
            <div className={style.winter}>
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className={style.image_list}>
                                <Row>
                                    <Col md={6}>
                                        <div className={style.first_img}>
                                            <img src="https://rukminim1.flixcart.com/image/612/612/l2qhjm80/dress/y/z/r/l-women-aline-single-piece-suit-marron-sakhi-collection-original-imageyggy3wzzkey.jpeg?q=70" alt="" />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className={style.secand_img}>
                                            <img src="https://images.asos-media.com/products/river-island-ripped-knee-mom-jeans-in-mid-wash-blue/14646626-1-midwash?$n_640w$&wid=513&fit=constrain" alt="" />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className={style.winter_heading}>
                                <h1>Winter <br /><span>Collection 2022</span></h1>
                                <p>Easy 15 days return and exchange. Return Policies may vary based on products and promotions. For full details on our Returns Policies, please</p>
                                <Link className="shop_btn  " to="/shop">Shop Now</Link>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}