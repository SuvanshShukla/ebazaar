import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Carousel } from 'antd';


function Home() {
    return (
        <div>
            <Carousel autoplay>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
            </Carousel>
        </div>
    )
}

export default Home;