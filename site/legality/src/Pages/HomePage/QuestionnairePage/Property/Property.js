import React, { Component } from "react";
import Header from "../../../../Components/Header/Header";
import Footer from "../../../../Components/Footer/Footer";

class Property extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return <>
        <Header />
        <Footer />
        </>
    }
}

export default Property;