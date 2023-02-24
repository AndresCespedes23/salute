const admin = require("firebase-admin");

if (admin.apps.lenght) {
  const serviceAccount = require("./firebase-admin.json");

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}
export const firestore = admin.firestore();
