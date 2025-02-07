import {useState, useRef} from "react";
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content : "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content : "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content : "노래 연습하기",
    createdDate: new Date().getTime(),
  },
];

function App() {
  const idRef = useRef(3);
  const [todo, setTodo] = useState(mockTodo);

  // 추가 버튼 클리하면 호출할 함수 생성
  const onCreate = (content) => {
    const newItem = {
      id : idRef.current,
      content,
      isDone: false,
      createdDate : new Date().getTime(),
    };
    setTodo([newItem,...todo]);
    idRef.current +=1;
  };

  const onUpdate = (targetId) => {
    setTodo(
      todo.map((it) => {
        if (it.id === targetId) {  // 1️⃣ 클릭한 항목인지 확인
          return {
            ...it,                 // 2️⃣ 기존 내용 유지
            isDone: !it.isDone     // 3️⃣ isDone 값을 반전 (true ↔ false)
          };
        } else {
          return it;               // 4️⃣ 다른 항목은 변경 없이 그대로 반환
        }
      })
    );
  };
  
  return (
    <div className='App'>
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate}/>
    </div>
  );
}

export default App;
