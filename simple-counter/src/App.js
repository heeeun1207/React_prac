import './App.css';
import { useEffect, useState } from 'react';
import Controller from './component/Controller';
import Viewer from './component/Viewer';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(""); 
  const handleSetCount = (value) => {
    setCount(count + value);
  };
  // onChange 이벤트 헨들러 함수 handleChangeText 만들기
  const handleChangeText = (e) => {
    setText(e.target.value);
  }
  
  useEffect(() => {
    console.log("count 업데이트: ", text, count);
  }, [count, text]);

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
