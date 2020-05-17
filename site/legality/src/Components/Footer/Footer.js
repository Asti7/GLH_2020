import React, { Component } from 'react';
import style from './Footer.module.scss';

class FooterComponent extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return <div className={style["footer-main-div"]}>
            <div className={style["name-div"]}>
            <i className="far fa-copyright" id={style["copyrights-logo"]}></i>All rights reserved.
            </div>
            <div className={style["estd-div"]}>Estd. 2020</div>
            <div className={style["social-media-div"]}>
                Find Us On:
                <div className={style["social-media-links"]}>
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    }
}

export default FooterComponent;