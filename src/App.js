import React from "react";
import "./main.scss";
import Home from "./pages/home.jsx";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header.jsx";
import About from "./pages/about.jsx";
import Footer from "./components/footer.jsx";
import Contact from "./pages/contact.jsx";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/" exact component={Home} />
        <Route path="*" component={Home} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
