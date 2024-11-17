import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { discoutProducts } from "../Data";

const ProductDetail = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const product = discoutProducts.find((p) => p.id === id);


  if (!product) {
    return (
      <div className="container my-4">
        <h3>Product not found</h3>
        <button onClick={() => navigate("/")} className="btn btn-primary">
          Go Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.imgUrl} 
            alt={product.productName}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h3>{product.productName}</h3>
          <div>
            ⭐⭐⭐⭐⭐ {product.avgRating} rating
          </div>
          <p> <strong>${product.price}</strong>    category:{product.category}</p>
           <p>{product.shortDesc}</p>
           <button
                  className="btn"
                  style={{
                    color:"#fff",
                    background:"#003366"
                  }}
                >
                 Add To Cart
                </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
