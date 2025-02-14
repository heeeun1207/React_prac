import { useMemo, useState } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem.js";

const TodoList = ({todo, onUpdate, onDelete}) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ""
    ? todo
    : todo.filter((it) => it.content.toLowerCase().includes(search.toLowerCase())
    );
  }; 

  const analyzeTodo = useMemo(() => {
    console.log("analyzeTodo 함수 호출 확인")
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return{
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo]);
  const { totalCount, doneCount, notDoneCount } = analyzeTodo;
  //! useMemo는 함수가 아닌 값을 반환하므로 analyzeTodo에는 값이 저장된다.
  //! 따라서 구조분해 할당의 대상을 기존의 analyzeTodo()가 아닌 analyzeTodo로 변경한다. 

  return (
    <div className="TodoList">
      <h4>Todo List ☘</h4>
      <div>
        <div>총개수: {totalCount}</div>
        <div>완료된 할 일: {doneCount}</div>
        <div>아직 완료하지 못한 할 일: {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch} 
        className="searchbar" 
        placeholder="검색어를 입력하세요" 
        />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem 
          key={it.id}{...it} 
          onUpdate={onUpdate}
          onDelete={onDelete} 
          />
        ))}
      </div>
    </div>
  );
};
export default TodoList;

