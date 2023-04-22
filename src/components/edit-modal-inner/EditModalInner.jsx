import React, { useRef } from "react";

export const EditModalInner = ({
  itemId,
  handleTodoEdit,
  handleModalClose,
}) => {
  const title = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.current.value) return;

    handleTodoEdit(itemId, title.current.value);
    e.target.reset();
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
