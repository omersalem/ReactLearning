function ButtonInlineStyle({ text = "Click Me" }) {
  const styles = {
    backgroundColor: "#ee1d90",
    color: "white",
    fontWeight: "bold",
    padding: "0.5rem 1rem",
    borderRadius: "0.375rem",
    transition: "background-color 0.3s ease",
    cursor: "pointer",
    border: "none",
    margin: "0rem 1rem",
  };
  return (
    <button className="hover:bg-emerald-500" style={styles}>
      {text}
    </button>
  );
}

export default ButtonInlineStyle;
