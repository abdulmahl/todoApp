import React from "react";
import { useState } from "react";

const NewTodoForm = ({ onSubmit }) => {

  const [newItem, setNewItem] = useState("");

  function handleSubmit(ev) {
    ev.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(ev) => setNewItem(ev.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
};

export default NewTodoForm;
