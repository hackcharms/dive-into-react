import React, { useEffect, useRef, useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  const [double, setDouble] = useState(0);
  const inputElement = useRef(null);
  console.log("App created");
  useEffect(() => {
    console.log("count changed");
    setDouble(count * 2);
  }, [count]);
  useEffect(() => {
    console.log("useEffect without dependency");
    return () => {
      console.log();
    };
  }, []);
  function incrementCount() {
    setCount(count + 1);
    // console.log("inputElement", inputElement.current);
    // inputElement.current.focus();
  }
  const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];
  return (
    <>
      <div className="card">
        <h1> Parent count = {count}</h1>
        <h1> Parent count 2X = {double}</h1>
      </div>
      <div style={{ outline: "1px solid green" }}>
        <h3> Child component</h3>
        {/* <input name="inputName" ref={inputElement} /> */}
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
