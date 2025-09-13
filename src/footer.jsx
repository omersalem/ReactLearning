// File: src/footer.jsx
// This component creates a fixed footer at the bottom of the page.
// It includes copyright information and glassy styling with hover effects.

import "./footer.css"; // Imports additional CSS styling for the footer
import ButtonInlineStyle from "./ButtonInlineStyle";

// Footer component: A functional React component that renders the footer UI
function Footer() {
  return (
    // Footer element: Main footer container, styled with Tailwind classes
    <footer className="fixed bottom-0 left-0 right-0 footer bg-black/20 backdrop-blur-md border border-black/10 shadow-lg text-black p-6 transition-all duration-300 hover:bg-black/30 hover:shadow-xl">
      {/* footer class is added from footer.css file */}

      {/* Paragraph: Centered small text displaying copyright info */}
      <p className="text-center text-sm">
        &copy; 2023 My App. All rights reserved.
        <ButtonInlineStyle /> {/* Using the ButtonInlineStyle component */}
      </p>
    </footer>
  );
}

// Export: Makes the Footer component available for use in other files (like App.jsx)
export default Footer;
