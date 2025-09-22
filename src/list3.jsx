import PropTypes from "prop-types";

function List3(props) {
  let items = props.items;
  let category = props.category;
  return (
    <div className="bg-black/20 backdrop-blur-md border mb-24 border-black/10 shadow-lg rounded-lg text-black p-6 m-4 transition-all duration-300 hover:bg-black/30 hover:shadow-xl">
      <h2 className="text-2xl bg-amber-700 font-bold mb-2">{category}</h2>
      <ul className="list-disc list-inside mb-4 z-50">
        {items.map((item) => (
          <li key={item.id}>
            {item.name} :&nbsp; {item.color} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List3;
List3.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      color: PropTypes.string,
      price: PropTypes.number,
    })
  ),
  category: PropTypes.string,
};
List3.defaultProps = {
  category: "Default Category",
  items: [],
};

//default props
