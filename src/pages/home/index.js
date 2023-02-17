import HtmlHead from "@/components/HtmlHead";
import Tweet from "@/components/Tweet";
import { useEffect, useState } from "react";
import styles from "./home.module.css";

export default function Home() {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    fetch("/api/statuses/home_timeline")
      .then((res) => res.json())
      .then(setTimeline);
  }, []);
  return (
    <>
      <HtmlHead />
      <header className={styles.homeHeader}>
        <h2 className={styles.homeTitle}>Inicio</h2>
      </header>
      <section className={styles.homeTimeline}>
        {timeline.map(({ id, username, avatar, message }) => (
          <Tweet
            id={id}
            key={id}
            avatar={avatar}
            username={username}
            message={message}
          />
        ))}
      </section>
      <nav className={styles.homeNavbar}></nav>
    </>
  );
}
