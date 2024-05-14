import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(1);
  function handleAdd(e) {
    e.preventDefault();

    count < 10 && setCount(() => count + 1);
  }
  function handleMinus(e) {
    e.preventDefault();

    count > 0 && setCount(() => count - 1);
  }
  return (
    <div className="container">
      <h1>Counter App</h1>
      <form>
        <button onClick={handleAdd}>+</button>
        <input
          type="text"
          value={count}
          style={{ textAlign: "center" }}
        ></input>
        <button onClick={handleMinus}>-</button>
        <h3 style={{ textAlign: "center" }}>The count is {count}</h3>
      </form>
    </div>
  );
}
