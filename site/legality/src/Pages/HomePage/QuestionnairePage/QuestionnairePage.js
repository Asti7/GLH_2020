import React, { Component } from "react";
import style from "./QuestionnairePage.module.scss";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import { Link } from "react-router-dom";

class QuestionnairePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoriesList: [
        "Employment",
        "Criminal",
        "Civil",
        "Covid 19",
        "Financial",
        "Intellectual Property",
        "Terrorism",
        "Martial",
      ],
      filteredList: [
        "Employment",
        "Criminal",
        "Civil",
        "Covid 19",
        "Financial",
        "Intellectual Property",
        "Terrorism",
        "Martial",
      ],
    };
  }

  // Card Generator
  processSearchBarInput = (event) => {
    const userSearchBarInput = event.target.value.toUpperCase();
    console.log(userSearchBarInput);
    if (userSearchBarInput === "") {
      this.setState({
        filteredList: this.state.categoriesList,
      });
    } else {
      const categoriesListUpperCase = this.state.categoriesList.map(
        (singleCategory) => {
          return singleCategory.toUpperCase();
        }
      );
      this.setState({
        filteredList: categoriesListUpperCase.filter((currentCategory) => {
          return currentCategory.includes(userSearchBarInput);
        }),
      });
    }
  };

  render() {
    return (
      <>
        <Header />
        <div className={style["questionnaire-page-main-div"]}>
          <div className={style["questionnaire-page-heading-div"]}>
            Legal Accessibility
          </div>
          <div className={style["questionnaire-page-subheading-div"]}>
          What area of law do you need assistance with?
          </div>
          <div className={style["search-bar-functionality"]}>
            <div
              className="input-group input-group-lg"
              id={style["search-bar-field-selector"]}
            >
              <input
                type="text"
                className="form-control"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Search"
                id={style["search-bar-field"]}
                onChange={this.processSearchBarInput}
              />
            </div>
          </div>
          <div className={style["questionnaire-page-card-section"]}>
            {this.state.filteredList.length > 0 ? (
              this.state.filteredList.map((category, i) => (
                <Link to="property" key={i}>
                  <div
                    className="card"
                    style={{ width: "18rem" }}
                    id={style["card-selector"]}
                  >
                    <div className="card-body">
                      <h5 className="card-title">{category}</h5>

                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className={style["empty-search-result-div"]}>
                No Results Found
              </div>
            )}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default QuestionnairePage;
