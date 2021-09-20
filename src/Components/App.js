import React, { Component } from "react";
import Footer from "./Footer"
import Header from "./Header"
// import TestBootstrap from "./Components/TestBootstrap"



export default class App extends Component {
    render() {
        return (
            <>
                <Header/>
                {/* <TestBootstrap/> */}
                <Footer/>
                
            </>
        );
    }
}