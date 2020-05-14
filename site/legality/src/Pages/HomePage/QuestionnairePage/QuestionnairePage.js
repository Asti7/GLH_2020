import React, { Component } from "react";
import style from "./QuestionnairePage.module.scss";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import {Link} from "react-router-dom";

class QuestionnairePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoriesList: [
        "Property",
        "Criminal",
        "Civil",
        "Covid 19",
        "Financial",
        "Intellecutal Property",
        "Terrorism",
        "Martial",
      ],
      filteredList: [
        "Property",
        "Criminal",
        "Civil",
        "Covid 19",
        "Financial",
        "Intellecutal Property",
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
            Please search and select the categorie(s) of your case:
          </div>
          <div className={style["search-bar-functionality"]}>
            <div
              class="input-group input-group-lg"
              id={style["search-bar-field-selector"]}
            >
              <input
                type="text"
                class="form-control"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Search"
                id={style["search-bar-field"]}
                onChange={this.processSearchBarInput}
              />
            </div>
            <i id={style["filter-icon"]} class="fas fa-filter"></i>
          </div>
          <div className={style["questionnaire-page-card-section"]}>
            { this.state.filteredList.length > 0 ?
            (this.state.filteredList.map((categoryName, i) => (
              <Link to="property">
              <div
                class="card"
                style={{ width: "18rem" }}
                id={style["card-selector"]}
                key={i}
              >
                <div class="card-body">
                  <h5 class="card-title">{categoryName}</h5>

                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              </Link>
            ))):(
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
