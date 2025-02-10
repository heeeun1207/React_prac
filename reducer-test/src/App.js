import {useReducer} from 'react';

function App() {
  function countReducer(oldCount,action){
    if(action === "UP") {
        return oldCount + 1;
    } else if(action === "DOWN") {
        return oldCount -1
    } else if(action === "RESET") {
      return 0;
    }
  }
  const [count, countdispatch] = useReducer(countReducer, 0);
  function down() {
    countdispatch("DOWN");
  }
  function reset() {
    countdispatch("RESET");
  }
  function up() {
    countdispatch("UP");
  }
  return (
    <div className="App">
      <input type="button" value="-" onClick={down} />
      <input type="button" value="0" onClick={reset} />
      <input type="button" value="+" onClick={up} />
      <span>{count}</span>
    </div>
  );
}

export default App;
