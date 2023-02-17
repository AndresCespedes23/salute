import Image from "next/image";
import logo from "../../public/caduceo.png";
import google from "../../public/google.png";
import { Inter } from "@next/font/google";
import styles from "@/styles/salute.module.css";
import Button from "@/components/Button";
import {
  loginWithGoogle,
  onAuthStateChange,
  singOutWithGoogle,
} from "@/helpers/firebase";
import { useEffect, useState } from "react";
import Avatar from "@/components/Avatar";
import HtmlHead from "@/components/HtmlHead";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [user, setUser] = useState(null);
  const handleLogin = () => {
    loginWithGoogle()
      .then(setUser)
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSingOut = () => {
    singOutWithGoogle();
  };
  useEffect(() => {
    onAuthStateChange(setUser);
  }, []);
  return (
    <>
      <HtmlHead />
      <main className={styles.main}>
        <Image className={styles.logo} src={logo} alt="caduceo" priority />
        <div className={styles.presentation}>
          <h1 className={styles.title}>Welcome to Salute !</h1>
          <p>Talk about the lastest healthcare discoveries ...</p>

          {user === null && (
            <Button onClick={handleLogin}>
              <Image className={styles.google} src={google} alt="google" />
              Login With Google
            </Button>
          )}
          {user && user.avatar && (
            <div className={styles.user}>
              <Avatar
                alt={user.username}
                src={user.avatar}
                text={user.username}
              />
              <Button onClick={handleSingOut}>Sing Out</Button>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
