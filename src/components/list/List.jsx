import { Item } from "../item/Item";
import "./List.scss";

export const List = ({ todos, handleToggle, handleModalOpen }) => {
  return (
    <ul>
      {todos.length ?
        todos.map((item) => (
          <Item
            key={item.id}
            {...item}
            handleToggle={handleToggle}
            handleModalOpen={handleModalOpen}
          />
        )): <h2 className="text-black text-center">Todos not found!</h2>}
    </ul>
  );
};
