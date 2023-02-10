import styles from "@/components/Button/button.module.css";
export default function Button({ children, onClick }) {
  return (
    <>
      <button className={styles.btn} onClick={onClick}>
        {children}
      </button>
    </>
  );
}
