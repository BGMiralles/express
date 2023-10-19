import { Router } from "express";
import { getFilms} from "../controllers/filmsController"

const routerFilms = Router();

routerFilms.get("/", getFilms) 

routerFilms.post("/", (req, res) => {
  return res.send("CREATE FILM");
});

routerFilms.put("/:id", (req, res) => {
  const filmsId = req.params.id;

  return res.send("UPDATE FILM " + filmsId);
});

routerFilms.delete("/:id", (req, res) => {
  const filmsId = req.params.id;

  return res.send("DELETE FILM " + filmsId);
});

export { routerFilms };
