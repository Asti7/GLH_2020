import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import style from "./HomePage.module.scss";
import { Link } from "react-router-dom";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {/* Landing Page */}
        <div className={style["landing-page"]}>
          <Header />
          <div className={style["landing-page-text"]}>
            Your only avenue for all your legal queries.
          </div>
        </div>
        {/* Landing Page */}
        {/* Why Legality Section */}
        <div className={style["why-legality-section"]}>
          <div className={style["why-legality-section-heading"]}>
            Why Legality ?
          </div>
          <div className={style["why-legality-section-content"]}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </div>
        </div>
        {/* Why Legality Section */}
        {/* Second Parallax Scrolling Effect */}
        <div className={style["second-parallax-effect"]}>
          <div className={style["second-parallax-effect-content"]}>
            <div className={style["quote"]}>
            <i id={style["opening-quotation-mark"]} class="fas fa-quote-left"></i>Injustice anywhere is a threat to justice everywhere.
            <i id={style["closing-quotation-mark"]} class="fas fa-quote-right"></i>
            </div>
            <div className={style["citation"]}>- Martin Luther king Jr.</div>
          </div>
        </div>
        {/* Second Parallax Scrolling Effect */}
        {/* Our Services Div */}
        <div className={style["functionalities-main-div"]}>
          <div className={style["functionalities-div-main-heading"]}>
            Our Services
          </div>
          <div className={style["functionalities-div-sub-heading"]}>
            Do you need a lawyer but think they are too expensive? Perhaps
            you're not sure on what type of lawyer you need or where to find
            them? Or maybe you just need a quick legal question answered but
            don't want to travel or see multiple lawyers to get the answers you
            need? At Legaility....
          </div>
          <div className={style["functionalities-div-card-section"]}>
            {/* First Card */}
            <div class="card" id={style["functionalities-section-card-div"]}>
              <div class="card-body">
                <h5 class="card-title" id={style["card-heading"]}>
                  Forum
                </h5>
                <p class="card-text" id={style["card-para"]}>
                  Get your legal queries directly answered from our communitty
                  of legal professionals for free of cost.
                </p>
                <Link to="/forum" id={style["card-link"]}>
                  <button type="button" class="btn btn-secondary">
                    LEARN MORE
                  </button>
                </Link>
              </div>
            </div>
            {/* First Card */}
            {/* Second Card */}
            <div class="card" id={style["functionalities-section-card-div"]}>
              <div class="card-body">
                <h5 class="card-title" id={style["card-heading"]}>
                  Consultancy
                </h5>

                <p class="card-text" id={style["card-para"]}>
                  View, compare and connect with lawyers from our community of
                  legal professionals for your legal mattters.
                </p>
                <Link to="/consultancy" id={style["card-link"]}>
                  <button type="button" class="btn btn-secondary">
                    LEARN MORE
                  </button>
                </Link>
              </div>
            </div>
            {/* Second Card */}
            {/* Third Card */}
            <div class="card" id={style["functionalities-section-card-div"]}>
              <div class="card-body">
                <h5 class="card-title" id={style["card-heading"]}>
                  Legal Accessibility
                </h5>

                <p class="card-text" id={style["card-para"]}>
                  We help you in understanding your case better and then
                  accordingly we connect you with the legal professionals.
                </p>
                <Link to="/questionnaire" id={style["card-link"]}>
                  <button type="button" class="btn btn-secondary">
                    LEARN MORE
                  </button>
                </Link>
              </div>
            </div>
            {/* Third Card */}
          </div>
        </div>
        {/* Our Services Div */}
        {/* Third Parallax Effect Section */}
        <div className={style["third-parallax-effect"]}>
          <div className={style["content"]}>
            <div className={style["quote"]}>
            <i id={style["opening-quotation-mark"]} class="fas fa-quote-left"></i>A law is valuable, not because it is a law, but because there is right in it.
            <i id={style["closing-quotation-mark"]} class="fas fa-quote-right"></i></div>
            <div className={style["citation"]}>- Henry Ward Beecher</div>
          </div>
        </div>
        {/* Third Parallax Effect Section */}
        {/* Testinomials Section */}
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
        {/* Testinomials Section */}
        <Footer />
      </>
    );
  }
}

export default HomePage;
