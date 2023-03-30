/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import logo from "public/caduceo.png";
import wip from "public/wfh.gif";
import Button from "../Button";
import styles from "./wip.module.css";

export default function WorkInProgress() {
  return (
    <section className={styles.wip}>
      <Image className={styles.logo} src={logo} alt="caduceo" />
      <h1 className={styles.title}>
        Sorry, we're still developing this page...
      </h1>
      <div>
        <Image className={styles.gif} src={wip} alt="work-in-progress" />
      </div>
      <Link className={styles.btnLink} href="/home">
        <Button>Go Home</Button>
      </Link>
    </section>
  );
}
