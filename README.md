// const [listRestaurent,setListRestaurent] = useState([])

// const fetchData = async()=>{
// const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4699254&lng=78.4311401&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
// const jsonData = await data.json();
// console.log(jsonData);
// setTopRated(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurents[0].info)
// setTopRated(jsonData.data.cards[1])
// console.log("hello");
// console.log(topRated);

// }

# data bundling

-chunking
-code splitting
-lazy loading
-on Demand loading
-Dynamic
-logical separation of Bundler

# Higher Order Function

topRated.data.Promoted ?
<RestaurentCardPromoted allRestaurent={topRated} />

# It is a function that takes a Component after Enhance it, it'll return a component

eg:
export const withPromotedLabel = (RestaurentCard) => {
return (props) => {
return (

<div>
<label>Promoted</label>
<RestaurentCard {...props} />
</div>
);
};
};

# class base component

componentDidMount
// componentDidMount() {
// console.log("parent did mount");
// // uses of componentdidmount is to make an API call
// }

{
/\_ <h1>Count: {this.state.count}</h1>

<h1>count2:{this.state.count2}</h1>
<button
onClick={() => {
this.setState({
count: this.state.count + 1,
count2: this.state.count2 + 1,
});
}} >
Increase Count
</button> 
}

# componentWillMount

// componentWillUnmount() {
// clearInterval(this.timer);
// console.log("componentwill unmount");
// }

api call

# async componentDidMount() {

// console.log("Child did mount");
// const data = await fetch(
// " https://api.github.com/users/Yashwantkumarchandra"
// );
// const json = await data.json();
// console.log(json);
// this.setState({
// userInfo: json,
// });
// this.timer = setInterval(() => {
// console.log("component did mount");
// }, 1000);
}

# About us Using Class base component

import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
constructor(props) {
super(props);
}

render() {
return (
<div>
<h1>This is About class component</h1>
<UserClass />
</div>
);
}
}

export default About;
