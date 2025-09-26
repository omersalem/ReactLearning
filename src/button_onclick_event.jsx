function ButtonOnClickEvent() {
  const handleClick = (e) => {
    if (e.target.style.backgroundColor === "red") {
      e.target.style.backgroundColor = "";
      e.target.style.color = "white";
      return;
    }
    e.target.style.backgroundColor = "red";
    e.target.style.color = "white";
    alert("Button clicked and background color changed!");
  };
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={(e) => handleClick(e)}
    >
      Click Me
    </button>
  );
}

export default ButtonOnClickEvent;
