// React components should start with a capital letter.
function List2() {
  /*
   * HOW TO USE LISTS IN REACT - BEGINNER GUIDE
   * 
   * 1. Data Structure: In React, lists are typically arrays of objects
   *    Each item should have a unique 'id' property for the key prop
   * 
   * 2. The map() Method: Used to transform arrays into JSX elements
   *    - Takes each item and returns a React element
   *    - Requires a unique 'key' prop for each item for React's reconciliation
   * 
   * 3. The key Prop: Crucial for React's performance optimization
   *    - Helps React identify which items have changed, been added, or removed
   *    - Should be a unique and stable identifier (like id from database)
   *    - Never use array index as key if items can be reordered
   * 
   * 4. Array Methods: React works well with JavaScript array methods
   *    - filter(): Creates new arrays based on conditions
   *    - sort(): Orders arrays (be careful - mutates original array!)
   *    - map(): Transforms data to JSX elements
   */
  // Create an array of fruit objects - this is our data source
  // Each object represents a fruit with properties: id, name, color, price
  // The 'id' property is crucial for React's key prop when rendering lists
  const fruits = [
    { id: 1, name: "Mango", color: "Yellow", price: 100 },
    { id: 2, name: "Banana", color: "Yellow", price: 80 },
    { id: 3, name: "Cherry", color: "Red", price: 120 },
    { id: 4, name: "Date", color: "Brown", price: 150 },
    { id: 5, name: "Elderberry", color: "Purple", price: 200 },
  ];

  // Sorting the original array by id
  // Note: sort() mutates the original array - in real applications, you might
  // want to create a copy first using spread operator: [...fruits].sort()
  fruits.sort((a, b) => a.id - b.id); // Sort by id in ascending order

  // Filter fruits based on price using filter() method
  // filter() creates a new array with all elements that pass the test
  // This is non-mutating - original array remains unchanged
  const lowPriceFruits = fruits.filter((fruit) => fruit.price < 120);
  const highPriceFruits = fruits.filter((fruit) => fruit.price > 120);

  // Map over the full list of fruits to create JSX elements
  // map() transforms each fruit object into a <li> JSX element
  // The key={fruit.id} is REQUIRED - helps React identify list items
  // &nbsp; creates non-breaking spaces for better formatting
  const allFruitsList = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name} :&nbsp;{fruit.color} :&nbsp;${fruit.price}
    </li>
  ));

  // Map over the low price fruits to create JSX elements
  // Even though we filtered the array, we still need unique keys
  // React uses keys to track which items have changed, been added, or removed
  const lowPriceList = lowPriceFruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name} :&nbsp;{fruit.color} :&nbsp;${fruit.price}
    </li>
  ));

  // Map over the high price fruits to create JSX elements
  // Each mapped array can be rendered directly in JSX using curly braces {}
  const highPriceList = highPriceFruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name} :&nbsp;{fruit.color} :&nbsp;${fruit.price}
    </li>
  ));

  return (
    <div>
      {/* 
        RENDERING LISTS IN JSX:
        - You can render arrays of JSX elements directly using curly braces {}
        - React will automatically render each element in the array
        - The containing element (ul in this case) wraps all list items
      */}
      <h2 className="text-2xl font-bold mb-2 ps-2">All Fruits</h2>
      <ul
        className="backdrop-blur-md border border-black/10 shadow-lg rounded-lg p-4 transition-all duration-300 hover:bg-black/30 hover:shadow-xl"
        style={{ marginBottom: "20px" }}
      >
        {allFruitsList} {/* This renders our mapped array of JSX elements */}
      </ul>

      <h2 className="text-2xl font-bold mb-2 ps-2">
        Low Price Fruits (less than $120)
      </h2>
      <ul
        className="backdrop-blur-md border border-black/10 shadow-lg rounded-lg p-4 transition-all duration-300 hover:bg-black/30 hover:shadow-xl"
        style={{ marginBottom: "20px" }}
      >
        {lowPriceList} {/* Renders filtered low price fruits */}
      </ul>

      <h2 className="text-2xl font-bold mb-2 ps-2">
        High Price Fruits (more than $120)
      </h2>
      <ul
        className="backdrop-blur-md border border-black/10 shadow-lg rounded-lg p-4 transition-all duration-300 hover:bg-black/30 hover:shadow-xl"
        style={{ marginBottom: "20px" }}
      >
        {highPriceList} {/* Renders filtered high price fruits */}
      </ul>
    </div>
  );
}

// The export should match the component name.
export default List2;

/*
 * KEY TAKEAWAYS FOR REACT LISTS:
 * 
 * 1. Always use the map() method to transform arrays into JSX elements
 * 2. Every list item MUST have a unique key prop (usually from data id)
 * 3. Use filter(), sort(), and other array methods to manipulate data
 * 4. Render arrays directly in JSX using curly braces: {arrayName}
 * 5. Keep your data manipulation separate from JSX rendering for clarity
 * 
 * Common Mistakes to Avoid:
 * - Forgetting the key prop (React will warn you in console)
 * - Using array index as key when items can be reordered
 * - Mutating state arrays directly (always create new arrays)
 * - Putting complex logic directly in JSX (keep it in variables)
 */
