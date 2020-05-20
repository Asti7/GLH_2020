import React, { Component } from "react";
import Header from "../../../../Components/Header/Header";
import Footer from "../../../../Components/Footer/Footer";
import style from "./Property.module.scss";
import FlowChartComponent from "../../../../Components/FlowchartComponent/FlowchartComponent";

class Property extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionSet: ["Yes", "No"],
      mainQuestion: "Has your employment been impacted by COVID-19",
      selectionCode: 0,
      finalConclusion: "",
    };
  }

  optionSelected = (optionSelected) => {
    const htmlContent = optionSelected.target;
    const selectedOption = htmlContent.innerHTML;
    if (selectedOption === "Yes" && this.state.selectionCode === 0) {
      this.setState({
        selectionCode: 1,
        optionSet: ["You have beenstood down ?", "You have been terminated ?"],
        mainQuestion: "Which applies to you ?",
      });
    } else if (
      selectedOption === "You have been terminated ?" &&
      this.state.selectionCode === 1
    ) {
      this.setState({
        selectionCode: 2,
        optionSet: ["Yes", "No"],
        mainQuestion:
          "Are you between the age of 22 and your age-pension age ?",
      });
    } else if (selectedOption === "Yes" && this.state.selectionCode === 2) {
      this.setState({
        selectionCode: 3,
        optionSet: ["Yes", "No"],
        mainQuestion:
          "Are you currently livinig in Australia and happen to be a permanent resident or a citizen ?",
      });
    } else if (selectedOption === "Yes" && this.state.selectionCode === 3) {
      this.setState({
        selectionCode: 4,
        optionSet: [
          "Do you have a partner who receives a pension ?",
          "Do you have a partner who does not receive a pension ?",
          "Do you have a partner who does not receive an income and your income is less than $104",
          "Are you 60 or older, and principal care of a dependent child. You must have been on a payment from us for at least 9 months continuosly",
          "Are you single, with a dependent child but not its principle carer ?",
          "Are you a single no mutual obligation requirements ?",
          "Are you a single, principle carer of a dependent child with mutual obligations ?",
          "Are you single and happen to be 60 year or older, on a payment from us for at least 9 months continuosly ?",
          "Are you single, with no children ?",
        ],
        mainQuestion: "Which describes you the best ?",
      });
    } else if (
      selectedOption ===
        "Do you have a partner who does not receive a pension ?" &&
      this.state.selectionCode === 4
    ) {
      this.setState({
        selectionCode: 5,
        optionSet: ["Yes", "No"],
        mainQuestion: "Is you income more than $993.50 ?",
      });
    } else if (selectedOption === "Yes" && this.state.selectionCode === 5) {
      this.setState({
        selectionCode: 6,
        optionSet: [
          "Were you terminated for performance",
          "Did you resign",
          "Were you stood down",
          "Were you terminated for misconduct",
        ],
        mainQuestion:
          "If you are unemployed, then what describes you the best ?",
      });
    } else if (
      selectedOption === "Did you resign" &&
      this.state.selectionCode === 6
    ) {
      this.setState({
        selectionCode: 7,
        finalConclusion:
          "You will only be eligible after 8 weeks from your resignation.",
      });
    }
  };

  render() {
    return (
      <>
        <Header />
        <div className={style["property-page-inner-div"]}>
          <div className={style["property-page-heading"]}>Employment</div>
          {this.state.selectionCode === 0 && (
            <FlowChartComponent
              optionSet={this.state.optionSet}
              mainQuestion={this.state.mainQuestion}
              optionSelectedProp={this.optionSelected}
            />
          )}
          {this.state.selectionCode === 1 && (
            <FlowChartComponent
              optionSet={this.state.optionSet}
              mainQuestion={this.state.mainQuestion}
              optionSelectedProp={this.optionSelected}
            />
          )}
          {this.state.selectionCode === 2 && (
            <FlowChartComponent
              optionSet={this.state.optionSet}
              mainQuestion={this.state.mainQuestion}
              optionSelectedProp={this.optionSelected}
            />
          )}
          {this.state.selectionCode === 3 && (
            <FlowChartComponent
              optionSet={this.state.optionSet}
              mainQuestion={this.state.mainQuestion}
              optionSelectedProp={this.optionSelected}
            />
          )}
          {this.state.selectionCode === 4 && (
            <FlowChartComponent
              optionSet={this.state.optionSet}
              mainQuestion={this.state.mainQuestion}
              optionSelectedProp={this.optionSelected}
            />
          )}
          {this.state.selectionCode === 5 && (
            <FlowChartComponent
              optionSet={this.state.optionSet}
              mainQuestion={this.state.mainQuestion}
              optionSelectedProp={this.optionSelected}
            />
          )}
          {this.state.selectionCode === 6 && (
            <FlowChartComponent
              optionSet={this.state.optionSet}
              mainQuestion={this.state.mainQuestion}
              optionSelectedProp={this.optionSelected}
            />
          )}
          {this.state.selectionCode === 7 && (
            <h1 className={style["final-conclusion-div"]}>{this.state.finalConclusion}</h1>
          )}
        </div>
        <Footer />
      </>
    );
  }
}

export default Property;
