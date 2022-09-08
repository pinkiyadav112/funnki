import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import style from "./index.module.scss"
export default function BestCollection() {
    return (
        <>
            <br /><br /><br />
            <div className={style.winter}>
                <Container>
                    <Row>
                        <Col md={4}>

                            <div className={style.winter_heading}>
                                <h1>Our Best <br /><span>Collection 2022</span></h1>
                                <p>Easy 15 days return and exchange. Return Policies may vary based on products and promotions. For full details on our Returns Policies, please</p>
                                <Link className="shop_btn  " to="/shop">Shop Now</Link>

                            </div>
                        </Col>
                        <Col md={8}>
                            <div className={style.image_list}>
                                <Row>
                                    <Col md={4}>
                                        <div className={style.first_img}>
                                            <img src="https://besteidcollection.com/wp-content/uploads/2019/02/275-Purple-and-ash-Colour-mixed-long-kurtis-stylish-trendy-anarkoli-dress-2018-eid-dress.jpg" alt="" />
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className={style.secand_img}>
                                            <img src="https://www.marieclaire.com.au/media/98640/pac-portrait-2022-04-08t101251737.jpg?width=720&center=0.0,0.0" alt="" />
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className={style.first_img}>
                                            <img src="https://folklorecollections.com/wp-content/uploads/2021/06/Exclusive-printed-maxi-silk-dress-3-550x840.jpg" alt="" />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}