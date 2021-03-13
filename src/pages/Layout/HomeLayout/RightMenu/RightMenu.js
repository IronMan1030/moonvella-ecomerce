import React from "react";
import Button from "../../../../components/Button/Button";
import CartImg from "../../../../assets/image/cart.png";
import { REGISTER } from "../../../../settings/constants";
import "./RightMenu.scss";

export const RightMenu = () => {
  const handleClickJoin = () => {
    window.location.href = REGISTER;
  };
  return (
    <>
      <Button
        onClick={handleClickJoin}
        type="button"
        overrides={{
          BaseButton: {
            style: () => ({
              width: "5%",
              height: "40px",
              borderTopLeftRadius: "3px",
              borderTopRightRadius: "3px",
              borderBottomRightRadius: "3px",
              borderBottomLeftRadius: "3px",
            }),
          },
        }}
      >
        Join
      </Button>
      <div className="nav-cart-count-container">
        <span className="nav-cart-count">0</span>
        <span>
          <img src={CartImg} alt="cart-img" />
        </span>
      </div>
      <span className="nav-cart-title">cart</span>
    </>
  );
};
