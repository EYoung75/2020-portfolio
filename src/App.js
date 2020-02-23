import React from "react";
import "./main.scss";
import Home from "./pages/home.jsx";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
