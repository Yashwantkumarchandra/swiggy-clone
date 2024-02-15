import { useDispatch } from "react-redux";
import { IMG_URL } from "../Utils/Constants";
import { removeItems } from "../Utils/cartSlice";

const CartItems = ({ cartItems }) => {
  const dispatch = useDispatch();

  const handleDeleteOne = (id) => {
    dispatch(removeItems(id));
  };

  return (
    <div className="container-fluid">
      {cartItems.map((item) => (
        <div className="row mb-2 " key={item.card.info.id}>
          <div className="col-lg-8 offset-lg-2 col-sm-12 card">
            <div className="row shadow">
              <div className="col-lg-3 col-md-4">
                <img
                  src={IMG_URL + item.card.info.imageId}
                  className="img-fluid rounded-start p-1"
                  style={{ width: "9rem", height: "9rem" }}
                />
              </div>
              <div className="col-lg-7 col-md-4">
                <h5 className="pt-3">{item.card.info.name}</h5>
                <p className="">
                  ₹
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </p>
                <div className="mb-2">
                  <button className="btn btn-outline-primary me-1">-</button>
                  <button></button>
                  <button className="btn btn-outline-primary">+</button>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 align-self-center">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleDeleteOne(item.card.info.id)}
                >
                  <span className="bi bi-trash3"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
