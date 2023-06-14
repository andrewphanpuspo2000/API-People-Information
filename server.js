import express from "express";
import { connectToMongo } from "./MongoDB/mongoDB.js";
const app = express();
const PORT = 8200;

app.use(express.json());
connectToMongo();
import router from "./router/router.js";

app.use("/new/rest/prac", router);

app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log(`The server is running in port ${PORT}`);
});

app.use("/", (req, res) => {
  res.json({
    Status: "Running",
    Message: "server is running",
  });
});
