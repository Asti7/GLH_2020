import React, { Component } from "react";
import style from "./FlowchartComponent.module.scss";

class FlowchartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.optionSet,
      question: props.mainQuestion,
    };
  }

  render() {
    return (
      <>
        <div className={style["flowchart-component-main-div"]}>
          <div className={style["question"]}>
            {this.state.question}
          </div>
          <div className={style["options-section"]}>
            {this.state.options.map((singleOption, i) => {
              return (
                <div
                  className="card"
                  id={style["single-option"]}
                  onClick={(singleOption) => {
                    this.props.optionSelectedProp(singleOption);
                  }}
                  key={i}
                >
                  <div className="card-body" id={style["body"]}>
                    {singleOption}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default FlowchartComponent;
