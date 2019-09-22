import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
    Nav,
    Navbar,
    Form,
    FormControl,
    Button,
    Dropdown,
    DropdownButton,
    ButtonGroup,
    Carousel,
    Container
} from 'react-bootstrap';
import { Row, Col } from "antd";
import './HomeStyle.css';


function Home() {
    return (
        <div>
            <top>
                <Navbar bg="primary" variant="dark">
                    <ButtonGroup className="optionStyle">
                        <DropdownButton as={ButtonGroup} title="options" id="bg-nested-dropdown">
                            <Dropdown.Item eventKey="1">option 1</Dropdown.Item>
                            <Dropdown.Item eventKey="2">option 2</Dropdown.Item>
                        </DropdownButton>
                    </ButtonGroup>
                    <Navbar.Brand href="#home" className="centerLogo">EBazaar</Navbar.Brand>
                    <Form inline className="stick2Right">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                    <Nav>
                        <Nav.Link className="signIn">Sign In</Nav.Link>
                    </Nav>
                </Navbar>
            </top>

            <underTop>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="imgStyle"
                            src="https://picsum.photos/800/400"
                            alt="First slide"
                            align="middle"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="imgStyle"
                            src="https://picsum.photos/800/400"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="imgStyle"
                            src="https://picsum.photos/800/400"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </underTop>

            <hr className="hrStyle" />

            <Container className="contStyle">
                <Row className="rowStyle">
                    <Col className="colStyle">
                        <h5>Men's</h5>
                        <ul>
                            <li>Clothes</li>
                            <li>Shoes</li>
                            <li>Accessories</li>
                        </ul>
                    </Col>
                    <Col className="colStyle">
                        <h5>Women's</h5>
                        <ul>
                            <li>Clothes</li>
                            <li>Shoes</li>
                            <li>Accessories</li>
                        </ul>
                    </Col>
                    <Col className="colStyle">
                        <h5>Kid's</h5>
                        <ul>
                            <li>Clothes</li>
                            <li>Shoes</li>
                            <li>Accessories</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <hr className="hrStyle2"/>
            <div>
                <p>this is just to check</p>
            </div>
        </div>
    )
}


export default Home;
//use the bootstrap carousel instead of antd