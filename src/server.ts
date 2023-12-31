import express from "express";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3000, () => {
  console.log("Application running on port 3000");
});
