const CartItem = ({ item }) => {
  return (
    <div key={item.id} className="card border mt-3 mb-3">
      <div className="card-body">
        <div className="car-title">
          <h5 className="text-left">{item.itemName}</h5>
        </div>
        <div className="card-text">
          <h6 className="text-left">Category: {item.category}</h6>
          <h6 className="text-left">Price: {item.price}</h6>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
