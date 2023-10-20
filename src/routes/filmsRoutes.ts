import { Router } from "express";
import {
  getFilms,
  createFilm,
  updateFilmById,
  deleteFilmById,
  getFilmsbyId
} from "../controllers/filmsController";

const routerFilms = Router();

routerFilms.get("/", getFilms);
routerFilms.post("/", createFilm);
routerFilms.put("/:id", updateFilmById);
routerFilms.delete("/:id", deleteFilmById);
routerFilms.get("/:id", getFilmsbyId)

export { routerFilms };
