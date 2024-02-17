import { useContext, useEffect, useState } from "react";
import RestaurentCard, { withPromotedLabel } from "./RestaurentCard";
import axios from "axios";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";

const Body = () => {
  const [topRated, setTopRated] = useState([]);

  const { loggedInUser, setUserInfo } = useContext(UserContext);

  const swiggyApi = async () => {
    const dataFetch = await axios.get(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4699254&lng=78.4311401&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    setTopRated(
      dataFetch?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    swiggyApi();
  }, []);

  const filter = () => {
    const filteredList = topRated.filter((res) => res.info.avgRating >= 4.5);
    setTopRated(filteredList);
  };

  const hadnleChange = (e) => {
    if (e.target.value === "") {
      return swiggyApi();
    }
    const filteredRestaurent = topRated.filter((res) =>
      res.info.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    filteredRestaurent.length === 0
      ? setTopRated(topRated)
      : setTopRated(filteredRestaurent);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>OOps! Look like you are offline</h1>;

  return topRated.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="d-flex flex-row justify-content-center m-4">
        <input
          className="form-control w-auto"
          placeholder="Search"
          type="text"
          onChange={hadnleChange}
          data-testid="searchInput"
        />
        <button onClick={swiggyApi} className=" btn btn-success ms-2 me-2">
          All Restaurent
        </button>
        <button className="search btn btn-warning" onClick={filter}>
          Top rated Restaurent
        </button>
        <div>
          <input
            type="text"
            className="form-control w-auto m-1"
            onChange={(e) => setUserInfo(e.target.value)}
            value={loggedInUser}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <RestaurentCard allRestaurent={topRated} />
      </div>
    </div>
  );
};

export default Body;
