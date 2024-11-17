import React from 'react';
import { products } from "../Data";
import { useCart } from "../components/CartContext";  

const Products = () => {
  const { addToCart } = useCart();  

  const handleAddToCart = (product) => {
    addToCart(product); 
  };

  return (
    <div className="container my-4">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 col-lg-4 mb-4" key={product.id}>
            <div className="card h-100 position-relative">
              <img
                src={product.imgUrl}
                className="card-img-top"
                alt={product.productName}
              />
              <div className="card-body">
                <h5 className="card-title">{product.productName}</h5>
                <p className="card-text">
                  <strong>⭐⭐⭐⭐⭐</strong>
                  <br />
                  <strong>${product.price}</strong>
                </p>
                <button
                  className="btn rounded-circle position-absolute"
                  style={{
                    right: "10px",
                    bottom: "10px",
                    width: "50px",  
                    height: "50px",  
                    fontSize: "30px",  
                    color: "#003366", 
                    border: "none",  
                    display: "flex",
                    justifyContent: "center",  
                    alignItems: "center", 
                    padding: "0", 
                  }}
                  onClick={() => handleAddToCart(product)}  
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
