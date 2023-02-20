import Avatar from "@/components/Avatar";
import styles from "./tweet.module.css";

export default function Tweet({ avatar, userName, content, createdAt, id }) {
  return (
    <>
      <article className={styles.tweet}>
        <div className={styles.avatarContainer}>
          <Avatar alt={userName} src={avatar} />
        </div>
        <section>
          <header>
            <strong>{userName}</strong>
            <span>·</span>
            <p>{createdAt}</p>
          </header>
          <p className={styles.tweetMessage}>{content}</p>
        </section>
      </article>
    </>
  );
}
