import "./Item.scss";

export const Item = ({ title, isDone, id, handleToggle, handleModalOpen }) => {
  return (
    <li className="text-white d-flex bg-dark mb-2 rounded-1 py-1 px-2">
      <label className="me-auto flex-grow-1">
        <input
          className="form-check-input"
          type="checkbox"
          checked={isDone}
          onChange={() => handleToggle(id)}
        />
        <span className="ms-2">{title}</span>
      </label>
      <img
        className="me-3"
        src="edit.svg"
        alt="edit icon"
        onClick={() => handleModalOpen(id, false)}
      />
      <img
        src="trash.svg"
        alt="trash icon"
        onClick={() => handleModalOpen(id, true)}
      />
    </li>
  );
};
