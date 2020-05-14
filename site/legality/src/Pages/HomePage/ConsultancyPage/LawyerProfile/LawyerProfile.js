import React, { Component } from "react";
import style from "./LawyerProfile.module.scss";
import Footer from "../../../../Components/Footer/Footer";
import Header from "../../../../Components/Header/Header";

class LawyerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <div className={style["lawyer-profile-main-div"]}>
          <div className={style["user-picture-and-name-div"]}>
            <i id={style["user-icon"]} class="fas fa-user-circle"></i>
            <div className={style["karma-and-ratings-div"]}>
                <div className={style["ratings-div"]}>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <i class="far fa-star"></i>
                </div>
                <div className={style["karma-div"]}>
                    Karma: 34
                </div>
            </div>
            <div className={style["lawyer-name-and-law-house-div"]}>
              <div className={style["lawyer-name"]}>James Harbour</div>
              <div className={style["law-house-div"]}>
                <i class="fas fa-balance-scale"></i>Gilbert Law House
              </div>
              <div className={style["contact-details-div"]}>
                <i class="fas fa-phone-alt"></i>
                <i class="fas fa-comments"></i>
                <i class="fas fa-map-marked-alt"></i>
              </div>
            </div>
            <i id={style["bookmark-icon"]} class="far fa-bookmark"></i>
          </div>
          <div className={style["lawyer-bio-section"]}>
            <div className={style["bio-section-heading"]}>About Me:</div>
            <div className={style["bio-content"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <div className={style["field-of-expertise-section"]}>
            <div className={style["field-of-expertise-heading"]}>
              Field of Expertise:
            </div>
            <div className={style["field-of-expertise-content"]}>
              <span
                id={style["card-tags"]}
                class="badge badge-pill badge-dark"
                style={{ marginLeft: "0" }}
              >
                Civil
              </span>
              <span id={style["card-tags"]} class="badge badge-pill badge-dark">
                Covid 19
              </span>
              <span id={style["card-tags"]} class="badge badge-pill badge-dark">
                Employment
              </span>
              <span id={style["card-tags"]} class="badge badge-pill badge-dark">
                Martial
              </span>
            </div>
          </div>
          <div className={style["testinomial-section"]}>
            <div className={style["testinomial-section-heading"]}>
              Testinomials:
            </div>
            <div className={style["testinomial-content"]}>
                {/* Single Testimonial */}
              <div class="row">
                <div class="col-2">
                  <div className={style["testinomial-user-details"]}>
                    <i
                      id={style["testinomial-user-icon"]}
                      class="fas fa-user-circle"
                    ></i>
                    <p className={style["testinomial-user-name"]}>
                      Kate Holmes
                    </p>
                  </div>
                </div>
                <div class="col-10">
                  <div className={style["testinomial-content"]}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </div>
                </div>
              </div>
               {/* Single Testimonial */}
                               {/* Single Testimonial */}
              <div class="row">
                <div class="col-2">
                  <div className={style["testinomial-user-details"]}>
                    <i
                      id={style["testinomial-user-icon"]}
                      class="fas fa-user-circle"
                    ></i>
                    <p className={style["testinomial-user-name"]}>
                      Sandra Gray
                    </p>
                  </div>
                </div>
                <div class="col-10">
                  <div className={style["testinomial-content"]}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </div>
                </div>
              </div>
               {/* Single Testimonial */}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default LawyerProfile;