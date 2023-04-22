import { useRef, useState } from "react";
import { List } from "../list/List";
import { v4 as uuidv4 } from "uuid";
import { Modal } from "../modal/Modal";
import "./Todos.scss";
import { EditModalInner } from "../edit-modal-inner/EditModalInner";
import { ModalInner } from "../modal-inner/ModalInner";

export const Todo = () => {
  const item = useRef(null);

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos"))
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const [isOpen, setIsOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [itemId, setItemId] = useState(null);

  localStorage.setItem(
    "todos",
    JSON.stringify(todos) ? JSON.stringify(todos) : "[]"
  );

  const handleToggle = (id) => {
    const tempTodos = [...todos];
    const index = todos.findIndex((item) => item.id === id);

    if (typeof index !== "number") return;
    tempTodos[index].isDone = !tempTodos[index].isDone;
    setTodos(tempTodos);
    localStorage.setItem(
      "todos",
      JSON.stringify(todos) ? JSON.stringify(todos) : "[]"
    );
  };

  const handleModalOpen = (id, which) => {
    setItemId(id);
    if (which) {
      setIsOpen(true);
    } else {
      setEditModal(true);
    }
  };

  const handleModalClose = (which) => {
    if (which) {
      setIsOpen(false);
    } else {
      setEditModal(false);
    }
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
    handleModalClose(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!item.current.value) return;

    const itemData = {
      title: item.current.value,
      isDone: false,
      id: uuidv4(),
    };

    const newTodos = [...todos, itemData];
    setTodos(newTodos);
    e.target.reset();
  };

  const handleTodoEdit = (id, title) => {
    const tempTodos = [...todos];
    const index = todos.findIndex((item) => item.id === id);

    tempTodos[index].title = title;
    handleModalClose(false);
  };

  return (
    <>
      <form className="pt-5" onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="Enter a new todo"
          ref={item}
        />
      </form>
      <p className="text-black text-center mt-2">{todos.length}</p>
      <List
        todos={todos}
        handleToggle={handleToggle}
        handleModalOpen={handleModalOpen}
      />
      <Modal isOpen={isOpen}>
        <ModalInner
          itemId={itemId}
          handleDelete={handleDelete}
          handleModalClose={handleModalClose}
        />
      </Modal>
      <Modal isOpen={editModal}>
        <EditModalInner
          itemId={itemId}
          handleTodoEdit={handleTodoEdit}
          handleModalClose={handleModalClose}
        />
      </Modal>
    </>
  );
};
