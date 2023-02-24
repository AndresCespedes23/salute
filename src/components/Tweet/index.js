/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Avatar from "@/components/Avatar";
import useDateTimeFormat from "@/hooks/useDateTimeFormat";
import useTimeAgo from "@/hooks/useTimeago";
import Link from "next/link";
import { useRouter } from "next/router";
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
  const createdAtFormated = useDateTimeFormat(createdAt);
  const router = useRouter();

  const handleArticleClick = (e) => {
    e.preventDefault();
    router.push("/status/[id]", `/status/${id}`);
  };
  return (
    <>
      <article onClick={handleArticleClick} className={styles.tweet}>
        <div className={styles.avatarContainer}>
          <Avatar alt={userName} src={avatar} />
        </div>
        <section>
          <header>
            <strong>{userName}</strong>
            <span>·</span>
            <Link className={styles.tweetLinks} href={`/status/${id}`}>
              <time className={styles.timestamp} title={createdAtFormated}>
                {timeago}
              </time>
            </Link>
          </header>
          <p className={styles.tweetMessage}>{content}</p>
          {img && <img className={styles.tweetImg} src={img} />}
        </section>
      </article>
    </>
  );
}
