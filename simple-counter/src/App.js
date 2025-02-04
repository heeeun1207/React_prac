import './App.css';
import { useRef, useEffect, useState } from 'react';
import Controller from './component/Controller';
import Viewer from './component/Viewer';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(""); 

  const handleSetCount = (value) => {
    setCount(count + value);
  };
  const handleChangeText = (e) => {
    setText(e.target.value);
  }
  // 현재 App 컴포넌트 페이지에 마운트 했는지 판단하는 변수 didMountRef를 Ref 객체로 생성한다. 초깃값으로 false 설정함.
  // Ref 객체는 돔 요소를 참조하는 것뿐만 아니라 컴포넌트의 변수로도 자주 활용됨. 
  const didMountRef = useRef(false);

  useEffect(() => {
    // 컴포넌트 마운트 시점에는 콘솔을 출력하지 않도록 조건문 추가
    if(!didMountRef.current) {
      didMountRef.current = true;
      return;
    }else{
    console.log("컴포넌트 업데이트!");
    }
  });

  // 마운트 제어하기
  // 의존성 배열에는 빈 배열을 전달한다. 
  // useEffect에서 빈 배열을 전달하면 컴포넌트의 마운트 시점에만 콜뱀함수를 실행함.
  useEffect(() => {
    console.log("컴포넌트 마운트");
  }, []);

  return (
  <div className='App'>
    <h1>Simple Counter</h1>
    <section>
    {/* 입력폼 임시로 생성하기 */}
      <input value={text} onChange={handleChangeText} />
    </section>
    <section>
      <Viewer count={count} /> 
    </section>
    <section>
      <Controller handleSetCount={handleSetCount }/>
    </section>
  </div>
  );
};

export default App;
