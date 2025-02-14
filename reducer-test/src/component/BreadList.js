import React, { useReducer } from "react";

const daejeonBread = [
  "튀김소보로",
  "부추빵",
  "명란바게트",
  "팡도르",
  "슈톨렌",
  "공룡알빵",
  "비스킷",
  "몽블랑",
  "소금빵",
  "크루아상",
  "바게트",
  "치아바타",
  "깜빠뉴",
  "식빵",
  "스콘"
];


const initialState = { breads: daejeonBread };

function breadReducer(state, action) {
  switch (action.type) {
    case "ADD_BREAD":
      return { ...state, breads: [...state.breads, action.payload] };
    case "REMOVE_BREAD":
      return {
        ...state,
        breads: state.breads.filter((bread) => bread !== action.payload)
      };
    default:
      return state;
  }
}

function BreadList() {
  const [state, dispatch] = useReducer(breadReducer, initialState);
  const { breads } = state;

  const addBread = () => {
    const newBread = prompt("추가할 빵 이름을 입력하세요:");
    if (newBread) {
      dispatch({ type: "ADD_BREAD", payload: newBread });
    }
  };

  const removeBread = (bread) => {
    dispatch({ type: "REMOVE_BREAD", payload: bread });
  };

  return (
    <div>
      <h2>대전 빵 리스트</h2>
      <ul>
        {breads.map((bread, index) => (
          <li key={index}>
            {bread} <button onClick={() => removeBread(bread)}>삭제</button>
          </li>
        ))}
      </ul>
      <button onClick={addBread}>빵 추가</button>
    </div>
  );
}

export default BreadList;
