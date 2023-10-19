import express from "express";
import { routerFilms } from "./routes/filmsRoutes";

const app = express();

const PORT = process.env.PORT || 4000;

app.use("/", routerFilms);

app.listen(PORT, () => {
  console.log(`Server running ${PORT}`);
});
