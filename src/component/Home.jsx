import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Col, Button, Row } from 'react-bootstrap';


const Home = () => {
    return (
        <div className="hero">
            <div class="card bg-dark text-white border-0">
                <img src="/assets/bg.jpg" class="card-img" alt="Background" height="600px" />
                <div class="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 class="card-title display-3 fw-bolder mb-0">New Season Arrivals</h5>
                        <p class="card-text lead fs-2">
                            Check out all trends
                        </p>
                    </div>
                    <div className="App">
                        <Container className='p-4'>
                            <Row>
                            <Col md="3">
                                <Card>

                                    <Card.Body>
                                        <Card.Title style={{ color: "#aa92df",}}>For Customers</Card.Title>
                                        <Card.Text>

                                        </Card.Text>
                                        <Button variant="primary"style={{ backgroundColor: "#aa92df", borderStyle: "none", float: "center",}}>
                                            Shop Now
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md="3">
                                <Card>

                                    <Card.Body>
                                        <Card.Title style={{ color: "#aa92df",}}>For Sellers</Card.Title>
                                        <Card.Text>

                                        </Card.Text>
                                        <Button variant="primary"style={{ backgroundColor: "#aa92df", borderStyle: "none", float: "center",}}>
                                            Advertise
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            </Row>
                        </Container>
                    </div>
                    
                </div>

            </div>

        </div>

    );
}

export default Home;