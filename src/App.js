import React from 'react';
import './App.css';
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Videos from "./components/Videos"
import Features from "./components/Features"
import Contact from "./components/Contact"
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/video-grid" exact render={() => {
        return (
          <Redirect to="/video-grid" />
        )
      }} component={Home} />
      <Switch>
        <Route path="/video-grid/features" component={Features} />
        <Route path="/video-grid/videos" component={Videos} />
        <Route path="/video-grid/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
