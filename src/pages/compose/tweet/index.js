/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import HtmlHead from "@/components/HtmlHead";
import Button from "@/components/Button";
import styles from "./tweet.module.css";
import useUser from "@/hooks/useUser";
import { useState } from "react";
import { addTweet } from "../../../helpers/firebase";
import { useRouter } from "next/router";
import Avatar from "@/components/Avatar";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const storage = getStorage();

//This states are to prevent the users for submit the same tweet multiple times
const COMPOSE_STATES = {
  USER_NOT_KNOWN: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1,
};

const DRAG_IMAGE_STATES = {
  ERROR: -1,
  NONE: 0,
  DRAG_OVER: 1,
  UPLOADING: 2,
  COMPLETE: 3,
};

export default function ComposeTweet() {
  const user = useUser();
  const router = useRouter();

  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN);

  const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE);
  const [imgURL, setImgURL] = useState(null);

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
      img: imgURL,
    })
      .then(() => {
        router.push("/home");
      })
      .catch((err) => {
        console.error(err);
        setStatus(COMPOSE_STATES.ERROR);
      });
  };
  const handleDragEnter = (e) => {
    e.preventDefault();
    setDrag(DRAG_IMAGE_STATES.DRAG_OVER);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDrag(DRAG_IMAGE_STATES.NONE);
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    setDrag(DRAG_IMAGE_STATES.NONE);
    const file = e.dataTransfer.files[0];
    const storageRef = ref(storage, `images/${file.name}`);
    await uploadBytes(storageRef, file);
    const downloadUrl = await getDownloadURL(storageRef);
    setImgURL(downloadUrl);
  };

  const isButtonDisabled = !message.length || status === COMPOSE_STATES.LOADING;

  return (
    <>
      <HtmlHead />
      <form className={styles.formTweet} onSubmit={handleSubmit}>
        {user && (
          <section className={styles.avatarContainer}>
            <Avatar src={user.avatar} alt="usuario" />
          </section>
        )}
        {drag === DRAG_IMAGE_STATES.DRAG_OVER ? (
          <textarea
            onChange={handleChange}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={styles.tweetAreaBorder}
            placeholder="What's happening?"
            value={message}
          />
        ) : (
          <textarea
            onChange={handleChange}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={styles.tweetArea}
            placeholder="What's happening?"
            value={message}
          />
        )}

        {imgURL && (
          <section>
            <button className={styles.btnImg} onClick={() => setImgURL(null)}>
              x
            </button>
            <img className={styles.uploadImg} src={imgURL} alt={imgURL} />
          </section>
        )}
        <Button disabled={isButtonDisabled}>Tweet</Button>
      </form>
    </>
  );
}
