import { Link } from "react-router-dom";
import { IMG_URL } from "../Utils/Constants";

const RestaurentCard = (props) => {
  const resData = props.allRestaurent;

  return (
    <div className="cardContainer row   container">
      {resData.map((restarurent) => (
        <div
          className="card card-hover col-md-3 col-sm-12 "
          key={restarurent.info.id}
        >
          <div className="card-body list-group  " key={restarurent.info.id}>
            <img
              src={IMG_URL + restarurent.info.cloudinaryImageId}
              alt="FoodsPic"
              className="card-img  h-50"
            />
            <h4 className=" list-group-item card-body  card-title">
              {restarurent.info.name}
            </h4>
            <p className="card-text list-group-item">
              {restarurent.info.cuisines.length > 3
                ? restarurent.info.cuisines.splice(0, 3).join(", ")
                : restarurent.info.cuisines.join(", ")}
            </p>
            <p className="card-text list-group-item ">
              {restarurent.info.avgRating}{" "}
              <span className="bi bi-star-fill text-success"></span>
            </p>
            <p className="card-text  list-group-item">
              {restarurent.info.costForTwo}
            </p>
            <p className="card-text list-group-item">
              {restarurent.info.sla.slaString}
            </p>
            <Link
              to={"/restaurent/" + restarurent.info.id}
              className="btn btn-outline-success m-auto "
            >
              Order Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurentCard;
