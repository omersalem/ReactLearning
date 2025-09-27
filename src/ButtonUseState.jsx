import React, { useState } from "react";

function ButtonUseState() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Omar");
  const [style, setStyle] = useState({
    backgroundColor: "blue",
    color: "white",
  });
  return (
    <div>
      <p style={style} className="m-2 text-xl font-bold">
        You clicked {count} times
      </p>
      <p className="m-2 text-xl font-bold">Your name is {name}</p>
      <button
        className="bg-blue-500 m-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          if (name === "Omar") {
            setName("Omar Salem");
          } else {
            // setName("Omar");
            setName("Omar");
          }
          setCount(count + 1);
          if (style.backgroundColor === "blue") {
            setStyle({
              backgroundColor: "red",
              color: "white",
            });
          } else {
            setStyle({
              backgroundColor: "blue",
              color: "white",
            });
          }
        }}
      >
        Click me
      </button>
    </div>
  );
}
export default ButtonUseState;
