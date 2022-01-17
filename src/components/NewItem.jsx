import React, { useState } from "react";
import { observer, inject } from "mobx-react";

const NewItem = inject("inventory")(
  observer((props) => {
    const { inventory } = props;
    const emptyInputs = { name: "", quantity: "", price: "" };
    let [inputs, setInputs] = useState(emptyInputs);

    const handleChange = function (event) {
      let newInput = { ...inputs };
      newInput[event.target.className] = event.target.value;
      setInputs(newInput);
    };

    const handleAddItem = function () {
      inventory.addItem(inputs.name, inputs.price, inputs.quantity);
      setInputs(emptyInputs);
    };

    return (
      <div className="new-item">
        <input
          type="text"
          className="name"
          onChange={handleChange}
          placeholder="name"
          value={inputs.name}
        />
        <input
          type="number"
          className="quantity"
          onChange={handleChange}
          placeholder="quantity"
          value={inputs.quantity}
        />
        <input
          type="number"
          className="price"
          onChange={handleChange}
          placeholder="price"
          value={inputs.price}
        />
        <button onClick={handleAddItem} id="add-item">
          Add
        </button>
      </div>
    );
  })
);

export default NewItem;
