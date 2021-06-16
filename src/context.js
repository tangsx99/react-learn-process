import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <UserContext.Provider value={{ nickname: "why", level: 99 }}>
          <Profile />
        </UserContext.Provider>
        <h2>其他内容</h2>
      </div>
    );
  }
}

// create context and set default value
// default value effect when profile is not as a component for xxx.Provider
const UserContext = React.createContext({ nickname: "默认", level: -1 });

// create ProfileHeader component
class ProfileHeader extends Component {
  render() {
    return (
      <div>
        <h2>name: {this.context.nickname}</h2>
        <h2>rank： {this.context.level}</h2>
      </div>
    );
  }
}

// can use this.context to visit value, and visit it at any time
ProfileHeader.contextType = UserContext;

// create Profile component
class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileHeader />
        <ul>
          <li>设置1</li>
          <li>设置2</li>
          <li>设置3</li>
          <li>设置4</li>
          <li>设置5</li>
        </ul>
      </div>
    );
  }
}
