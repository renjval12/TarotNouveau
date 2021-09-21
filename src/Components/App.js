import React, { Component, createContext } from "react";
import Footer from "./Footer"
import Header from "./Header"
// import TestBootstrap from "./Components/TestBootstrap"

export const isShowingContext = createContext()

export default class App extends Component {
    state = {
        isResultShowing: false
    }

    render() {
        return (
            <>
                <Header />
                <Footer />
            </>
        );
    }
}