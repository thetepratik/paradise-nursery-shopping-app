import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
removeItem,
updateQuantity,
} from "../redux/CartSlice";

function CartItem() {
const dispatch = useDispatch();

const cartItems = useSelector(
(state) => state.cart.items
);

const handleIncrease = (item) => {
dispatch(
updateQuantity({
id: item.id,
quantity: item.quantity + 1,
})
);
};

const handleDecrease = (item) => {
dispatch(
updateQuantity({
id: item.id,
quantity: item.quantity - 1,
})
);
};

const handleDelete = (id) => {
dispatch(removeItem(id));
};

const totalAmount = cartItems.reduce(
(total, item) => total + item.price * item.quantity,
0
);

const totalItems = cartItems.reduce(
(total, item) => total + item.quantity,
0
);

return ( <div className="cart-page">
{/* Navbar */} <nav className="navbar"> <div className="navbar-logo"> <Link to="/">Paradise Nursery</Link> </div>

```
    <div className="navbar-links">
      <Link to="/">Home</Link>
      <Link to="/plants">Plants</Link>
      <Link to="/cart">
        🛒 Cart ({totalItems})
      </Link>
    </div>
  </nav>

  {/* Shopping Cart */}
  <main className="cart-container">
    <h1>Shopping Cart</h1>

    {cartItems.length === 0 ? (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <p>
          Add some beautiful plants to your shopping cart.
        </p>

        <Link
          to="/plants"
          className="continue-shopping-btn"
        >
          Continue Shopping
        </Link>
      </div>
    ) : (
      <>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              {/* Plant Thumbnail */}
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />

              {/* Plant Information */}
              <div className="cart-item-details">
                <h2>{item.name}</h2>

                <p>
                  Unit Price: ${item.price.toFixed(2)}
                </p>

                {/* Quantity Controls */}
                <div className="quantity-controls">
                  <button
                    onClick={() =>
                      handleDecrease(item)
                    }
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      handleIncrease(item)
                    }
                  >
                    +
                  </button>
                </div>

                {/* Individual Plant Total */}
                <p className="item-total">
                  Total: $
                  {(item.price * item.quantity).toFixed(2)}
                </p>

                {/* Delete Button */}
                <button
                  onClick={() =>
                    handleDelete(item.id)
                  }
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="cart-summary">
          <h2>Cart Summary</h2>

          <p>
            Total Items: <strong>{totalItems}</strong>
          </p>

          <h2>
            Total Amount: $
            {totalAmount.toFixed(2)}
          </h2>

          {/* Checkout */}
          <button
            className="checkout-btn"
            onClick={() =>
              alert("Checkout Coming Soon!")
            }
          >
            Checkout
          </button>

          {/* Continue Shopping */}
          <Link
            to="/plants"
            className="continue-shopping-btn"
          >
            Continue Shopping
          </Link>
        </div>
      </>
    )}
  </main>
</div>
```

);
}

export default CartItem;
