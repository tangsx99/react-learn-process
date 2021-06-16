import React, { Component } from "react";

export default class TabControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  render() {
    const { titles } = this.props;
    const { currentIndex } = this.state;
    return (
      <div className="tab-control">
        {titles.map((val, index) => {
          return (
            <div className="tab-item" onClick={(e) => this.itemClick(index)}>
              <span
                className={"title " + (index === currentIndex ? "active" : "")}
              >
                {val}
              </span>
            </div>
          );
        })}
      </div>
    );
  }
  itemClick(index) {
    this.setState(
      {
        currentIndex: index,
      },
      () => {
        console.log(this.state.currentIndex);
      }
    );
    this.props.itemClick(index);
  }
}
