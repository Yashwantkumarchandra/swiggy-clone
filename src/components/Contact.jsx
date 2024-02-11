import { Component } from "react";
import UserContext from "../Utils/UserContext";

class Contact extends Component {
  render() {
    return (
      <div>
        <div>This is a Contact Class base Component</div>
        <UserContext.Consumer>
          {(loggedInUser) => {
            <h1>{loggedInUser}</h1>;
          }}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default Contact;
