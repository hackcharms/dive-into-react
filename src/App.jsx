import React from "react";
import "./App.css";
function App() {
  const msg = "Hello World! I'm a variable";
  const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];
  return (
    // <React.Fragment>
    <>
      <h1 className="card">{msg}</h1>
      <div>
        {products.map((product) => {
          return <h1 key={product.id}>{product.title}</h1>;
        })}
      </div>
    </>
  );
}
export default App;

function Button() {
  return <button type="button">Btn</button>;
}
