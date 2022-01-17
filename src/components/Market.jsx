import React from "react";
import { observer, inject } from "mobx-react";
import Item from "./Item";
import NewItem from "./NewItem";

const Market = inject("inventory")(
  observer((props) => {
    const { inventory } = props;

    return (
      <div className="Market">
        <NewItem />
        {inventory.items.map((item) => (
          <Item key={item.name} item={item} />
        ))}
      </div>
    );
  })
);

export default Market;
