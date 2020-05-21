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
            {/* <i id={style["user-icon"]} class="fas fa-user-circle"></i> */}
            <img src={require("../../../../Assets/LawyerPhotos/first.png")} alt="" id={style["lawyer-image"]} />
            <div className={style["karma-and-ratings-div"]}>
              <div className={style["ratings-div"]}>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <i class="far fa-star"></i>
              </div>
              <div className={style["karma-div"]}>Community Score: 34</div>
            </div>
            <div className={style["lawyer-name-and-law-house-div"]}>
              <div className={style["lawyer-name"]}>Harvey Spector</div>
              <div className={style["law-house-div"]}>
                <i class="fas fa-balance-scale"></i>Spector Lawyers
              </div>
              <div className={style["contact-details-div"]}>
                <i class="fas fa-phone-alt"></i>
                <i class="fas fa-comments"></i>
                <i class="fas fa-video"></i>
                <i class="fas fa-map-marked-alt"></i>
              </div>
            </div>
            <i id={style["bookmark-icon"]} class="far fa-bookmark"></i>
          </div>
          <div id={style["lawyer-profile-grid-section"]} class="row">
            <div id={style["about-me-and-expertise-section"]} class="col-8">
              <div className={style["lawyer-bio-section"]}>
                <div className={style["bio-section-heading"]}>About Me:</div>
                <div className={style["bio-content"]}>
                  Hi there! My name is Harvey Spector, senior partner at Spector
                  Lawyers. At Spector Lawyers, our goal is to be the leading law
                  firm that creates long lasting relationship with customers. 
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
                    Contracts
                  </span>
                  <span
                    id={style["card-tags"]}
                    class="badge badge-pill badge-dark"
                  >
                    Property
                  </span>
                  <span
                    id={style["card-tags"]}
                    class="badge badge-pill badge-dark"
                  >
                    Employment Law
                  </span>
                  <span
                    id={style["card-tags"]}
                    class="badge badge-pill badge-dark"
                  >
                    Criminal Manners
                  </span>
                </div>
              </div>
            </div>
            <div id={style["queries-section"]} class="col-4">
              <div className={style["queries-section-heading"]}>
                Queries Participated
              </div>
              <div className={style["queries-listing-section"]}>
                {/* Single Query */}
                <div class="card" id={style["query-selector"]}>
                  <div class="card-body">
                    <strong>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </strong>
                  </div>
                </div>
                {/* Single Query */}
                {/* Single Query */}
                <div class="card" id={style["query-selector"]}>
                  <div class="card-body">
                    <strong>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </strong>
                  </div>
                </div>
                {/* Single Query */}
                {/* Single Query */}
                <div class="card" id={style["query-selector"]}>
                  <div class="card-body">
                    <strong>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </strong>
                  </div>
                </div>
                {/* Single Query */}
                {/* Single Query */}
                <div class="card" id={style["query-selector"]}>
                  <div class="card-body">
                    <strong>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </strong>
                  </div>
                </div>
                {/* Single Query */}
                {/* Single Query */}
                <div class="card" id={style["query-selector"]}>
                  <div class="card-body">
                    <strong>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </strong>
                  </div>
                </div>
                {/* Single Query */}
                {/* Single Query */}
                <div class="card" id={style["query-selector"]}>
                  <div class="card-body">
                    <strong>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </strong>
                  </div>
                </div>
                {/* Single Query */}
                {/* Single Query */}
                <div class="card" id={style["query-selector"]}>
                  <div class="card-body">
                    <strong>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </strong>
                  </div>
                </div>
                {/* Single Query */}
              </div>
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
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
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
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
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
