import React from "react";
import Zoom from "react-img-zoom";
import itemsDescriptions from "../../../object/descriptionItems";
import ArrayProductDescription from "../../../components/ArrayProductDescription/ArrayProductDescription";

function DescriptionPage() {
  const location = window.location.pathname;

  // I'll create components to them
  const ItemsUnavailableMessage = () => {
    return (
      <div>
        <h5 style={{ color: "#B12704" }}>Currently Unavailable</h5>
        <p>We don't know when or if this item will be back in stock.</p>
      </div>
    );
  };

  const ItemsvailableMessage = () => {
    return (
      <div>
        <span>List Price: $45.89</span>
        <br />
        <span>
          Price: $39.99 + $20.34 Shipping & Import Fees Deposit to France
          Details
        </span>
        <br />
        <span>You Save: $5.90 (13%)</span>
      </div>
    );
  };
  return (
    <div>
      {itemsDescriptions.map((item, index) => {
        // I Must to change it into regex in order to have only name inside the object
        if (location.includes(item.url)) {
          return (
            <div className="container">
              <div className="d-flex">
                <div className="img-description" style={{ marginRight: 40 }}>
                  <Zoom
                    img={item.image}
                    zoomScale={2}
                    width={600}
                    height={500}
                    transitionTime={0.5}
                  />
                  {item.imgDescriptions.map((img, index) => {
                    return (
                      <span>
                        <img
                          key={index}
                          src={img.url}
                          style={{
                            width: 120,
                            border: "1px solid #eee",
                            marginRight: 15,
                          }}
                        />
                      </span>
                    );
                  })}
                </div>

                <div className="left-content">
                  <div className="title">
                    <h2>{item.nameDescription}</h2>
                  </div>
                  <div className="user-store">
                    <a href={item.storeLink} target="_blank">
                      Visit the {item.storeName} Store
                    </a>
                  </div>
                  <hr />
                  {item.itemsDisponibility >= 1 ? (
                    <ItemsvailableMessage />
                  ) : (
                    <ItemsUnavailableMessage />
                  )}
                  <hr />
                  <ArrayProductDescription
                    brand={item.brand}
                    color={item.color}
                    material={item.material}
                    itemDimensions={item.itemDimensions}
                    itemWeight={item.itemWeight}
                  />
                  <hr />

                  <div className="items-about">
                    <h6>About this item</h6>
                    <ul>
                      <li>
                        Versatile curtain rod is ideal for the living room,
                        bedroom, dining room, kitchen, or home office and is
                        recommended for light and medium weight curtains
                      </li>
                      <li>
                        5/8 inch diameter telescoping curtain rod adjusts from
                        48-86 inches to accommodate your window
                      </li>
                      <li>
                        Decorative curtain rod, mounting hardware, and brackets
                        are included (brackets project 3 inches from the wall)
                      </li>
                      <li>
                        In Black finish to compliment your window treatments and
                        home décor
                      </li>
                      <li>Metal rod with resin finials</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default DescriptionPage;
