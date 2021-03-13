import React from "react";
import ProductFilter from "../FilterPage/ProductFilter";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { CURRENCY } from "../../../settings/constants";
import "./ProductResult.scss";

function ProductResult() {
  const items = [
    {
      name: "test1",
      unit: "2lb",
      image: "https://www.sandlundhossain.com/wp-content/uploads/2019/08/IMG_2367-300x300.jpg",
      price: "134",
      salePrice: "443",
      discountInPercent: "33",
    },
    {
      name: "test2",
      unit: "3pc(s)",
      image:
        "https://secure.img1-fg.wfcdn.com/im/66950895/resize-h160-w160%5Ecompr-r85/4626/46264570/Senoia+19%2522+Armchair.jpg",
      price: "123",
      salePrice: "777",
      discountInPercent: "",
    },
    {
      name: "test3",
      unit: "3pc(s)",
      image:
        "https://secure.img1-fg.wfcdn.com/im/35572872/resize-h160-w160%5Ecompr-r85/8646/86464902/Louisiana+Barrel+Chair+and+Ottoman.jpg",
      price: "123",
      salePrice: "777",
      discountInPercent: "",
    },
    {
      name: "test4",
      unit: "3pc(s)",
      image:
        "https://secure.img1-fg.wfcdn.com/im/29636399/resize-h160-w160%5Ecompr-r85/9079/90791039/Vilonia+Butterfly+Chair.jpg",
      price: "123",
      salePrice: "777",
      discountInPercent: "",
    },
  ];
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
