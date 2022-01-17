import React from "react";
import { observer, inject } from "mobx-react";
import "./../styles/item.css";

const Item = inject("inventory")(
  observer((props) => {
    const { inventory, item } = props;

    const handleBuy = function () {
      inventory.buyItem(item.name);
    };

    const handleChangePrice = function () {
      const price = prompt("Enter new price");
      inventory.changePrice(item.name, price);
    };

    return (
      <li className="item">
        <span onDoubleClick={handleChangePrice}>
          {item.quantity} {item.name} available at ${item.price} per item
        </span>
        <button onClick={handleBuy}>Buy now</button>
      </li>
    );
  })
);

export default Item;
