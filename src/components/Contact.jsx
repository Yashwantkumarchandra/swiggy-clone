import { Component } from "react";
import UserContext from "../Utils/UserContext";

class Contact extends Component {
  render() {
    return (
      <div>
        <div>This is a Contact Class base Component</div>
        <UserContext.Consumer>
          {(user) => <h1>{user.loggedInUser}</h1>}
        </UserContext.Consumer>
        <form className="d-flex flex-column justify-content-center align-items-center">
          <h1>Contact Us</h1>
          <input
            type="text"
            placeholder="Your Name"
            className="form-control w-25"
          />
          <br />
          <input
            type="email"
            placeholder="Email"
            className="form-control w-25"
          />
          <button className="btn btn-success mt-2">Submit</button>
        </form>
      </div>
    );
  }
}

export default Contact;
