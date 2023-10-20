import { Request, Response } from "express";
import { Film } from "../models/Film";

const getFilms = async(req: Request, res: Response) => {
  const films = await Film.find();

  return res.send(films);
};

const createFilm = (req: Request, res: Response) => {
  console.log(req.body);
  return res.send("CREATE FILM");
};

const updateFilmById = (req: Request, res: Response) => {
  const filmsId = req.params.id;

  return res.send("UPDATE FILM " + filmsId);
};

const deleteFilmById = (req: Request, res: Response) => {
  const filmsId = req.params.id;

  return res.send("DELETE FILM " + filmsId);
};

const getFilmsbyId = (req: Request, res: Response) => {
  const filmsId = req.params.id;

  return res.send(`Get film id${filmsId}`);
};

export { getFilms, createFilm, updateFilmById, deleteFilmById, getFilmsbyId };
