import React from "react";
import ProductFilter from "../FilterPage/ProductFilter";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { CURRENCY } from "../../../settings/constants";
import items from "../../../object/items";
import "./ProductResult.scss";

function ProductResult() {
  return (
    <div className="product-result-wrapper mt-5">
      {/* <div className="container"> */}
      <div className="row">
        <div className="col-md-3">
          <ProductFilter />
        </div>
        <div className="col-md-9 mt-5">
          <div className="row">
            {items.map((item, index) => {
              return (
                <div className="col-md-4 mb-3" key={index}>
                  <ProductCard
                    descriptionPath={`/description/${item.url}`}
                    title={item.name}
                    weight={item.unit}
                    image={item.image}
                    currency={CURRENCY}
                    price={item.price}
                    salePrice={item.salePrice}
                    discountInPercent={item.discountInPercent}
                    data={item}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default ProductResult;
