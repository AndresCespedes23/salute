import styles from "@/styles/button.module.css";
export default function Button({ children, onClick, disabled }) {
  return (
    <>
      <button className={styles.btn} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </>
  );
}
