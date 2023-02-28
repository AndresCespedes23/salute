/* eslint-disable import/no-anonymous-default-export */
import { firestore } from "@/helpers/firebase/admin";

export default (request, response) => {
  const { query } = request;
  const { id } = query;

  firestore
    .collection("tweets")
    .doc(id)
    .get()
    .then((doc) => {
      const data = doc.data();
      const id = doc.id;
      response.json({
        ...data,
        id,
        createdAt: +createdAt.toDate(),
      });
    })
    .catch(() => {
      response.status(404).end();
    });
};
