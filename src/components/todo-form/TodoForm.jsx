import React, { useRef } from "react";

export const TodoForm = ({ handleAddTodo }) => {
  const item = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item.current.value.trim()) return;

    handleAddTodo(item.current.value);
    e.target.reset();
  };

  return (
    <form className="d-flex pt-5" onSubmit={handleSubmit}>
      <input
        className="form-control"
        type="text"
        placeholder="Enter a new todo"
        ref={item}
      />
      <button className="ms-2 btn flex-shrink-0 btn-danger" type="submit">
        Add Todo
      </button>
    </form>
  );
};
