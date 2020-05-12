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
        <Header />
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
                <Link to="/questionnaire" id={style["card-link"]}>
                <button type="button" class="btn btn-secondary">LEARN MORE</button>
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
                  View, compare and connect with lawyers from our community of legal professionals for your legal mattters.
                </p>
                <Link to="/consultancy" id={style["card-link"]}>
                <button type="button" class="btn btn-secondary">LEARN MORE</button>
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
                <button type="button" class="btn btn-secondary">LEARN MORE</button>
                </Link>
              </div>
            </div>
            {/* Third Card */}
          </div>
        </div>
        {/* Our Services Div */}
        <Footer />
      </>
    );
  }
}

export default HomePage;
