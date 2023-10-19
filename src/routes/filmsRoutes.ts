import { Router } from "express";
import { getFilms, createFilm, updateFilmById} from "../controllers/filmsController"

const routerFilms = Router();

routerFilms.get("/", getFilms) 
routerFilms.post("/", createFilm)
routerFilms.put("/:id", updateFilmById)

routerFilms.delete("/:id", (req, res) => {
  const filmsId = req.params.id;

  return res.send("DELETE FILM " + filmsId);
});

export { routerFilms };
