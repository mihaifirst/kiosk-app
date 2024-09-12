import React from "react";
import "./ProductModal.css";

const ProductModal = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;
  const ingredients = product.ingredients || "Ingredients not available";

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{product.title}</h2>
        <img src={product.img} alt={product.title} className="modal-image" />
        <p>Weight: {product.weight}</p>
        <p>Price: {product.price} lei</p>
        <p>Ingredients: {ingredients} </p>
        <div className="modal-info">
          <button onClick={onClose} className="back">
            Back
          </button>
          <button className="add">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
