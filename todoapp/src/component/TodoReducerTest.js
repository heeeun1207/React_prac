import { useEffect } from "react";

const mockTodo = [
  { id: 0, isDone: false, content: "React 공부하기", createdDate: new Date().getTime() },
  { id: 1, isDone: false, content: "빨래 널기", createdDate: new Date().getTime() },
  { id: 2, isDone: false, content: "노래 연습하기", createdDate: new Date().getTime() }
];

const createTodoItem = (state, action) => {
  console.log("CREATE 실행");
  return [action.newItem, ...state];
};

const updateTodoItem = (state, action) => {
  console.log(`UPDATE 실행 (ID: ${action.targetId})`);
  return state.map((it) =>
    it.id === action.targetId ? { ...it, isDone: !it.isDone } : it
  );
};

const deleteTodoItem = (state, action) => {
  console.log(`DELETE 실행 (ID: ${action.targetId})`);
  return state.filter((it) => it.id !== action.targetId);
};

const cleanDoldoli = (state, action) => {
  console.log("CLEAN 실행 (돌돌이 청소)");
  return state.map((it) =>
    !it.isDone ? { ...it, content: it.content + " [돌돌이 청소 완료]" } : it
  );
};

const reducer = (state, action) => {
  console.log("액션 실행: ", action);
  
  switch (action.type) {
    case "CREATE":
      return createTodoItem(state, action);
    case "UPDATE":
      return updateTodoItem(state, action);
    case "DELETE":
      return deleteTodoItem(state, action);
    case "CLEAN":
      return cleanDoldoli(state, action);
    default:
      console.warn("알 수 없는 액션 타입:", action.type);
      return state;
  }
};

let idRef = 3;

const TodoReducerTest = () => {
  useEffect(() => {
    console.group("Step 1: 초기 상태");
    let state = mockTodo.slice();
    console.table(state);
    console.groupEnd();

    console.group("Step 2: CREATE (새로운 할 일 추가)");
    state = reducer(state, {
      type: "CREATE",
      newItem: {
        id: idRef,
        content: "새로운 할 일 추가하기",
        isDone: false,
        createdDate: new Date().getTime()
      }
    });
    idRef += 1;
    console.table(state);
    console.groupEnd();

    console.group("Step 3: UPDATE (ID: 1 완료 처리)");
    state = reducer(state, { type: "UPDATE", targetId: 1 });
    console.table(state);
    console.groupEnd();

    console.group("Step 4: DELETE (ID: 0 삭제)");
    state = reducer(state, { type: "DELETE", targetId: 0 });
    console.table(state);
    console.groupEnd();

    console.group("Step 5: CLEAN (돌돌이 청소 적용)");
    state = reducer(state, { type: "CLEAN" });
    console.table(state);
    console.groupEnd();
  }, []);

  return <div>콘솔 확인</div>;
};

export default TodoReducerTest;
