import React from "react";
import "./App.css";
function App() {
  const msg = "Hello World! I'm a variable";
  const showDiv1 = true;
  // let content = "";
  const div1 = `Hello div1`;
  // const div2 = `Hello div2`;
  // content = showDiv1 ? div1 : div2;
  // if (showDiv1) {
  //   content = div1;
  // } else {
  //   content = div2;
  // }
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
      <p>content using ternary = {showDiv1 ? div1 : ""} </p>
      <p>content using short circuit= {showDiv1 && div1} </p>
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
