import { Navbar, Container, Nav, NavDropdown, Dropdown } from 'react-bootstrap'
import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from "./Home";
import About from "./About"
import Cards from "./AskTheCards";
import CrystalBall from "./AskTheCrystalBall";
import Stars from "./AskTheStars";
import Contact from "./Contact";
export default function TestBootstrap() {
    return (
        <>
            <Router>
                <Navbar variant="dark" bg="black" expand="xxl">
                    <Container id="navbar" fluid>
                        <Navbar.Toggle aria-controls="basic-navbar-nav">
                            <i className="fas fa-star nav-icon"></i>
                        </Navbar.Toggle>
                        <h1><Link className="white-text" to='/'>Tarot Nouveau</Link></h1>
                        <Link id="login" className="white-text" to='#'>Login</Link>

                        <Navbar.Collapse expand="xxl">
                            <ul>
                                <li><Link className="white-text" to='/'>Home</Link></li>
                                <li><Link className="white-text" to='/about'>About</Link></li>
                                <li><Link className="white-text" to='/ask-the-cards'>Ask the Cards</Link></li>
                                <li><Link className="white-text" to='/ask-the-stars'>Ask the Stars</Link></li>
                                <li><Link className="white-text" to='/ask-the-crystal-ball'>Ask the Crystal Ball</Link></li>
                                <li><Link className="white-text" to='/contact'>Contact</Link></li>
                            </ul>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/ask-the-cards' component={Cards} />
                    <Route path='/ask-the-stars' component={Stars} />
                    <Route path='/ask-the-crystal-ball' component={CrystalBall} />
                    <Route path='/contact' component={Contact} />
                </Switch>
            </Router>
        </>
    )
}


