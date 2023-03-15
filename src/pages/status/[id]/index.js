import HtmlHead from "@/components/HtmlHead";
import Tweet from "@/components/Tweet";
import app from "@/helpers/firebase/admin";
import { useRouter } from "next/router";

export default function TweetPage(props) {
  const router = useRouter();

  if (router.isFallback) return <h1>Loading...</h1>;
  return (
    <section>
      <HtmlHead />
      <Tweet {...props} />
    </section>
  );
}

export async function getStaticPaths() {
  const snapshot = await app.firestore().collection("tweets").get();

  const paths = snapshot.docs.map((doc) => ({
    params: { id: doc.id },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { id } = params;

  return app
    .firestore()
    .collection("tweets")
    .doc(id)
    .get()
    .then((doc) => {
      const data = doc.data();
      const id = doc.id;
      const { createdAt } = data;

      const props = {
        ...data.tweet,
        id,
        createdAt: +createdAt.toDate(),
      };
      return { props };
    })
    .catch(() => {
      return { props: {} };
    });
}
