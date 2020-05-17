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
      mainQuesiton: "Has your employment been impacted by COVID-19",
      selectionCode: 0,
    };
  }

  optionSelected = (optionSelected) => {
    const htmlContent = optionSelected.target;
    const selectedOption = htmlContent.innerHTML;
    if (selectedOption === "No") {
        console.log("Hello");
        this.setState({
            optionSet: ["Are you entitled to job keeper payments"]
        })
    }
    if (selectedOption === "No") {
      this.setState({
        selectionCode: 1,
        optionSet: ["Are you entitled to job keeper payments"],
      });
    } else if (selectedOption === "Yes") {
      this.setState({
        selectionCode: 2,
        optionSet: ["You have beenstood down ?", "You have been terminated ?"],
      });
    } else if (selectedOption === "You have been terminated ?") {
      this.setState({
        selectionCode: 4,
        optionSet: ["Are you eligible for Job Seeker Payments ?"],
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
              mainQuestion={this.state.mainQuesiton}
              optionSelectedProp={this.optionSelected}
            />
          )}
          {this.state.selectionCode === 1 && (
            <FlowChartComponent
              optionSet={this.state.optionSet}
              mainQuestion={this.state.mainQuesiton}
              optionSelectedProp={this.optionSelected}
            />
          )}
          {this.state.selectionCode === 2 && (
            <FlowChartComponent
              optionSet={this.state.optionSet}
              mainQuestion={this.state.mainQuesiton}
              optionSelectedProp={this.optionSelected}
            />
          )}
          {this.state.selectionCode === 4 && (
            <FlowChartComponent
              optionSet={this.state.optionSet}
              mainQuestion={this.state.mainQuesiton}
              optionSelectedProp={this.optionSelected}
            />
          )}
        </div>
        <Footer />
      </>
    );
  }
}

export default Property;
