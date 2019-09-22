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
    Carousel
} from 'react-bootstrap';
import { isAbsolute } from "path";

const styles = {
    optionStyle: {
        //margin: '10px'
    },

    stick2Right: {
        position: 'absolute',
        right: '50px'
    },

    centerLogo: {
        position: 'relative',
        left: '10px'
    },

    signIn: {
        position: 'relative',
        left: '700px'
    },

    cStyle: {
        display: 'block',
        margin: '0 auto'
    }
}

function Home() {
    return (
        <div>
            <top>
                <Navbar bg="primary" variant="dark">
                    <ButtonGroup style={styles.optionStyle}>
                        <DropdownButton as={ButtonGroup} title="options" id="bg-nested-dropdown">
                            <Dropdown.Item eventKey="1">option 1</Dropdown.Item>
                            <Dropdown.Item eventKey="2">option 2</Dropdown.Item>
                        </DropdownButton>
                    </ButtonGroup>
                    <Navbar.Brand href="#home" style={styles.centerLogo}>EBazaar</Navbar.Brand>
                    <Form inline style={styles.stick2Right}>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                    <Nav>
                        <Nav.Link style={styles.signIn}>Sign In</Nav.Link>
                    </Nav>
                </Navbar>
            </top>

            <underTop>
                <Carousel>
                    <Carousel.Item>
                        <img
                            style={styles.cStyle}
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
                            style={styles.cStyle}
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
                            style={styles.cStyle}
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
        </div>
    )
}


export default Home;
//use the bootstrap carousel instead of antd