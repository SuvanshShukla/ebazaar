import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Carousel } from 'antd';
import {Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap';

function Home() {
    return (
        <div>
            <top>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar>
            </top>
        </div>
    )
}

export default Home;
//use the bootstrap carousel instead of antd