import { IMG_URL } from "../Utils/Constants";
import Shimmer from "./Shimmer";
import MenuItems from "./MenuItems";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../Utils/useRestaurentMenu";

const RestaurentMenu = () => {
  const { restId } = useParams();

  const resInfo = useRestaurentMenu(restId);

  if (resInfo === null) return <Shimmer />;
  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRatingString,
    cloudinaryImageId,
    totalRatingsString,
  } = resInfo?.data?.data?.cards[0]?.card?.card?.info;

  const menuItems =
    resInfo?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  menuItemsFilter = menuItems.filter(
    (type) =>
      type.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="card">
      <div className="row  shadow-lg">
        <div className="col-lg-8 offset-lg-1 row ">
          <div className="col-md-10  d-flex">
            <div className="">
              <img
                src={IMG_URL + cloudinaryImageId}
                className="img-fluid rounded-start "
                alt="..."
                style={{ width: "18rem", height: "18rem" }}
              />
            </div>
            <div className="">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{cuisines.join(",")}</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    {costForTwoMessage}
                  </small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <p className="card-text">
              {avgRatingString}
              <span className="bi bi-star-fill text-success"> </span>
            </p>
            <p className="card-text"> {totalRatingsString}</p>
          </div>
        </div>
      </div>
      <MenuItems menuHighlights={menuItemsFilter} />
    </div>
  );
};

export default RestaurentMenu;
