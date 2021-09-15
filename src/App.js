import React, { useRef, useState } from "react";

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from "./Home";
import About from "./About";
import Cards from "./AskTheCards";
import CrystalBall from "./AskTheCrystalBall";
import Stars from "./AskTheStars";
import Contact from "./Contact";

export default function App() {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const [isSearchShowing, setIsSearchShowing] = useState(false);


  return (
    <div id="App">
      <header>
        <div id="navbar">
          <div id="hamburger-icon-search">
            <i onClick={() => setIsNavShowing(!isNavShowing)} class="fas fa-bars nav-icon"></i>
            <i onClick={() => setIsSearchShowing(!isSearchShowing)} class="fas fa-search nav-icon"></i>
            {isSearchShowing &&
              <form className="search-bar">
                <input type="search" />
                <button >Submit</button>
              </form>}
          </div>
          <h1>Tarot Nouveau</h1>
          <a href="#">Login</a>
        </div>
        <Router>
          {isNavShowing && <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/ask-the-cards'>Ask the Cards</Link></li>
              <li><Link to='/ask-the-stars'>Ask the Stars</Link></li>
              <li><Link to='/ask-the-crystal-ball'>Ask the Crystal Ball</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </nav>}
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/ask-the-cards' component={Cards} />
            <Route path='/ask-the-stars' component={Stars} />
            <Route path='/ask-the-crystal-ball' component={CrystalBall} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </Router>
      </header >
    </div >
  );
}