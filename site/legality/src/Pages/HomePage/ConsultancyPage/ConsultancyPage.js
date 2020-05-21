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
            <div className={style["search-field-inner-div"]}>
            <div className={style["search-field-selector"]}>
            <input
              className="form-control"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Search"
              data-role="tagsinput"
              id={style["search-bar-field"]}
            />
            </div>
            <i id={style["filter-icon"]} className="fas fa-filter"></i>
            </div>
          </div>
          <div className={style["first-parallax-effect"]}>
            <span>Criminal</span>
          </div>
          <div className={style["consultancy-page-card-section"]}>
            <div className={style["criminal-section"]}>
             {/* Single Card */}
             <div
              className="card"
              id={style["consultancy-page-card"]}
            >
              {/* <i className="fas fa-user-circle" id={style["user-icon"]}></i> */}
        
              <img src={require("../../../Assets/LawyerPhotos/first.png")} id={style["first-image"]} />
             
              <div className="card-body">
                <h5 className="card-title">Harvey Spector</h5>
                <h6 className="card-subtitle mb-2 text-muted">Spector Lawyers</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <span
                  id={style["card-tags"]}
                  className="badge badge-pill badge-dark"
                >
                  Civil
                </span>
                <span
                  id={style["card-tags"]}
                  className="badge badge-pill badge-dark"
                >
                  Covid 19
                </span>
                <span
                  id={style["card-tags"]}
                  className="badge badge-pill badge-dark"
                >
                  Employment
                </span>
                <span
                  id={style["card-tags"]}
                  className="badge badge-pill badge-dark"
                >
                  Martial
                </span>
                <Link to="/lawyerprofile">
                  <button
                    id={style["consultancy-page-card-button"]}
                    type="button"
                    className="btn btn-outline-dark"
                  >
                    View Profile
                  </button>
                </Link>
              </div>
            </div>
            {/* Single Card */}
            {/* Single Card */}
            <div
              className="card"
            
              id={style["consultancy-page-card"]}
            >
              <img src={require("../../../Assets/LawyerPhotos/second.png")} id={style["first-image"]} />
              {/* <i className="fas fa-user-circle" id={style["user-icon"]}></i> */}
              <div className="card-body">
                <h5 className="card-title">Claud Gray</h5>
                <h6 className="card-subtitle mb-2 text-muted">Gilbert Law House</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <span
                  id={style["card-tags"]}
                  className="badge badge-pill badge-dark"
                >
                  Civil
                </span>
                <span
                  id={style["card-tags"]}
                  className="badge badge-pill badge-dark"
                >
                  Covid 19
                </span>
                <span
                  id={style["card-tags"]}
                  className="badge badge-pill badge-dark"
                >
                  Employment
                </span>
                <span
                  id={style["card-tags"]}
                  className="badge badge-pill badge-dark"
                >
                  Martial
                </span>
                <Link to="/lawyerprofile">
                  <button
                    id={style["consultancy-page-card-button"]}
                    type="button"
                    className="btn btn-outline-dark"
                  >
                    View Profile
                  </button>
                </Link>
              </div>
            </div>
            {/* Single Card */}
            {/* Single Card */}
            <div
              className="card"
             
              id={style["consultancy-page-card"]}
            >
              <img src={require("../../../Assets/LawyerPhotos/third.png")} id={style["first-image"]} />
              {/* <i className="fas fa-user-circle" id={style["user-icon"]}></i> */}
              <div className="card-body">
                <h5 className="card-title">James Gils</h5>
                <h6 className="card-subtitle mb-2 text-muted">Gilbert Law House</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <span
                  id={style["card-tags"]}
                  className="badge badge-pill badge-dark"
                >
                  Civil
                </span>
                <span
                  id={style["card-tags"]}
                  className="badge badge-pill badge-dark"
                >
                  Covid 19
                </span>
                <span
                  id={style["card-tags"]}
                  className="badge badge-pill badge-dark"
                >
                  Employment
                </span>
                <span
                  id={style["card-tags"]}
                  className="badge badge-pill badge-dark"
                >
                  Martial
                </span>
                <Link to="/lawyerprofile">
                  <button
                    id={style["consultancy-page-card-button"]}
                    type="button"
                    className="btn btn-outline-dark"
                  >
                    View Profile
                  </button>
                </Link>
              </div>
            </div>
            {/* Single Card */}
            {/* Single Card */}
            <div
              className="card"
            
              id={style["consultancy-page-card"]}
            >
              <img src={require("../../../Assets/LawyerPhotos/fourth.png")} id={style["first-image"]} />
              {/* <i className="fas fa-user-circle" id={style["user-icon"]}></i> */}
              <div className="card-body">
                <h5 className="card-title">Michael Brown</h5>
                <h6 className="card-subtitle mb-2 text-muted">Gilbert Law House</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <span
                  id={style["card-tags"]}
                  className="badge badge-pill badge-dark"
                >
                  Civil
                </span>
                <span
                  id={style["card-tags"]}
                  className="badge badge-pill badge-dark"
                >
                  Covid 19
                </span>
                <span
                  id={style["card-tags"]}
                  className="badge badge-pill badge-dark"
                >
                  Employment
                </span>
                <span
                  id={style["card-tags"]}
                  className="badge badge-pill badge-dark"
                >
                  Martial
                </span>
                <Link to="/lawyerprofile">
                  <button
                    id={style["consultancy-page-card-button"]}
                    type="button"
                    className="btn btn-outline-dark"
                  >
                    View Profile
                  </button>
                </Link>
              </div>
            </div>
            {/* Single Card */}
            {/* Single Card */}
            <div
              className="card"
              
              id={style["consultancy-page-card"]}
            >
              <i className="fas fa-user-circle" id={style["user-icon"]}></i>
              <div className="card-body">
                <h5 className="card-title">Lex Luthour</h5>
                <h6 className="card-subtitle mb-2 text-muted">Gilbert Law House</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <span
                  id={style["card-tags"]}
                  className="badge badge-pill badge-dark"
                >
                  Civil
                </span>
                <span
                  id={style["card-tags"]}
                  className="badge badge-pill badge-dark"
                >
                  Covid 19
                </span>
                <span
                  id={style["card-tags"]}
                  className="badge badge-pill badge-dark"
                >
                  Employment
                </span>
                <span
                  id={style["card-tags"]}
                  className="badge badge-pill badge-dark"
                >
                  Martial
                </span>
                <Link to="/lawyerprofile">
                  <button
                    id={style["consultancy-page-card-button"]}
                    type="button"
                    className="btn btn-outline-dark"
                  >
                    View Profile
                  </button>
                </Link>
              </div>
            </div>
            {/* Single Card */}
            {/* Single Card */}
            <div
              className="card"
             
              id={style["consultancy-page-card"]}
            >
              <i className="fas fa-user-circle" id={style["user-icon"]}></i>
              <div className="card-body">
                <h5 className="card-title">Jay Kapur</h5>
                <h6 className="card-subtitle mb-2 text-muted">Gilbert Law House</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <span
                  id={style["card-tags"]}
                  className="badge badge-pill badge-dark"
                >
                  Civil
                </span>
                <span
                  id={style["card-tags"]}
                  className="badge badge-pill badge-dark"
                >
                  Covid 19
                </span>
                <span
                  id={style["card-tags"]}
                  className="badge badge-pill badge-dark"
                >
                  Employment
                </span>
                <span
                  id={style["card-tags"]}
                  className="badge badge-pill badge-dark"
                >
                  Martial
                </span>
                <Link to="/lawyerprofile">
                  <button
                    id={style["consultancy-page-card-button"]}
                    type="button"
                    className="btn btn-outline-dark"
                  >
                    View Profile
                  </button>
                </Link>
              </div>
            </div>
            {/* Single Card */}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default consultancyPage;
