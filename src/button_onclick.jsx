function ButtonOnClick() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleClick}
    >
      Click me
    </button>
  );
}

export default ButtonOnClick;
