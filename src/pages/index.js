/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import logo from "../../public/caduceo.png";
import google from "../../public/google.png";
import heartbeat from "../../public/heartbeat.gif";
import { Inter } from "@next/font/google";
import styles from "@/styles/salute.module.css";
import Button from "@/components/Button";
import { loginWithGoogle, onAuthStateChange } from "@/helpers/firebase";
import { useEffect, useState } from "react";
import HtmlHead from "@/components/HtmlHead";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [user, setUser] = useState(undefined);
  const router = useRouter();
  const handleLogin = () => {
    loginWithGoogle()
      .then(setUser)
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    onAuthStateChange(setUser);
  }, []);
  useEffect(() => {
    user && router.replace("/home");
  }, [user]);
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
          {user === undefined && (
            <Image height={90} width={90} src={heartbeat} alt="loading..." />
          )}
        </div>
      </main>
    </>
  );
}
