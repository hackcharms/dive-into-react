import React from "react";
import "./App.css";
function App() {
  const msg = "Hello World! I'm a variable";
  function myFunc(msg) {
    alert("myFunc called " + msg);
  }
  const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];
  return (
    // <React.Fragment>
    <>
      {/* onclick => lowercase
    onClick => camel case
    OnClick => pascal case
    on_click => snake case
    ON_CLICK => constant case
    on-click=kebab case */}

      <h1 className="card">{msg}</h1>
      <button onClick={() => myFunc("hello")}>Click me</button>
      {/* <button onClick={myFunc}>Click me</button> */}
    </>
  );
}
export default App;

function Button() {
  return <button type="button">Btn</button>;
}
