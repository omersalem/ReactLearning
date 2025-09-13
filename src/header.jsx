import Button from "./button/button";
function Header() {
  return (
    <header className="bg-black/20 backdrop-blur-md border border-black/10 shadow-lg rounded-lg text-black p-6 m-4 transition-all duration-300 hover:bg-black/30 hover:shadow-xl">
      <h1 className="text-3xl font-bold mb-4 drop-shadow-lg">My App</h1>
      <nav>
        <ul className="flex space-x-6">
          <li className="transition-all duration-200 hover:text-blue-600 hover:scale-105">
            <a href="#home" className="text-lg font-medium">
              Home
            </a>
          </li>
          <li className="transition-all duration-200 hover:text-blue-600 hover:scale-105">
            <a href="#about" className="text-lg font-medium">
              About
            </a>
          </li>
          <li className="transition-all duration-200 hover:text-blue-600 hover:scale-105">
            <a href="#contact" className="text-lg font-medium">
              Contact
            </a>
          </li>
          <li>
            <Button text="Sign Up" /> {/* Using the Button component */}
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
