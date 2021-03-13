import React from "react";
import "./ProductFilter.scss";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import Checkbox from "../../../components/CheckBox/CheckBox";
// import RadioField from "../../../components/Radio/Radio";
import { Radio, RadioGroup } from "baseui/radio";

function ProductFilter() {
  const handleCheckbox = (event) => {
    const { name } = event.currentTarget;
    // if (!checkedId.includes(parseInt(name))) {
    //   setCheckedId((prevState) => [...prevState, parseInt(name)]);
    // } else {
    //   setCheckedId((prevState) => prevState.filter((id) => id !== parseInt(name)));
    // }
  };
  return (
    <div className="filter-wrapper">
      <div className="filter-header">
        <p>Current Matches(600,800)</p>
        <hr />
      </div>
      <div className="filter-content">
        <div className="filter-category">
          <label>Categories</label>
          <ul className="list-group">
            <li className="list-item">
              <Link to=""> All Categories(250)</Link>
            </li>
            <li className="list-item">
              <Link to=""> phone(52)</Link>
            </li>
            <li className="list-item">
              <Link to=""> camera(57)</Link>
            </li>
            <li className="list-item">
              <Link to=""> camera(57)</Link>
            </li>
            <li className="list-item">
              <Link to=""> camera(57)</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className="filter-price">
          <label>Price</label>
          <div className="d-flex justify-content-between">
            <Input type="text" placeholder="Min" />
            <p className="ml-1 mr-1 mt-1">-</p>
            <Input type="text" placeholder="Max" />
            <Button
              type="button"
              overrides={{
                BaseButton: {
                  style: () => ({
                    borderTopLeftRadius: "3px",
                    borderTopRightRadius: "3px",
                    borderBottomRightRadius: "3px",
                    borderBottomLeftRadius: "3px",
                    marginLeft: "10px",
                  }),
                },
              }}
            >
              Update
            </Button>
          </div>
        </div>
        <hr />
        <div className="filter-brand">
          <label>Brand</label>
          <ul className="list-group">
            <li className="list-item">
              <Checkbox
                type="checkbox"
                name="aa"
                checked={false}
                onChange={handleCheckbox}
                // overrides={{
                //   Checkmark: {
                //     style: {
                //       borderTopWidth: "2px",
                //       borderRightWidth: "2px",
                //       borderBottomWidth: "2px",
                //       borderLeftWidth: "2px",
                //       borderTopLeftRadius: "4px",
                //       borderTopRightRadius: "4px",
                //       borderBottomRightRadius: "4px",
                //       borderBottomLeftRadius: "4px",
                //     },
                //   },
                // }}
              >
                Nike
              </Checkbox>
            </li>
            <li className="list-item">
              <Checkbox>Nike</Checkbox>
            </li>
            <li className="list-item">
              <Checkbox>Nike</Checkbox>
            </li>
            <li className="list-item">
              <Checkbox>Nike</Checkbox>
            </li>
          </ul>
        </div>
        <hr />
        <div className="filter-sort-by">
          <label>Sort By</label>
          <ul className="list-group">
            <li className="list-item">
              <RadioGroup name="overrides">
                <Radio value="1">Best Match</Radio>
                <Radio value="1">Lowest Price</Radio>
                <Radio value="1">Highest Price</Radio>
              </RadioGroup>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductFilter;
