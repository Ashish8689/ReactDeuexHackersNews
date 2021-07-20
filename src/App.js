import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import New from './Components/New';
import Job from  './Components/Job';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationLinks from "./Components/NavigationLinks";
import Footer from "./Components/Footer";
import Best from "./Components/Best";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="navigation-links">
          <NavigationLinks link="/" type="New" />
          <NavigationLinks link="/job" type="Job" />
          <NavigationLinks link="/best" type="Best" />
        </div>

        <Switch>
          <Route exact path="/" component={New} />
          <Route exact path="/best" component={Best} />
          <Route exact path="/job" component={Job} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
