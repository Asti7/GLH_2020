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
      <div className={style["home-page-main-div"]}>
        {/* Landing Page */}
        <div className={style["landing-page"]}>
          <Header />
          <div className={style["landing-page-text"]}>
            <span>Simplifying access to Legal information and services.</span>
          </div>
        </div>
        {/* Landing Page */}
        {/* Our Services Div */}
        <div className={style["functionalities-main-div"]}>
          <div className={style["functionalities-div-main-heading"]}>
            Our Services
          </div>
          <div className={style["functionalities-div-sub-heading"]}>
            We aim to solve the fundamental and deep-rooted issue of the
            Australian legal system. Through Legality, we let you see your
            rights by taking you through a step-by-step guide of all your
            entitlements and your situation. When our guides are insufficient,
            you can have your questions answered directly by lawyers and see
            what other questions have been asked. Lastly, we provide a list of
            verified lawyers that you can contact to help you with your
            situation. You can see how much they charge, a description about
            their company and how they have answered questions.
          </div>
          <div className={style["functionalities-div-card-section"]}>
            {/* First Card */}
            <div
              className="card"
              id={style["functionalities-section-card-div"]}
            >
              <div className="card-body">
                <h5 className="card-title" id={style["card-heading"]}>
                  Forum
                </h5>
                <p className="card-text" id={style["card-para"]} data-test="forum">
                  Get your questions answered directly by a legal professional!
                </p>
                <Link to="/forum" id={style["card-link"]}>
                  <button type="button" className="btn btn-secondary">
                    LEARN MORE
                  </button>
                </Link>
              </div>
            </div>
            {/* First Card */}
            {/* Second Card */}
            <div
              className="card"
              id={style["functionalities-section-card-div"]}
            >
              <div className="card-body">
                <h5 className="card-title" id={style["card-heading"]}>
                  Consultancy
                </h5>

                <p className="card-text" id={style["card-para"]}>
                  Need a lawyer? View and compare all your options with a
                  completely transparent database of lawyers in Victoria.
                </p>
                <Link to="/consultancy" id={style["card-link"]}>
                  <button type="button" className="btn btn-secondary">
                    LEARN MORE
                  </button>
                </Link>
              </div>
            </div>
            {/* Second Card */}
            {/* Third Card */}
            <div
              className="card"
              id={style["functionalities-section-card-div"]}
            >
              <div className="card-body">
                <h5 className="card-title" id={style["card-heading"]}>
                  Situation Cards
                </h5>

                <p className="card-text" id={style["card-para"]} data-test="sitcards">
                  See our step-by-step guide on the most common legal issues.
                </p>
                <Link to="/questionnaire" id={style["card-link"]}>
                  <button type="button" className="btn btn-secondary">
                    LEARN MORE
                  </button>
                </Link>
              </div>
            </div>
            {/* Third Card */}
          </div>
        </div>
        {/* Our Services Div */}
        {/* Second Parallax Scrolling Effect */}
        <div className={style["second-parallax-effect"]}>
          <div className={style["second-parallax-effect-content"]}>
            <div className={style["quote"]}>
              <span>
                <i
                  id={style["opening-quotation-mark"]}
                  className="fas fa-quote-left"
                ></i>
                Injustice anywhere is a threat to justice everywhere.
                <i
                  id={style["closing-quotation-mark"]}
                  className="fas fa-quote-right"
                ></i>
              </span>
            </div>
            <div className={style["citation"]}>
              <span>- Martin Luther king Jr.</span>
            </div>
          </div>
        </div>
        {/* Second Parallax Scrolling Effect */}
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
        {/* Third Parallax Effect Section */}
        <div className={style["third-parallax-effect"]}>
          <div className={style["content"]}>
            <div className={style["quote"]}>
              <i
                id={style["opening-quotation-mark"]}
                className="fas fa-quote-left"
              ></i>
              A law is valuable, not because it is a law, but because there is
              right in it.
              <i
                id={style["closing-quotation-mark"]}
                className="fas fa-quote-right"
              ></i>
            </div>
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
            <div className="row">
              <div className="col-2">
                <div className={style["testinomial-user-details"]}>
                  <i
                    id={style["testinomial-user-icon"]}
                    className="fas fa-user-circle"
                  ></i>
                  <p className={style["testinomial-user-name"]}>Kate Holmes</p>
                </div>
              </div>
              <div className="col-10">
                <div className={style["testinomial-content"]}>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </div>
              </div>
            </div>
            {/* Single Testimonial */}
            {/* Single Testimonial */}
            <div className="row">
              <div className="col-2">
                <div className={style["testinomial-user-details"]}>
                  <i
                    id={style["testinomial-user-icon"]}
                    className="fas fa-user-circle"
                  ></i>
                  <p className={style["testinomial-user-name"]}>Sandra Gray</p>
                </div>
              </div>
              <div className="col-10">
                <div className={style["testinomial-content"]}>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </div>
              </div>
            </div>
            {/* Single Testimonial */}
          </div>
        </div>
        {/* Testinomials Section */}
        {/* Fourth Parallax Effect Section */}
        <div className={style["fourth-parallax-effect"]}>
          <div className={style["content"]}>
            <div className={style["quote"]}>
              <i
                id={style["opening-quotation-mark"]}
                className="fas fa-quote-left"
              ></i>
              Justice delayed is justice denied.
              <i
                id={style["closing-quotation-mark"]}
                className="fas fa-quote-right"
              ></i>
            </div>
            <div className={style["citation"]}>- William E. Gladstone</div>
          </div>
        </div>
        {/* Fourth Parallax Effect Section */}
        <Footer />
      </div>
    );
  }
}

export default HomePage;
