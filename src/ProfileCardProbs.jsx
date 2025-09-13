// src/components/ProfileCard.jsx

// Import: Brings in the ButtonInlineStyle component from a relative path
// This allows us to use the button in our profile card
import ButtonInlineStyle from "./ButtonInlineStyle";

import PropTypes from "prop-types";
// Props Explanation for Beginners:
// Props (short for "properties") are like data inputs that are passed from a parent component to this child component.
// They are read-only - this component can read them, but cannot change them.
// In React, props are the primary way components communicate with each other.
// function ProfileCardProbs(props) - receives all props as a single object
// Inside, we access them like: props.avatar, props.name, etc.

function ProfileCardProbs(props) {
  // This function component returns JSX. It receives props from parent components.
  // When used in App.jsx or elsewhere: <ProfileCardProbs avatar="..." name="..." ... />

  return (
    // Main card container: white background, rounded corners, shadow, padding, fixed width, centered text
    // bg-white: plain white background
    // rounded-2xl: large rounded corners (12px border radius)
    // shadow-lg: prominent shadow for depth
    // p-6: padding inside the card (24px on all sides)
    // w-72: fixed width (288px)
    // text-center: centers all text inside
    <div className="bg-white rounded-2xl shadow-lg p-6 w-72 text-center">
      {/* Avatar Image: Displays the user's profile picture */}
      <img
        // src: gets image URL from props.avatar (passed from parent component)
        // alt: accessibility - screen readers will read the user's name if image fails
        src={props.avatar}
        alt={props.name}
        // Tailwind classes:
        // w-24 h-24: 96px x 96px square image
        // rounded-full: makes it a perfect circle
        // mx-auto: centers horizontally margin
        // mb-4: bottom margin (16px) for spacing
        // object-cover: images scale and crop to fit perfectly without distortion
        // border-4: 4px thick border
        // border-blue-500: bright blue border color
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-500"
      />

      {/* Name: The main heading displaying the person's name */}
      <h2 className="text-xl font-bold text-gray-800">{props.name}</h2>
      {/* Gets name from props and displays it as a large, bold, dark heading */}

      {/* Job Title: Displays what this person does (job/role) */}
      <p className="text-gray-500 text-sm mb-4">{props.role}</p>
      {/* Smaller text, gray color, spaced below for visual hierarchy */}

      {/* Bio: Short biography or description of the person */}
      <p className="text-gray-600 text-sm mb-4">{props.bio}</p>
      {/* Conceptional description in smaller gray text with bottom margin */}

      {/* Button: Calls ButtonInlineStyle component with text prop */}
      {/* This renders a clickable button with "Follow" text */}
      {/* Notice: { } brackets around the component call because it needs to return JSX */}
      {ButtonInlineStyle({ text: "Follow" })}
    </div>
  );
}

ProfileCardProbs.propTypes = {
  // PropTypes: Ensures the props passed in are of the correct type
  // This helps catch bugs where wrong data types are sent to components
  avatar: PropTypes.string, // avatar must be a string (URL)
  name: PropTypes.string, // name must be a string
  role: PropTypes.string, // role is optional but if provided must be a string
  bio: PropTypes.string, // bio is optional but if provided must be a string
};
ProfileCardProbs.defaultProps = {
  // DefaultProps: Provides default values for props if they are not passed in
  // This ensures the component still works even if some data is missing
  avatar: "https://via.placeholder.com/150", // Default avatar URL if not provided
  role: "Unknown", // Default role if not provided
  bio: "No bio provided.", // Default bio if not provided
};

// Export: Makes this component available for import in other files
export default ProfileCardProbs;
