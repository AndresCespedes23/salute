import HtmlHead from "@/components/HtmlHead";
import Tweet from "@/components/Tweet";
import { fetchLatestTweets } from "@/helpers/firebase";
import useUser from "@/hooks/useUser";
import { useEffect, useState } from "react";
import styles from "./home.module.css";

export default function Home() {
  const [timeline, setTimeline] = useState([]);
  const user = useUser();
  useEffect(() => {
    user && fetchLatestTweets().then(setTimeline);
  }, [user]);
  return (
    <>
      <HtmlHead />
      <header className={styles.homeHeader}>
        <h2 className={styles.homeTitle}>Inicio</h2>
      </header>
      <section className={styles.homeTimeline}>
        {timeline.map(({ id, tweet }) => (
          <Tweet
            id={id}
            key={id}
            avatar={tweet.avatar}
            userName={tweet.userName}
            content={tweet.content}
          />
        ))}
      </section>
      <nav className={styles.homeNavbar}></nav>
    </>
  );
}
