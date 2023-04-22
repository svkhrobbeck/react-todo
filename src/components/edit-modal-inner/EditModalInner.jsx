import React, { useRef, useState } from "react";

export const EditModalInner = ({
  itemId,
  handleTodoEdit,
  handleModalClose,
  todos,
  editModal,
}) => {
  const title = useRef(null);

  if (editModal) {
    const item = todos.find((item) => item.id === itemId)?.title;
    title.current.value = item;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.current.value.trim()) handleTodoEdit(itemId, title.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-control mb-3"
        type="text"
        placeholder="Edit todo..."
        ref={title}
      />
      <div className="d-flex justify-content-between">
        <button className="btn btn-primary">Save</button>
        <button
          className="btn btn-success"
          type="button"
          onClick={() => handleModalClose(false)}
        >
          close
        </button>
      </div>
    </form>
  );
};
