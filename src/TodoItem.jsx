import React from "react";

const TodoItem = ({ completed, id, title, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(ev) => toggleTodo(id, ev.target.checked)}
        />
        {title}
      </label>
      <button
        onClick={() => deleteTodo(id)}
        className="btn btn-danger"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
