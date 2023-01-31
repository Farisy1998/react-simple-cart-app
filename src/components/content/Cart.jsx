import CartItem from "./CartItem";

const Cart = ({ items }) => {
  const cartedItems = items.filter((item) => item.isCarted === true);
  const count = cartedItems.length;

  return (
    <div className="container">
      <div className="row justify-content-center mt-2 mb-2">
        <div className="col">
          <h3>
            Your Cart{"             "}
            <span className="badge badge-pill badge-primary">{count}</span>
          </h3>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-5">
          {count === 0 ? (
            <p className="text-center">Cart is empty</p>
          ) : (
            cartedItems.map((item) => <CartItem item={item} count={count} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
