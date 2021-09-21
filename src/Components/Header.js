import React, { useState, createContext, useRef } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import Home from "./Home";
import About from "./About"
import Cards from "./AskTheCards";
import CrystalBall from "./AskTheCrystalBall";
import Stars from "./AskTheStars";
import Contact from "./Contact";

import FiveCardsResults from "./FiveCardsResults"
import ThreeCardsResults from "./ThreeCardsResults"
import ThreeCard from "./ThreeCards";
import FiveCard from "./FiveCards";


export const QuestionContext = createContext()

export default function Header() {
    const [isNavShowing, setIsNavShowing] = useState(false);
    const [isSearchShowing, setIsSearchShowing] = useState(false);

    const [question, setQuestion] = useState('')
    // let questionRef = useRef()
    // const handleChange = () => {
    //     setQuestion(questionRef.current.value)
    // }

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     // console.log(tarotData)
    // }
    console.log(question)
    return (
        <>
            <header>
                <QuestionContext.Provider value={{ question, setQuestion }}>
                    <Router>
                        <div id="navbar" className="white-text">
                            <div id="hamburger-icon-search">
                                <i onClick={() => setIsNavShowing(!isNavShowing)} className="fas fa-star nav-icon"></i>
                                <i onClick={() => setIsSearchShowing(!isSearchShowing)} className="fas fa-search nav-icon"></i>
                                {isSearchShowing &&
                                    <form className="search-bar">
                                        <input type="search" />
                                        <button >Submit</button>
                                    </form>}
                            </div>
                            <h1><Link className="white-text" to='/'>Tarot Nouveau</Link></h1>
                            <Link id="login" className="white-text" to='#'>Login</Link>
                        </div>
                        {isNavShowing && <nav>
                            <ul>
                                <li><Link className="white-text" to='/'>Home</Link></li>
                                <li><Link className="white-text" to='/about'>About</Link></li>
                                <li><Link className="white-text" to='/ask-the-cards'>Ask the Cards</Link></li>
                                <li><Link className="white-text" to='/ask-the-stars'>Ask the Stars</Link></li>
                                <li><Link className="white-text" to='/ask-the-crystal-ball'>Ask the Crystal Ball</Link></li>
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
                            <Route path='/three-card-reading' component={ThreeCard} />
                            <Route path='/three-card-results' component={ThreeCardsResults} />
                            <Route path='/five-card-reading'>
                                <FiveCard setQuestion={setQuestion} />
                            </Route>
                            <Route path='/five-card-results'>
                                <FiveCardsResults question={question} />
                            </Route>

                        </Switch>
                    </Router>
                </QuestionContext.Provider>
            </header>
        </>
    )
}