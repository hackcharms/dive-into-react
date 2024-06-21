import React from "react";
import "./App.css";
function App() {
  const msg = "Hello World! I'm a variable";
  const myStyle = {
    color: "green",
    backgroundColor: "yellow",
  };
  // const showDat
  return (
    // <React.Fragment>
    <>
      <h1 className="card">{msg}</h1>
      <p
        style={{
          color: "green",
          backgroundColor: "yellow",
        }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
        laborum.
      </p>
      {/* <input type="text" value={msg} /> */}
      <div>
        {/* <Button></Button>
        <Button></Button>
        <Button></Button> */}
      </div>
    </>
  );
}
export default App;

function Button() {
  return <button type="button">Btn</button>;
}
