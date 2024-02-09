import { IMG_URL } from "../Utils/Constants";

const MenuItems = (props) => {
  const menuContent = props.menuHighlights;
  console.log(menuContent);

  return (
    <div className="card">
      <div className="row ">
        <div className="col-lg-6 offset-lg-3">
          {menuContent.map((item, index) => (
            <div
              className="accordion accordion-flush card card-header"
              id={`accordion-${index}`}
              key={item.card.card.id}
            >
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed fs-4"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapse-${index}`}
                    aria-expanded="false"
                    aria-controls={`#flush-collapse-${index}`}
                  >
                    {item.card.card.title}
                  </button>
                </h2>
                <div
                  id={`flush-collapse-${index}`}
                  className="accordion-collapse collapse card-body"
                  data-bs-parent={`#accordion-${index}`}
                >
                  {item.card.card.itemCards.map((items) => (
                    <div className="card" key={items.card.info.id}>
                      <div className="row card-body">
                        <div className="col-10 d-flex ">
                          <img
                            src={IMG_URL + items.card.info.imageId}
                            className="img-fluid rounded-start "
                            style={{ width: "8rem", height: "8rem" }}
                          />
                          <div className="accordion-body card-title">
                            {items.card.info.name}
                            <div className="card-text">
                              ₹
                              {items.card.info.price / 100 ||
                                items.card.info.defaultPrice / 100}
                            </div>
                          </div>
                        </div>
                        <div className="col-2 card-text">
                          <button className="btn btn-success">ADD</button>
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
    </div>
  );
};

export default MenuItems;
