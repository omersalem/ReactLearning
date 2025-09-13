// props =  read-only properties that are shared between components.
//                A parent component can send data to a child component.
//                key=value

// propTypes = a mechanism that ensures that the passed value
//                        is of the correct datatype.
//                       age: PropTypes.number
//                       name: PropTypes.string

// defaultProps = default values for props in case they are not
//                            passed from the parent component
//                            name: "Guest"

import PropTypes from "prop-types";

function CardProbs({ name, age, isStudent }) {
  return (
    <div className="bg-black/20 backdrop-blur-md border border-black/10 shadow-lg rounded-lg text-black p-6 m-4 transition-all duration-300 hover:bg-black/30 hover:shadow-xl">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p>Age: {age}</p>
      <p>Is Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}
export default CardProbs;

CardProbs.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

CardProbs.defaultProps = {
  name: "Guest",
  age: 10,
  isStudent: false,
};
