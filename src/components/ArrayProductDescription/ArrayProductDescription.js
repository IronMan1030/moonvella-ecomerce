import React from "react";
import "./ArrayProductDescription.scss";

function ArrayProductDescription({
  brand,
  color,
  material,
  itemDimensions,
  itemWeight,
}) {
  return (
    <table>
      <tbody>
        <tr>
          <td className="a-span3">
            <span>Brand</span>
          </td>
          <td>
            <span>{brand}</span>
          </td>
        </tr>
        <tr>
          <td className="a-span3">
            <span>Color</span>
          </td>
          <td>
            <span>{color}</span>
          </td>
        </tr>
        <tr>
          <td className="a-span3">
            <span>Material</span>
          </td>
          <td>
            <span>{material}</span>
          </td>
        </tr>
        <tr>
          <td className="a-span3">
            <span>Item Dimensions</span>
          </td>
          <td>
            <span>{itemDimensions}</span>
          </td>
        </tr>
        <tr>
          <td className="a-span3">
            <span>Item Weight</span>
          </td>
          <td>
            <span>{itemWeight}</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ArrayProductDescription;
