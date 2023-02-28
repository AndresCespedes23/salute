/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import logo from "../../public/caduceo.png";
import google from "../../public/google.png";
import { Inter } from "@next/font/google";
import styles from "@/styles/salute.module.css";
import Button from "@/components/Button";
import { loginWithGoogle } from "@/helpers/firebase/client";
import { useEffect } from "react";
import HtmlHead from "@/components/HtmlHead";
import { useRouter } from "next/router";
import useUser, { USER_STATES } from "../hooks/useUser";
import { Dna } from "react-loader-spinner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const user = useUser();
  const router = useRouter();
  const handleLogin = () => {
    loginWithGoogle()
      .then(user)
      .catch((err) => {
        console.log(err);
      });
  };
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

          {user === USER_STATES.NOT_LOGGED && (
            <Button onClick={handleLogin}>
              <Image className={styles.google} src={google} alt="google" />
              Login With Google
            </Button>
          )}
          {user === USER_STATES.NOT_KNOWN && (
            <Dna
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          )}
        </div>
      </main>
    </>
  );
}
