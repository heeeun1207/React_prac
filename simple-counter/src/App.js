import './App.css';
import { useEffect, useState } from 'react';
import Controller from './component/Controller';
import Viewer from './component/Viewer';

function App() {
  const [count, setCount] = useState(0);
  const handleSetCount = (value) => {
    setCount(count + value);
  };
  
  useEffect(() => {
    console.log("count 업데이트: ", count);
  }, [count]);

  return (
  <div className='App'>
    <h1>Simple Counter</h1>
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
