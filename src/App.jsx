import "./App.css";
import Useref from "./components/Useref";
import Stopwatch from "./components/Stopwatch";

import {
  increment,
  decrement,
} from "./components/features/counters/counterSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector((state) => {
    return state.counter.value;
  });
  const despatcher = useDispatch();
  function handleincrement() {
    despatcher(increment());
  }
  function handledecrement() {
    despatcher(decrement());
  }
  return (
    <div className="container">
      <button onClick={handleincrement}>+ </button>
      <p>Count:{count}</p>
      <button onClick={handledecrement}>-</button>
      <Useref />
      <Stopwatch />
    </div>
  );
}

export default App;
