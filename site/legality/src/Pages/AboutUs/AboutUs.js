import React, { Component } from "react";
import style from "./AboutUs.module.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer"

class AboutUsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <div className={style["about-us-page-main-heading"]}>Our Mission</div>
        <div className={style["about-us-page-main-sub-heading"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        {/* First Parallax Effect */}
        <div className={style["first-parallax-effect"]}></div>
        {/* First Parallax Effect */}
        <div className={style["about-us-page-inner-heading"]}>About</div>
        <div className={style["about-us-page-inner-para"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className={style["about-us-page-team-div"]}>
          {/* Second Parallax Effect */}
          <div className={style["second-parallax-effect"]}></div>
          {/* Second Parallax Effect */}

          <div className={style["team-div-heading"]}>Leadership</div>
          <div className={style["team-div-card-section"]}>
            {/* Single Card */}
            <div
              class="card"
              id={style["about-us-page-card"]}
            >
              <i class="fas fa-user-circle" id={style["user-icon"]}></i>
              <div class="card-body">
                <h5 class="card-title">Mehraaz Sindhu</h5>
                <h6 class="card-subtitle mb-2 text-muted">Co-Founder</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
               <div>
               <i class="fas fa-at"></i> asar0011@student.monash.edu
               </div>
              </div>
            </div>
            {/* Single Card */}
            {/* Single Card */}
            <div
              class="card"
              id={style["about-us-page-card"]}
            >
              <i class="fas fa-user-circle" id={style["user-icon"]}></i>
              <div class="card-body">
                <h5 class="card-title">Anmol Sarraf</h5>
                <h6 class="card-subtitle mb-2 text-muted">Co-Founder</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <i class="fas fa-at"></i> asar0011@student.monash.edu
              </div>
            </div>
            {/* Single Card */}
            {/* Single Card */}
            <div
              class="card"
              id={style["about-us-page-card"]}
            >
              <i class="fas fa-user-circle" id={style["user-icon"]}></i>
              <div class="card-body">
                <h5 class="card-title">Astitva Gautam</h5>
                <h6 class="card-subtitle mb-2 text-muted">Co-Founder</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <i class="fas fa-at"></i> asar0011@student.monash.edu
              </div>
            </div>
            {/* Single Card */}
            {/* Single Card */}
            <div
              class="card"
              id={style["about-us-page-card"]}
            >
              <i class="fas fa-user-circle" id={style["user-icon"]}></i>
              <div class="card-body">
                <h5 class="card-title">Khoi Cao</h5>
                <h6 class="card-subtitle mb-2 text-muted">Co-Founder</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <i class="fas fa-at"></i> asar0011@student.monash.edu
              </div>
            </div>
            {/* Single Card */}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default AboutUsPage;
