import React from "react";

const App = () => {
  function handleClick() {
    alert("Button clicked!");
  }

  function handleClick3() {
    alert("Button clicked 3");
  }

  const handleClick5 = (num) => {
    const number = num + 5;
    alert(`The number is ${number}`);
  };
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={function handleClick2() {
          alert("Button clicked 2");
        }}
      >
        Click me 2
      </button>
      <button onClick={handleClick3}>Click me 3</button>
      <button
        onClick={() => {
          alert("Button clicked 4");
        }}
      >
        Click me 4
      </button>

      <button onClick={() => handleClick5(5)}>Click me 5</button>
    </div>
  );
};

export default App;
