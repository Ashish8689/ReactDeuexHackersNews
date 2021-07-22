import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationLinks from "./Components/NavigationLinks";
import Footer from "./Components/Footer";
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
      <Router>
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

        <Switch>
          <Route exact path="/" component={StoriesId} />
          <Route exact path="/:type" component={StoriesId} />
        </Switch>

        <Footer />
      </Router>

  
    </div>
  );
}

export default App;
