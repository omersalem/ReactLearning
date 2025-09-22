// ConditionalRender component demonstrates different ways to handle conditional rendering in React.
// Conditional rendering means showing different content based on certain conditions, like user status or input.
// This component takes props: 'isloggedin' (boolean) and 'name' (string), and displays messages accordingly.
import PropTypes from "prop-types";
function ConditionalRender(props) {
  // Prepare a greeting message based on the user's name using if-else.
  // This is different from Jade or certain frameworks as JSX doesn't allow if statements directly in the return.
  // We do it here in JavaScript code to set a variable, then render that variable in JSX.
  let greeting;
  // If the name is exactly "omar", display a personalized greeting.
  if (props.name === "omar") {
    greeting = <h1>Hello Omar</h1>;
  } else {
    // Otherwise, greet as a guest.
    greeting = <h1>Hello Guest</h1>;
  }

  // Now we create and return the JSX to display on the screen.
  // JSX looks like HTML but is actually JavaScript, allowing us to mix logic and markup.
  return (
    <div>
      {/* Ternary conditional rendering: show "Logged In" if true, "Not Logged In" if false. */}
      {/* This is a short way to write if-else using ? and : */}
      {props.isloggedin ? (
        <h1 className="text-green-500 logged-in">Logged In</h1>
      ) : (
        <h1 className="text-red-500 notlogged">Not Logged In</h1>
      )}
      {/* Render the greeting we prepared earlier */}
      {greeting}
      {/* Logical AND conditional rendering: only show welcome message if logged in */}
      {/* If isloggedin is false, nothing shows; if true, display the message */}
      {props.isloggedin && (
        <h2 className="text-green-500 logged-in logged">
          Welcome back, {props.name}!
        </h2>
      )}
    </div>
  );
}
ConditionalRender.propTypes = {
  isloggedin: PropTypes.bool,
  name: PropTypes.string,
};
ConditionalRender.defaultProps = {
  isloggedin: false,
  name: "Guest",
};
export default ConditionalRender;
