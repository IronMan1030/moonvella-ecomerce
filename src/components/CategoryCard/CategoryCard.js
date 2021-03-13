import React from "react";
import "./CategoryCard.scss";

function CategoryCard({ imgUrl, detail }) {
  return (
    <div className="category-card-container">
      <div className="category-card">
        <img src={imgUrl} alt="cate-img" />
      </div>
      <div className="category-card-detail">
        <h3>{detail}</h3>
      </div>
    </div>
  );
}

export default CategoryCard;
