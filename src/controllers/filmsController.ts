import { Request, Response } from "express";
import { Film } from "../models/Film";

const getFilms = async (req: Request, res: Response) => {
  try {
    const films = await Film.find();

  return res.send(films);
  } catch (error) {
    return res.send(error)
  }
};

const createFilm = async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    const newFilm = await Film.create({
      title: req.body.title,
      director: req.body.director,
    }).save();

    return res.send(newFilm);
  } catch (error) {
    return res.send(error);
  }
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
