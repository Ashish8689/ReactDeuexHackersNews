import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import New from './Components/New';
import Job from  './Components/Job';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationLinks from "./Components/NavigationLinks";
import Footer from "./Components/Footer";
import Best from "./Components/Best";
import StoriesId from "./Components/StoriesId";

function App() {

  const [type,setType] = useState({id:1,type:"new"})

  const Buttons = [
    {
      id: 1,
      type: "new",
    },
    {
      id: 2,
      type: "job",
    },
    {
      id: 3,
      type: "best",
    },
  ];

  const HandleSetArray = (id) =>{
    const searchButton = Buttons.find(button => button.id === id);
    setType(searchButton);
  }


  return (
    <div className="App">
      {/* <Router>
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
      </Router> */}

      <Navbar />

      <div className="navigation-links">
        {Buttons.map((button) => (
          <NavigationLinks
            key={button.id}
            button={button}
            Storytype={type.id}
            HandleSetArray={HandleSetArray}
          />
        ))}
      </div>

      <StoriesId type={type} />

      <Footer />
    </div>
  );
}

export default App;
