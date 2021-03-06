import React, { Component } from "react";
import style from "./Header.module.scss";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className={style["header-main-div"]}>
          <div className={style["name-and-logo-div"]}>
            <div className={style["name-div"]}>
              <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                LEGALITY
              </Link>
            </div>
            {/* <div className={style["tagline"]}>
              {" "}
              <span>Your Legal Umbrella</span>
            </div> */}
            <div className={style["logo-div"]}>
              <img
                src={require("../../Assets/Images/Logo.png")}
                className={style["logo"]}
                alt=""
              />
            </div>
          </div>
          <div className={style["menu-options-div"]}>
            <div className={style["menu-option"]}>
              <Link className={style["menu-option-link"]} to="/">
                HOME
              </Link>
            </div>
            <div className={style["menu-option"]}>
              <Link className={style["menu-option-link"]} to="/forum">
                FORUM
              </Link>
            </div>
            <div className={style["menu-option"]}>
              <Link className={style["menu-option-link"]} to="/consultancy">
                CONSULT
              </Link>
            </div>
            <div className={style["menu-option"]}>
              <Link className={style["menu-option-link"]} to="/questionnaire">
              SITUATION CARDS
              </Link>
            </div>
            <div className={style["menu-option"]}>
              <Link className={style["menu-option-link"]} to="/contactus">
                CONTACT US
              </Link>
            </div>
            <div className={style["menu-option"]}>
              <Link className={style["menu-option-link"]} to="/aboutus">
                ABOUT US
              </Link>
            </div>
            {/* <div className={style["menu-option"]}>
              <Link className={style["menu-option-link"]} to="login">
                LOGIN / SIGN UP
              </Link>
            </div> */}
          </div>
        </div>
      </>
    );
  }
}

export default Header;
