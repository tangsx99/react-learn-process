import React, { Component } from "react";

class NavBar extends Component {
  render() {
    const { leftSlot, centerSlot, rightSlot } = this.props;
    return (
      //   <div className="nav-bar">
      //     <div className="item left">{this.props.children[0]}</div>
      //     <div className="item center">{this.props.children[1]}</div>
      //     <div className="item right">{this.props.children[2]}</div>
      //   </div>
      <div className="nav-bar">
        <div className="item left">{leftSlot}</div>
        <div className="item center">{centerSlot}</div>
        <div className="item right">{rightSlot}</div>
      </div>
    );
  }
}

export default class App extends Component {
  render() {
    const navLeft = <div>返回</div>;
    const navCenter = <div>购物街</div>;
    const navRight = <div>更多</div>;
    return (
      <div>
        <NavBar
          leftSlot={navLeft}
          centerSlot={navCenter}
          rightSlot={navRight}
        ></NavBar>
      </div>
    );
  }

  // finish mount
  componentDidMount() {
    console.log("componentDidMount() 挂载");
    console.log(this.props);
  }
}
