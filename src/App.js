import React from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route , Link } from "react-router-dom";
import Home from "./Components/Home/Home"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Route 
          path="/"
          exact
          render={(props)=> (
          <Home
          {...props}
          />)}
        >
  
        </Route>
      </Router>
    );
  }

}

export default App;
