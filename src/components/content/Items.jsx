import getItems from "../../services/Items";
import ItemCategories from "./ItemCategories";

const Items = ({
  items,
  selectedCategory,
  handleCategorySelect,
  handleItemCardClick,
}) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6 m-2">
          <ItemCategories
            selectedCategory={selectedCategory}
            handleCategorySelect={handleCategorySelect}
          />
          {items
            .filter((item) => item.category === selectedCategory)
            .map((item) => (
              <div
                key={item.id}
                id={item.id}
                className={item.isCarted ? "card pop mt-3 mb-3" : "card border mt-3 mb-3"}
                style={{ cursor: "pointer" }}
                onClick={handleItemCardClick}
              >
                <div className="card-body" id={item.id}>
                  <div className="card-title" id={item.id}>
                    <h4 className="text-left" id={item.id}>
                      {item.itemName}
                    </h4>
                  </div>
                  <div className="card-text" id={item.id}>
                    <h6 id={item.id} className="text-left">Price: {item.price}</h6>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
