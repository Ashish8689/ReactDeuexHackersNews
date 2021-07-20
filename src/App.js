import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import New from './Components/New';
import Past from  './Components/Past';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationLinks from "./Components/NavigationLinks";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Router>

      <Navbar />
      <div className="navigation-links">
        <NavigationLinks link="/" type="New"/>
        <NavigationLinks link="/past" type="Past"/>
      </div>

          <Switch>
            <Route exact path="/" component={New} />
            <Route exact path="/past" component={Past} />
          </Switch>

        <Footer/>  
      </Router>
    </div>
  );
}

export default App;
