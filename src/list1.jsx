// Define a function component named List1.
function List1() {
  // Create an array of strings. This will be our list data.
  const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

  // The component returns a JSX structure.
  return (
    // Render an unordered list (<ul>).
    <ul>
      {/* 
        Use the map() method to iterate over the 'items' array.
        For each 'item' in the array, a new list item (<li>) is created.
        The map function takes a callback with two arguments: the current item and its index.
      */}
      {items.map((item, index) => (
        // Each list item (<li>) needs a unique 'key' prop.
        // React uses the key to efficiently update the list.
        // Using the index as a key is acceptable for static lists, but not ideal if the list can change.
        <li key={index}>
          {/* Display the current 'item' from the array inside the list item. */}
          {item}
        </li>
      ))}
    </ul>
  );
}

// Export the List1 component as the default export of this module.
// This allows other parts of the application to import and use it.
export default List1;
