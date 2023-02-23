/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Avatar from "@/components/Avatar";
import useTimeAgo from "@/hooks/useTimeago";
import styles from "./tweet.module.css";

export default function Tweet({
  avatar,
  userName,
  content,
  createdAt,
  img,
  id,
}) {
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
          {img && <img className={styles.tweetImg} src={img} />}
        </section>
      </article>
    </>
  );
}
