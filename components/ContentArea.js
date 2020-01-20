import styles from "./ContentArea.module.css";

function ContentArea({ children }) {
  return <div className={styles.contentArea}>{children}</div>;
}

export default ContentArea;
