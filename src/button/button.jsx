import styles from "./button.module.css";
function Button({ text = "Click Me" }) {
  return <button className={styles.button}>{text}</button>;
}

export default Button;
