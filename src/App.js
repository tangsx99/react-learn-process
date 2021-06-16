import React, { Component } from "react";
import PropTypes from "prop-types";
import TabControl from "./TabControl";
import TabBor from "./tabBor";
import Children from "./children";
import Context from "./context";

class Cpn extends Component {
  render() {
    return <h2>Cpn</h2>;
  }
}

// class 子组件
class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { name, age, height } = this.props;
    return (
      <div>
        <h2>class 子组件</h2>
        <p>展示父组件传递过来的数据：{name + " " + age + " " + height}</p>
      </div>
    );
  }
}

// 子组件数值校验
Child.propTypes = {
  name: PropTypes.string,
};
// 子组件设定默认值
Child.defaultProps = {
  age: 2543,
};

// function 子组件
function Child1(props) {
  const { name, age, height } = props;

  return (
    <div>
      <h2>function的组件</h2>
      <p>展示父组件传递过来的数据: {name + " " + age + " " + height}</p>
    </div>
  );
}

function CounterButton(props) {
  const { operator, btnClick } = props;
  return (
    <div>
      <button onClick={btnClick}>{operator}</button>
    </div>
  );
}

// 组件
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Where there's a will, there's a way",
      counter: 0,
      currentTitle: "流行",
    };
    this.titles = ["流行", "新款", "精选"];
    console.log("constructor() 构造器 调用");
  }
  itemClick(index) {
    this.setState({
      currentTitle: this.titles[index],
    });
  }

  render() {
    console.log("render() 渲染 调用");
    return (
      <div>
        <TabBor
          titles={this.titles}
          itemClick={(index) => this.itemClick(index)}
        ></TabBor>
        <TabControl
          titles={this.titles}
          itemClick={(index) => this.itemClick(index)}
        />
        <h2>{this.state.currentTitle}</h2>
        <Children></Children>
        <Context></Context>
        {/* <TabControl
          titles={this.titles}
          itemClick={(index) => this.itemClick(index)}
        />
        <h2>{this.state.currentTitle}</h2>
        <h3>{this.state.message}</h3>
        <h4>当前数据：{this.state.counter}</h4>
        {this.state.counter <= 5 && <Cpn />}
        <CounterButton
          operator="+1"
          btnClick={(e) => this.changeCounter(1)}
        ></CounterButton>
        <CounterButton
          operator="-1"
          btnClick={(e) => this.changeCounter(-1)}
        ></CounterButton>
        <Child name="pdd" age="110" height="3.14"></Child>
        <Child1 name="ooxx" age="110" height="1.21"></Child1> */}
      </div>
    );
  }

  changeCounter(count) {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  // finish mount
  componentDidMount() {
    console.log("componentDidMount() 挂载");
    console.log(this.itemClick);
  }

  // finish update
  componentDidUpdate() {
    console.log("componentDidUpdate() 更新");
  }

  // will unmount
  componentWillUnmount() {
    console.log("componentWillUnmount() 卸载");
  }
}
