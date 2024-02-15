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
    <div>
      <div className="row">
        <div className="col-lg-8 offset-lg-2  row mb-2 shadow">
          <div className="col-sm-10 d-flex">
            <img
              src={IMG_URL + cloudinaryImageId}
              className="img-fluid rounded-start"
              alt="pic"
              style={{ width: "18rem", height: "18rem" }}
            />
            <div className="m-5">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{cuisines.join(",")}</p>
              <p className="card-text">{costForTwoMessage}</p>
            </div>
          </div>
          <div className="col-sm-2 mt-5">
            <p className="card-text">
              {avgRatingString}
              <span className="bi bi-star-fill text-success"></span>
            </p>
            <p className="card-text"> {totalRatingsString}</p>
          </div>
        </div>
      </div>
      <MenuItems
        menuHighlights={menuItemsFilter}
        imageDefault={cloudinaryImageId}
      />
    </div>
  );
};

export default RestaurentMenu;
