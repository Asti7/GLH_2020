import React, { Component } from "react";
import style from "./ConsultancyPage.module.scss";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import { Link } from "react-router-dom";

class consultancyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <div className={style["consultancy-page-main-div"]}>
          <div className={style["consultancy-page-main-heading"]}>
            Consultancy
          </div>
          <div className={style["consultancy-page-sub-heading"]}>
            Search lawyers by their field of expertise:
          </div>
          <div className={style["serach-field-div"]}>
            <input
              class="form-control"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Search"
              data-role="tagsinput"
              id={style["search-bar-field"]}
            />
          </div>
          <div className={style["consultancy-page-card-section"]}>
            {/* Single Card */}
            <div
              class="card"
              style={{ width: "18rem" }}
              id={style["consultancy-page-card"]}
            >
              <i class="fas fa-user-circle" id={style["user-icon"]}></i>
              <div class="card-body">
                <h5 class="card-title">James Harbour</h5>
                <h6 class="card-subtitle mb-2 text-muted">Gilbert Law House</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <span
                  id={style["card-tags"]}
                  class="badge badge-pill badge-dark"
                >
                  Civil
                </span>
                <span
                  id={style["card-tags"]}
                  class="badge badge-pill badge-dark"
                >
                  Covid 19
                </span>
                <span
                  id={style["card-tags"]}
                  class="badge badge-pill badge-dark"
                >
                  Employment
                </span>
                <span
                  id={style["card-tags"]}
                  class="badge badge-pill badge-dark"
                >
                  Martial
                </span>
                <Link to="/lawyerprofile">
                <button
                  id={style["consultancy-page-card-button"]}
                  type="button"
                  class="btn btn-outline-dark"
                >
                  View Profile
                </button>
                </Link>
              </div>
            </div>
            {/* Single Card */}
            {/* Single Card */}
            <div
              class="card"
              style={{ width: "18rem" }}
              id={style["consultancy-page-card"]}
            >
              <i class="fas fa-user-circle" id={style["user-icon"]}></i>
              <div class="card-body">
                <h5 class="card-title">Tony Stark</h5>
                <h6 class="card-subtitle mb-2 text-muted">Gilbert Law House</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <span
                  id={style["card-tags"]}
                  class="badge badge-pill badge-dark"
                >
                  Civil
                </span>
                <span
                  id={style["card-tags"]}
                  class="badge badge-pill badge-dark"
                >
                  Covid 19
                </span>
                <span
                  id={style["card-tags"]}
                  class="badge badge-pill badge-dark"
                >
                  Employment
                </span>
                <span
                  id={style["card-tags"]}
                  class="badge badge-pill badge-dark"
                >
                  Martial
                </span>
                <Link to="/lawyerprofile">
                <button
                  id={style["consultancy-page-card-button"]}
                  type="button"
                  class="btn btn-outline-dark"
                >
                  View Profile
                </button>
                </Link>
              </div>
            </div>
            {/* Single Card */}
            {/* Single Card */}
            <div
              class="card"
              style={{ width: "18rem" }}
              id={style["consultancy-page-card"]}
            >
              <i class="fas fa-user-circle" id={style["user-icon"]}></i>
              <div class="card-body">
                <h5 class="card-title">James Gils</h5>
                <h6 class="card-subtitle mb-2 text-muted">Gilbert Law House</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <span
                  id={style["card-tags"]}
                  class="badge badge-pill badge-dark"
                >
                  Civil
                </span>
                <span
                  id={style["card-tags"]}
                  class="badge badge-pill badge-dark"
                >
                  Covid 19
                </span>
                <span
                  id={style["card-tags"]}
                  class="badge badge-pill badge-dark"
                >
                  Employment
                </span>
                <span
                  id={style["card-tags"]}
                  class="badge badge-pill badge-dark"
                >
                  Martial
                </span>
                <Link to="/lawyerprofile">
                <button
                  id={style["consultancy-page-card-button"]}
                  type="button"
                  class="btn btn-outline-dark"
                >
                  View Profile
                </button>
                </Link>
              </div>
            </div>
            {/* Single Card */}
            {/* Single Card */}
            <div
              class="card"
              style={{ width: "18rem" }}
              id={style["consultancy-page-card"]}
            >
              <i class="fas fa-user-circle" id={style["user-icon"]}></i>
              <div class="card-body">
                <h5 class="card-title">Claud Gray</h5>
                <h6 class="card-subtitle mb-2 text-muted">Gilbert Law House</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <span
                  id={style["card-tags"]}
                  class="badge badge-pill badge-dark"
                >
                  Civil
                </span>
                <span
                  id={style["card-tags"]}
                  class="badge badge-pill badge-dark"
                >
                  Covid 19
                </span>
                <span
                  id={style["card-tags"]}
                  class="badge badge-pill badge-dark"
                >
                  Employment
                </span>
                <span
                  id={style["card-tags"]}
                  class="badge badge-pill badge-dark"
                >
                  Martial
                </span>
                <Link to="/lawyerprofile">
                <button
                  id={style["consultancy-page-card-button"]}
                  type="button"
                  class="btn btn-outline-dark"
                >
                  View Profile
                </button>
                </Link>
              </div>
            </div>
            {/* Single Card */}
            {/* Single Card */}
            <div
              class="card"
              style={{ width: "18rem" }}
              id={style["consultancy-page-card"]}
            >
              <i class="fas fa-user-circle" id={style["user-icon"]}></i>
              <div class="card-body">
                <h5 class="card-title">Lex Luthour</h5>
                <h6 class="card-subtitle mb-2 text-muted">Gilbert Law House</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <span
                  id={style["card-tags"]}
                  class="badge badge-pill badge-dark"
                >
                  Civil
                </span>
                <span
                  id={style["card-tags"]}
                  class="badge badge-pill badge-dark"
                >
                  Covid 19
                </span>
                <span
                  id={style["card-tags"]}
                  class="badge badge-pill badge-dark"
                >
                  Employment
                </span>
                <span
                  id={style["card-tags"]}
                  class="badge badge-pill badge-dark"
                >
                  Martial
                </span>
                <Link to="/lawyerprofile">
                <button
                  id={style["consultancy-page-card-button"]}
                  type="button"
                  class="btn btn-outline-dark"
                >
                  View Profile
                </button>
                </Link>
              </div>
            </div>
            {/* Single Card */}
            {/* Single Card */}
            <div
              class="card"
              style={{ width: "18rem" }}
              id={style["consultancy-page-card"]}
            >
              <i class="fas fa-user-circle" id={style["user-icon"]}></i>
              <div class="card-body">
                <h5 class="card-title">Jay Kapur</h5>
                <h6 class="card-subtitle mb-2 text-muted">Gilbert Law House</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <span
                  id={style["card-tags"]}
                  class="badge badge-pill badge-dark"
                >
                  Civil
                </span>
                <span
                  id={style["card-tags"]}
                  class="badge badge-pill badge-dark"
                >
                  Covid 19
                </span>
                <span
                  id={style["card-tags"]}
                  class="badge badge-pill badge-dark"
                >
                  Employment
                </span>
                <span
                  id={style["card-tags"]}
                  class="badge badge-pill badge-dark"
                >
                  Martial
                </span>
                <Link to="/lawyerprofile">
                <button
                  id={style["consultancy-page-card-button"]}
                  type="button"
                  class="btn btn-outline-dark"
                >
                  View Profile
                </button>
                </Link>
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

export default consultancyPage;
