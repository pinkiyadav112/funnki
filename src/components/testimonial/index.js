
import { Col, Container, Row } from "react-bootstrap"
import style from "./index.module.scss"
export default function Testimonial() {
    return (
        <>
            <br />
            <br />
            <Container>
                <Row>
                    <Col md={4}>
                        <div className={style.bigimg} >
                            <img src="https://images.unsplash.com/photo-1507587396692-5afe1f777676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Leslie Alexander" />
                            <div>
                                <p>Lalit yadav</p>
                                <p>“Also be sure to check out which works with your Gmail to create a simplified newsletter reading experience away from the business of your inbox.”</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className={style.testimonial}>
                            <h6>TESTIMONIAL</h6>
                            <h1>What do they think after using <br/><span>funnki</span> </h1>
                            <br />
                            <br />
                         
                            <Row>
                                <Col md={2}>
                                    <img src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" alt="Esther Howard"></img>
                                </Col>
                                <Col md={10}>
                                    <br />
                                    <p>Sumit kumar</p>
                                    <p><b>“You should try out. Organizes all the newsletters very neastly. Still in pretty early stage but it's great so far.”</b></p>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col md={2}>
                                    <img src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" alt="Esther Howard"></img>
                                </Col>
                                <Col md={10}>
                                    <br />
                                    <p>Rajeev kumar</p>
                                    <p><b>“You should try out. Organizes all the newsletters very neastly. Still in pretty early stage but it's great so far.”</b></p>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col md={2}>
                                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Esther Howard"></img>
                                </Col>
                                <Col md={10}>
                                    <br />
                                    <p>Aakash kumar</p>
                                    <p><b>“You should try out. Organizes all the newsletters very neastly. Still in pretty early stage but it's great so far.”</b></p>
                                </Col>
                            </Row>

                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}