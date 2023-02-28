const admin = require("firebase-admin");

const serviceAccount = require("./admin.json");

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} catch (e) {}

export default admin;
