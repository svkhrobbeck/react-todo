import { Modal } from "../modal/Modal";
import { Todo } from "../todo/Todo";
import "./App.scss";

const App = () => {
  return (
    <div className="app container">
      <Todo />
    </div>
  );
};

export default App;
