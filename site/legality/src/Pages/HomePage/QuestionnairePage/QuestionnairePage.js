import React, { Component } from "react";
import style from "./QuestionnairePage.module.scss";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";

class QuestionnairePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <div className={style["questionnaire-page-main-div"]}>
          <div className={style["questionnaire-page-heading-div"]}>
            Legal Accessibility
          </div>
          <div className={style["questionnaire-page-subheading-div"]}>
            Please search and select the categorie(s) of your case:
          </div>
          <div className={style["search-bar-functionality"]}>
            <div
              class="input-group input-group-lg"
              id={style["search-bar-field-selector"]}
            >
              <div class="input-group-prepend"></div>
              <input
                type="text"
                class="form-control"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Search"
                id={style["search-bar-field"]}
              />
            </div>
          </div>
          <div className={style["questionnaire-page-card-section"]}>
            {/* Card */}
            <div
              class="card"
              style={{ width: "18rem" }}
              id={style["card-selector"]}
            >
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
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
            {/* Card */}
            {/* Card */}
            <div
              class="card"
              style={{ width: "18rem" }}
              id={style["card-selector"]}
            >
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
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
            {/* Card */}
            {/* Card */}
            <div
              class="card"
              style={{ width: "18rem" }}
              id={style["card-selector"]}
            >
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
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
            {/* Card */}
            {/* Card */}
            <div
              class="card"
              style={{ width: "18rem" }}
              id={style["card-selector"]}
            >
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
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
            {/* Card */}
            {/* Card */}
            <div
              class="card"
              style={{ width: "18rem" }}
              id={style["card-selector"]}
            >
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
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
            {/* Card */}
            {/* Card */}
            <div
              class="card"
              style={{ width: "18rem" }}
              id={style["card-selector"]}
            >
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
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
            {/* Card */}
            {/* Card */}
            <div
              class="card"
              style={{ width: "18rem" }}
              id={style["card-selector"]}
            >
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
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
            {/* Card */}
            {/* Card */}
            <div
              class="card"
              style={{ width: "18rem" }}
              id={style["card-selector"]}
            >
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
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
            {/* Card */}
            {/* Card */}
            <div
              class="card"
              style={{ width: "18rem" }}
              id={style["card-selector"]}
            >
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
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
            {/* Card */}
            {/* Card */}
            <div
              class="card"
              style={{ width: "18rem" }}
              id={style["card-selector"]}
            >
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
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
            {/* Card */}
            {/* Card */}
            <div
              class="card"
              style={{ width: "18rem" }}
              id={style["card-selector"]}
            >
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
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
            {/* Card */}
            {/* Card */}
            <div
              class="card"
              style={{ width: "18rem" }}
              id={style["card-selector"]}
            >
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
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
            {/* Card */}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default QuestionnairePage;
