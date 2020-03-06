import React from "react";
import "./main.scss";
import Home from "./pages/home.jsx";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header.jsx";
import About from "./pages/about.jsx";
import Work from "./pages/work.jsx";
import Footer from "./components/footer.jsx";
import Contact from "./pages/contact.jsx";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
