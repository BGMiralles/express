import { Router } from "express";
import { getFilms, createFilm, updateFilmById, deleteFilmById} from "../controllers/filmsController"

const routerFilms = Router();

routerFilms.get("/", getFilms) 
routerFilms.post("/", createFilm)
routerFilms.put("/:id", updateFilmById)
routerFilms.delete("/:id", deleteFilmById)

export { routerFilms };
