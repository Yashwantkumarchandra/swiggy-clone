import { useDispatch } from "react-redux";
import { IMG_URL } from "../Utils/Constants";
import { addItems } from "../Utils/cartSlice";

const MenuItems = ({ menuHighlights, imageDefault }) => {
  const menuContent = menuHighlights;

  const dispatch = useDispatch();

  const handleAddItems = (items) => {
    //dispatch an action
    dispatch(addItems(items));
  };

  return (
    <div className="row">
      <div className="col-lg-6 offset-lg-3">
        {menuContent.map((item, index) => (
          <div
            className="accordion accordion-flush "
            id="accordionFlushExample"
            key={item.card.card.id}
          >
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fs-4"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#flush-collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`#flush-collapse${index}`}
                >
                  {item.card.card.title} ({item.card.card.itemCards.length})
                </button>
              </h2>
              <div
                id={`flush-collapse${index}`}
                className="accordion-collapse collapse card-body accordion-body"
                data-bs-parent="#accordionFlushExample"
              >
                {item.card.card.itemCards.map((items) => (
                  <div className="card mb-2 shadow" key={items.card.info.id}>
                    <div className="row card-body">
                      <div className="col-md-10 d-flex ">
                        {items.card.info.imageId === undefined ? (
                          <img
                            src={IMG_URL + imageDefault}
                            className="img-fluid rounded-start "
                            style={{ width: "8rem", height: "8rem" }}
                          />
                        ) : (
                          <img
                            src={IMG_URL + items.card.info.imageId}
                            className="img-fluid rounded-start "
                            style={{ width: "8rem", height: "8rem" }}
                          />
                        )}
                        <div className="accordion-body card-title">
                          {items.card.info.name}
                          <div className="card-text">
                            ₹
                            {items.card.info.price / 100 ||
                              items.card.info.defaultPrice / 100}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2 card-text p-4 ">
                        <button
                          className="btn btn-success"
                          onClick={() => handleAddItems(items)}
                        >
                          ADD
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
