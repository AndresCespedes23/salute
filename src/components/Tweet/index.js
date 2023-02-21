import Avatar from "@/components/Avatar";
import useTimeAgo from "@/hooks/useTimeago";
import styles from "./tweet.module.css";

export default function Tweet({ avatar, userName, content, createdAt, id }) {
  const timeago = useTimeAgo(createdAt);
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
            <p className={styles.timestamp}>{timeago}</p>
          </header>
          <p className={styles.tweetMessage}>{content}</p>
        </section>
      </article>
    </>
  );
}
