import React, { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  console.log("App created");
  function incrementCount() {
    setCount(count + 1);
  }
  const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];
  return (
    <>
      <h1 className="card"> Parent count = {count}</h1>
      <div style={{ outline: "1px solid green" }}>
        <h3> Child component</h3>
        <Button
          onClickHandle={incrementCount}
          count={count}
          label="Increment1"
        ></Button>
        <Button
          onClickHandle={incrementCount}
          count={count}
          label="Increment2"
        ></Button>
      </div>
      {/* <Button>Increment</Button> */}
    </>
  );
}
export default App;
function Button({ label, onClickHandle, count }) {
  return (
    <button onClick={onClickHandle}>
      {label} + {count}
    </button>
  );
}
