import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constuctor");
  }

  //   componentDidMount() {
  //     console.log("parent did mount");
  //     // uses of componentdidmount is to make an API call
  //   }

  render() {
    // console.log("parent render");
    return (
      <div>
        <h1>This is about class component</h1>
        <UserClass name={"Yashwant (class)"} location={"hyderabad"} />
      </div>
    );
  }
}

export default About;

// import UserFucntional from "./UserFunctional";

// const About = () => {
//   return (
//     <div>
//       {/* <UserFucntional name={"Yashwant (functional)"} /> */}
//       <UserClass name={"Yashwant (class)"} location={"hyderabad"} />
//     </div>
//   );
// };

// export default About;
