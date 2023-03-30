/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { onAuthStateChange } from "../firebase/client";
import { useRouter } from "next/router";

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
};

export default function useUser() {
  const [user, setUser] = useState(USER_STATES.NOT_KNOWN);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChange(setUser);
  }, []);

  useEffect(() => {
    user === USER_STATES.NOT_LOGGED && router.push("/");
  }, [user]);

  return user;
}
