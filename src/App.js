import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Registration from "./Registration";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Registration />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
