import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import Home from "./Home";
import About from "./About"
import Cards from "./AskTheCards";
import CrystalBall from "./AskTheCrystalBall";
import Stars from "./AskTheStars";
import StarsResults from "./StarsResults";
import Contact from "./Contact";
import FiveCardsResults from "./FiveCardsResults"
import ThreeCardsResults from "./ThreeCardsResults"
import ThreeCard from "./ThreeCards";
import FiveCard from "./FiveCards";
import ManifestAffirm from "./ManifestationsAndAffirmations";



export default function Header() {
    //toggles the render of the Navigation Bar
    const [isNavShowing, setIsNavShowing] = useState(false);
    //toggles the render of the Search Bar
    const [isSearchShowing, setIsSearchShowing] = useState(false);

    //holds the question the user asks
    const [question, setQuestion] = useState('')

    return (
        <>
            <main>
                <Router>
                    <div id="navbar" className="white-text">
                        <div id="hamburger-icon-search">
                            <i onClick={() => setIsNavShowing(!isNavShowing)} className="fas fa-star nav-icon"></i>
                            <i onClick={() => setIsSearchShowing(!isSearchShowing)} className="fas fa-search nav-icon"></i>
                            {isSearchShowing &&
                                <form className="search-bar">
                                    <input type="search" />
                                    <button id="search-btn">Submit</button>
                                </form>}
                        </div>
                        <h1><Link className="white-text" to='/'>Tarot Nouveau</Link></h1>
                        <Link id="login" className="white-text" to='#'>Login</Link>
                    </div>
                    {isNavShowing && <nav>
                        <ul>
                            <li><Link className="white-text" to='/'>Home</Link></li>
                            <li><Link className="white-text" to='/about'>About</Link></li>
                            <li><Link className="white-text" to='/ask-the-cards'> Ask the Cards</Link></li>
                            <li><Link className="white-text" to='/ask-the-stars'>Ask the Stars</Link></li>
                            <li><Link className="white-text" to='/ask-the-crystal-ball'>Ask the Crystal Ball</Link></li>
                            <li><Link className="white-text" to='/manifestations-and-affirmations'>Manifestations + Affirmations</Link></li>
                            <li><Link className="white-text" to='/contact'>Contact</Link></li>
                        </ul>
                    </nav>}
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/ask-the-cards' component={Cards} />
                        <Route path='/ask-the-stars' component={Stars} />
                        <Route path='/ask-the-crystal-ball' component={CrystalBall} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/three-card-reading'>
                            <ThreeCard setQuestion={setQuestion} />
                        </Route>
                        <Route path='/three-card-results'>
                            <ThreeCardsResults question={question} />
                        </Route>

                        <Route path='/five-card-reading'>
                            <FiveCard setQuestion={setQuestion} />
                        </Route>
                        <Route path='/five-card-results'>
                            <FiveCardsResults question={question} />
                        </Route>
                        <Route path='/horoscope-reading'>
                            <Stars />
                        </Route>
                        <Route path='/horoscope-results'>
                            <StarsResults />
                        </Route>
                        <Route path='/manifestations-and-affirmations' component={ManifestAffirm} />
                    </Switch>
                </Router>
            </main>
        </>
    )
}

