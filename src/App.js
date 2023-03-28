import "./App.css";
import { Counter } from "./component/Counter";
import { useDispatch } from "react-redux";
import { increment, decrement, reset } from "./redux/counterSlice";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Counter />
      <div className="btn1">
        <button className="inc" onClick={() => dispatch(increment())}>
          +
        </button>
        <button className="dec" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
      <div className="btn-2">
        <button className="reset" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
