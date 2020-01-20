import styles from "./Button.module.css";

function Button({ variant = "primary", size = "normal", disabled, children }) {
  return (
    <button
      className={`${styles[variant]} ${styles[size]}`}
      disabled={disabled === "disabled"}
    >
      {children}
    </button>
  );
}

export default Button;
