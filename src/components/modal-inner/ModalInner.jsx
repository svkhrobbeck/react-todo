import React from "react";

export const ModalInner = ({ itemId, handleDelete, handleModalClose }) => {
  return (
    <>
      <p className="text-black">Do you want delete this todo?</p>
      <div className="d-flex justify-content-between">
        <button
          className="btn btn-success"
          onClick={() => handleModalClose(true)}
        >
          close
        </button>
        <button
          className="btn btn-primary"
          onClick={() => handleDelete(itemId)}
        >
          Yes
        </button>
      </div>
    </>
  );
};
