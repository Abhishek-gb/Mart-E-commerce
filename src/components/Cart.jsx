// src/components/Cart.js
import React from "react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // Calculate total amount
  const totalAmount = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div className="container my-4">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="row">
          {cart.map((product) => (
            <div className="col-md-4 col-lg-4 mb-4" key={product.id}>
              <div className="card h-100">
                <img
                  src={product.imgUrl}
                  className="card-img-top"
                  alt={product.productName}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.productName}</h5>
                  <p className="card-text">
                    <strong>${product.price}</strong>
                  </p>
                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => updateQuantity(product.id, product.quantity - 1)}
                      disabled={product.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="mx-2">{product.quantity}</span>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => updateQuantity(product.id, product.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="btn btn-danger mt-3"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-4">
        <h4>Total Amount: ${totalAmount.toFixed(2)}</h4>
      </div>
    </div>
  );
};

export default Cart;
