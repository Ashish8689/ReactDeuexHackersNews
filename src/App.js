import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavigationLinks from "./Components/NavigationLinks";
import Footer from "./Components/Footer";
import StoriesId from "./Components/StoriesId";

function App() {

  const Buttons = [
    {
      id: 1,
      storytype: "new",
    },
    {
      id: 2,
      storytype: "job",
    },
    {
      id: 3,
      storytype: "best",
    },
  ];

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="navigation-links">
          {Buttons.map((button) => (
            <NavigationLinks key={button.id} button={button} />
          ))}
        </div>

        <Switch>
          <Route
            path={["/","/:type"]}
            render={() => <Redirect to="/new" />}
            exact
            component={StoriesId}
          />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
