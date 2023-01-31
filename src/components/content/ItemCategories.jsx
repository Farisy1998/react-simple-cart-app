const ItemCategories = ({ selectedCategory, handleCategorySelect }) => {
  const categories = ["Fashion", "Electronics", "Furniture", "Appliances"];

  return (
    <div className="container">
      <div className="row jusify-content-center mt-2 mb-2">
        <div className="col">
          <select
            className="form-control"
            value={selectedCategory}
            onChange={handleCategorySelect}
          >
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ItemCategories;
