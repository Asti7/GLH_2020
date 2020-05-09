import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import style from "./HomePage.module.scss";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
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
                <h5 class="card-title">Forum</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="card-link">
                  Card link
                </a>
                <a href="#" class="card-link">
                  Another link
                </a>
              </div>
            </div>
            {/* First Card */}
            {/* Second Card */}
            <div class="card" id={style["functionalities-section-card-div"]}>
              <div class="card-body">
                <h5 class="card-title">Consultancy</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="card-link">
                  Card link
                </a>
                <a href="#" class="card-link">
                  Another link
                </a>
              </div>
            </div>
            {/* Second Card */}
            {/* Third Card */}
            <div class="card" id={style["functionalities-section-card-div"]}>
              <div class="card-body">
                <h5 class="card-title">Legal Accessibility</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="card-link">
                  Card link
                </a>
                <a href="#" class="card-link">
                  Another link
                </a>
              </div>
            </div>
            {/* Third Card */}
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
