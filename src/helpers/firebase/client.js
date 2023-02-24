// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const loginWithGoogle = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleProvider).then(() => {
    const { displayName, email, photoURL } = user;

    return {
      avatar: photoURL,
      username: displayName,
      email,
    };
  });
};

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL, uid } = user;

  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid,
  };
};

export const singOutWithGoogle = () => {
  const auth = getAuth();
  return signOut(auth);
};

export const onAuthStateChange = (onChange) => {
  const auth = getAuth();
  return auth.onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null;
    onChange(normalizedUser);
  });
};

export const addTweet = (tweet) => {
  return addDoc(collection(db, "tweets"), {
    tweet,
    createdAt: serverTimestamp(),
  });
};

export const fetchLatestTweets = async () => {
  const q = query(collection(db, "tweets"), orderBy("createdAt", "desc"));
  const querySnapshot = getDocs(q);

  return await querySnapshot.then(({ docs }) => {
    return docs.map((doc) => {
      const data = doc.data();
      const id = doc.id;
      const { createdAt } = data;

      return {
        ...data,
        id,
        createdAt: +createdAt.toDate(),
      };
    });
  });
};
