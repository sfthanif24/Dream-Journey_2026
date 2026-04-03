import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleSubtract = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  const counterStyle = {
    border: "2px solid yellow",
  };
  return (
    <div style={counterStyle}>
      <h3>Count: {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubtract}>Subtract</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
