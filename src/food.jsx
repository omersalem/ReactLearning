function Food() {
  const food1 = "orange";
  const food2 = "apple";
  const food3 = "banana"; // This variable is declared but not used
  const food4 = "grape"; // This variable is declared but not used
  const food5 = "kiwi"; // This variable is declared but not used

  return (
    <div className="bg-black/20 backdrop-blur-md border mb-24 border-black/10 shadow-lg rounded-lg text-black p-6 m-4 transition-all duration-300 hover:bg-black/30 hover:shadow-xl">
      <h2 className="text-2xl font-bold mb-2">Food Component</h2>
      <p>This is a simple food component.</p>
      <ul className="list-disc list-inside">
        <li className="font-bold">{food1.toUpperCase()}</li>
        <li className="font-bold">{food2.toUpperCase()}</li>
        <li className="font-bold">{food3.toUpperCase()}</li>
        <li className="font-bold">{food4.toUpperCase()}</li>
        <li className="font-bold">{food5.toUpperCase()}</li>
      </ul>
    </div>
  );
}

export default Food;
