import Image from "next/image";
import styles from "@/styles/avatar.module.css";
export default function Avatar({ alt, src, text }) {
  return (
    <div className={styles.avatarContainer}>
      <Image
        className={styles.avatar}
        loader={() => src}
        unoptimized={true}
        src={src}
        width={49}
        height={49}
        alt={alt}
      />
      {text && <p>{text}</p>}
    </div>
  );
}
