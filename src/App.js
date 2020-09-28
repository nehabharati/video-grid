import React from 'react';
import './App.css';
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Videos from "./components/Videos"
import Features from "./components/Features"
import Contact from "./components/Contact"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home" exact component={Home} />
      </Switch>
      <Switch>
        <Route path="/features" component={Features} />
        <Route path="/videos" component={Videos} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>

    // <div>
    //   <Navbar />
    //   <Home />
    //   <Features />
    //   <Videos />
    //   <Contact />
    // </div>
  );
}

export default App;
