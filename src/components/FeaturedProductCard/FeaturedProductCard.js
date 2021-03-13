import React from "react";
import "./FeaturedProductCard.scss";
function FeaturedProductCard({ imgUrl }) {
  return (
    <div className="Featured-Product-card-container">
      <img src={imgUrl} alt="featured-product-card-img" />
    </div>
  );
}

export default FeaturedProductCard;
