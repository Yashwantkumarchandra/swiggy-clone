import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "default",
        avatar_url: "https//dummy data",
      },
    };

    // console.log("Child constructor");
  }

  async componentDidMount() {
    // console.log("Child did mount");
    // const data = await fetch(
    //   "  https://api.github.com/users/Yashwantkumarchandra"
    // );
    // const json = await data.json();
    // console.log(json);
    // this.setState({
    //   userInfo: json,
    // });
    // this.timer = setInterval(() => {
    //   console.log("component did mount");
    // }, 1000);
  }

  //   componentWillUnmount() {
  //     clearInterval(this.timer);
  //     console.log("componentwill unmount");
  //   }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    // console.log(" child render ");

    return (
      <div className="card">
        <p className="card-text">this is a class base component</p>

        <h1 className="card-title">Name:{name}</h1>
        <h4 className="card-text">Location : {location}</h4>
        <img src={avatar_url} alt="" />
      </div>
    );
  }
}

export default UserClass;

{
  /* <h1>Count: {this.state.count}</h1>
        <h1>count2:{this.state.count2}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Increase Count
        </button> */
}
