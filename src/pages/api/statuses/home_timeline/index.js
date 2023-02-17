/* eslint-disable import/no-anonymous-default-export */
const timeline = [
  {
    id: "0",
    username: "houseMD",
    name: "Gregory House",
    avatar:
      "https://www.sarcasm.co/wp-content/uploads/2016/12/9141da61bf6149a47c092d9d95c378ef.jpg",
    message: `“Pain makes us make bad decisions. Fear or pain is almost as big of a motivator.”`,
  },
  {
    id: "1",
    username: "nursemaster10",
    name: "Romina Rojas",
    avatar:
      "https://tm-women.org/wp-content/uploads/2017/07/nurse-791x1024.jpg",
    message: "Esto está funcionando muy bien 😊🩺",
  },
  {
    id: "2",
    username: "superphysio69",
    name: "Juan Carlos Navone",
    avatar:
      "https://www.shutterstock.com/image-photo/young-african-physiotherapy-man-holding-260nw-2205615591.jpg",
    message: `Have a nice day !`,
  },
  {
    id: "0",
    username: "houseMD",
    name: "Gregory House",
    avatar:
      "https://www.sarcasm.co/wp-content/uploads/2016/12/9141da61bf6149a47c092d9d95c378ef.jpg",
    message: `“Pain makes us make bad decisions. Fear or pain is almost as big of a motivator.”`,
  },
  {
    id: "1",
    username: "nursemaster10",
    name: "Romina Rojas",
    avatar:
      "https://tm-women.org/wp-content/uploads/2017/07/nurse-791x1024.jpg",
    message: "Esto está funcionando muy bien 😊🩺",
  },
  {
    id: "2",
    username: "superphysio69",
    name: "Juan Carlos Navone",
    avatar:
      "https://www.shutterstock.com/image-photo/young-african-physiotherapy-man-holding-260nw-2205615591.jpg",
    message: `Have a nice day !`,
  },
  {
    id: "0",
    username: "houseMD",
    name: "Gregory House",
    avatar:
      "https://www.sarcasm.co/wp-content/uploads/2016/12/9141da61bf6149a47c092d9d95c378ef.jpg",
    message: `“Pain makes us make bad decisions. Fear or pain is almost as big of a motivator.”`,
  },
  {
    id: "1",
    username: "nursemaster10",
    name: "Romina Rojas",
    avatar:
      "https://tm-women.org/wp-content/uploads/2017/07/nurse-791x1024.jpg",
    message: "Esto está funcionando muy bien 😊🩺",
  },
  {
    id: "2",
    username: "superphysio69",
    name: "Juan Carlos Navone",
    avatar:
      "https://www.shutterstock.com/image-photo/young-african-physiotherapy-man-holding-260nw-2205615591.jpg",
    message: `Have a nice day !`,
  },
];

export default (_req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(timeline));
};
