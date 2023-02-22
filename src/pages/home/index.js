import HtmlHead from "@/components/HtmlHead";
import Compose from "@/components/Icons/Compose";
import Search from "@/components/Icons/Search";
import Tweet from "@/components/Tweet";
import { fetchLatestTweets } from "@/helpers/firebase";
import useUser from "@/hooks/useUser";
import Link from "next/link";
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
        {timeline.map(({ id, tweet, createdAt }) => (
          <Tweet
            id={id}
            key={id}
            avatar={tweet.avatar}
            userName={tweet.userName}
            content={tweet.content}
            createdAt={createdAt}
          />
        ))}
      </section>
      <nav className={styles.homeNavbar}>
        <Link className={styles.links} href="/search">
          <Search />
        </Link>
        <Link className={styles.links} href="/compose/tweet">
          <Compose />
        </Link>
      </nav>
    </>
  );
}
