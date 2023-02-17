import Avatar from "@/components/Avatar";
import styles from "./tweet.module.css";

export default function Tweet({ avatar, username, message, id }) {
  return (
    <>
      <article className={styles.tweet}>
        <div className={styles.avatarContainer}>
          <Avatar alt={username} src={avatar} />
        </div>
        <section>
          <h3>{username}</h3>
          <p className={styles.tweetMessage}>{message}</p>
        </section>
      </article>
    </>
  );
}
