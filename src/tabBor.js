import React, { Component } from "react";

export default class TabBor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [365, 45, 67, 23, 45, 89],
    };
  }
  render() {
    const { titles } = this.props;
    return (
      <div>
        Where there's a will, there's a way
        <div>
          {this.state.arr.map((val, index) => {
            return <span> {val} </span>;
          })}
        </div>
        <div>
          {titles.map((val, index) => {
            return <span onClick={(e) => this.itemClick(index)}> {val} </span>;
          })}
        </div>
      </div>
    );
  }
  itemClick(index) {
    this.setState({
      currentIndex: index,
    });
    console.log(index);
    this.props.itemClick(index);
  }

  // finish mount
  componentDidMount() {
    console.log("componentDidMount() 挂载");
    console.log(this.props.itemClick);
  }
}
