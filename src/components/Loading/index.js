/* eslint-disable react/jsx-filename-extension */
import styles from "@/styles/spinner.module.css";
import { Dna } from "react-loader-spinner";

export default function Spinner() {
  return (
    <section className={styles.modalContainer}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      </div>
    </section>
  );
}
