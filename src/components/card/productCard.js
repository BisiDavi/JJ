import React from "react";

const ProductCard = (props) => {
  return (
    <div>
      <span className="product-category">{props.product_category}</span>
      <img alt="" src="" />
      <span className="countImage">{props.countImage}</span>
      <span className="favourite_icon">{props.favourite}</span>
      <div className="product_info">
        <span>
          <p>{props.product_name}</p>
          <p>{props.product_color}</p>
        </span>
        <p>{props.product_price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
