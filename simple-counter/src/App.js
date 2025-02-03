import './App.css';
import { useState } from 'react';
import Controller from './component/Controller';
import Viewer from './component/Viewer';

function App() {
  const [count, setCount] = useState(0);
  const handleSetCount = (value) => {
    setCount(count + value);
  };

  return (
  <div className='App'>
    <h1>Simple Counter</h1>
    <section>
      {/* Viewer 컴포넌트에 state 변수 값을 props 로 전달함. */}
      <Viewer count={count} /> 
    </section>
    <section>
      {/* Controller 컴포넌트에 state 값을 변경하는 함수 setCount 를 props 로 전달함.  */}
      <Controller handleSetCount={handleSetCount }/>
    </section>
  </div>
  );
};

export default App;
