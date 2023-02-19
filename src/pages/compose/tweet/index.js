import HtmlHead from "@/components/HtmlHead";
import Button from "@/components/Button";
import styles from "./tweet.module.css";
import useUser from "@/hooks/useUser";
import { useState } from "react";
import { addTweet } from "../../../helpers/firebase";
import { useRouter } from "next/router";

//This states are to prevent the users for submit the same twit multiple times
const COMPOSE_STATES = {
  USER_NOT_KNOWN: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1,
};

export default function ComposeTweet() {
  const user = useUser();
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN);
  const handleChange = (e) => {
    const { value } = e.target;
    setMessage(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(COMPOSE_STATES.LOADING);
    addTweet({
      userId: user.uid,
      userName: user.username,
      avatar: user.avatar,
      content: message,
    })
      .then(() => {
        router.push("/home");
      })
      .catch((err) => {
        console.error(err);
        setStatus(COMPOSE_STATES.ERROR);
      });
  };
  const isButtonDisabled = !message.length || status === COMPOSE_STATES.LOADING;
  return (
    <>
      <HtmlHead />
      <form onSubmit={handleSubmit}>
        <textarea
          onChange={handleChange}
          className={styles.tweetArea}
          placeholder="What's happening?"
          value={message}
        />
        <div className={styles.btnContainer}>
          <Button disabled={isButtonDisabled}>Tweet</Button>
        </div>
      </form>
    </>
  );
}
