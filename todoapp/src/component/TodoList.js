import "./TodoList.css";
import TodoItem from "./TodoItem.js";

const TodoList = ({todo}) => {
  return (
    <div className="TodoList">
      <h4>Todo List ☘</h4>
      <input className="searchbar" placeholder="검색어를 입력하세요" />
      <div className="list_wrapper">
        {todo.map((it) => (
          <div>{it.content}</div>
        ))}
      </div>
    </div>
  );
};
export default TodoList;

