import { useEffect, useState } from "react";
import { List } from "../list/List";
import { Modal } from "../modal/Modal";
import { EditModalInner } from "../edit-modal-inner/EditModalInner";
import { ModalInner } from "../modal-inner/ModalInner";
import { TodoForm } from "../todo-form/TodoForm";
import { v4 as uuidv4 } from "uuid";
import "./Todos.scss";

export const Todo = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos"))
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const [isOpen, setIsOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [itemId, setItemId] = useState(null);

  const setTodosStorage = () => {
    localStorage.setItem(
      "todos",
      JSON.stringify(todos) ? JSON.stringify(todos) : "[]"
    );
  };

  useEffect(setTodosStorage, [todos]);

  const handleToggle = (id) => {
    const tempTodos = [...todos];
    const index = todos.findIndex((item) => item.id === id);

    if (typeof index !== "number") return;
    tempTodos[index].isDone = !tempTodos[index].isDone;
    setTodos(tempTodos);
    setTodosStorage();
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

  const handleAddTodo = (item) => {
    const itemData = {
      title: item,
      isDone: false,
      id: uuidv4(),
    };

    const newTodos = [...todos, itemData];
    setTodos(newTodos);
  };

  const handleTodoEdit = (id, title) => {
    const tempTodos = [...todos];
    const index = todos.findIndex((item) => item.id === id);

    tempTodos[index].title = title;
    handleModalClose(false);
    setTodosStorage();
  };

  return (
    <>
      <TodoForm handleAddTodo={handleAddTodo} />
      <p className="text-black text-center mt-2">
        {todos.length}
        {todos.length >= 2 ? " todos" : " todo"}
      </p>
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
          todos={todos}
          editModal={editModal}
        />
      </Modal>
    </>
  );
};
