import { Item } from "../item/Item";
import "./List.scss";

export const List = ({ todos, handleToggle, handleModalOpen }) => {
  return (
    <ul>
      {todos &&
        todos.map((item) => (
          <Item
            key={item.id}
            {...item}
            handleToggle={handleToggle}
            handleModalOpen={handleModalOpen}
          />
        ))}
    </ul>
  );
};
