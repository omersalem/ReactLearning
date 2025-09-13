// File: src/reusableCard.jsx
// This is a reusable Card component for displaying items with an image, title, and description.
// Props: title (string), description (string), image (image src path)

function Card({ title, description, image }) {
  return (
    // Main card container: white background, rounded corners, shadow, hover effect, hides overflow, max width
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden max-w-sm glow">
      {/* Image section: displays the card image, full width, fixed height 48 (192px), covers area */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Content section: padding inside the card */}
      <div className="p-5">
        {/* Title: large text, bold, dark gray, spacing below */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        {/* Description: smaller gray text, spacing below */}
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        {/* Button: full width, blue background, darker on hover, white text, rounded corners, smooth color transition */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Card;
