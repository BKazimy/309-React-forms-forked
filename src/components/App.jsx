import React, { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("White");
  const [value, setValue] = useState("");
  const [user, setUser] = useState("");

  function mouseOver() {
    setBgColor("black");
    console.log("moused over");
  }

  function mouseOut() {
    setBgColor("white");
    console.log("moused out");
  }

  function changeHandler(event) {
    setValue(event.target.value);
    console.log(event.target.value);
  }

  function submitted(event) {
    setUser(value);
    console.log("submitted");

    // prevents the default functionlity of the event
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {user}</h1>
      <form onSubmit={submitted}>
        <input
          type="text"
          placeholder="What's your name?"
          onChange={changeHandler}
        />
        <button
          style={{ backgroundColor: bgColor }}
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
