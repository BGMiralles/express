import { Request, Response } from "express";
import { Film } from "../models/Film";

const getFilms = async (req: Request, res: Response) => {
  try {
    const films = await Film.find();

    return res.send(films);
  } catch (error) {
    return res.send(error);
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

const updateFilmById = async (req: Request, res: Response) => {
  try {
    const filmId = req.params.id;
    const filmUpdated = await Film.findOneBy({ id: parseInt(filmId) });

    if (!filmUpdated) {
      return res.status(404).send("Película no encontrada");
    }

    filmUpdated.title = req.body.title;
    filmUpdated.director = req.body.director;
    await filmUpdated.save();

    return res.send(filmUpdated);
  } catch (error) {
    return res.send(error);
  }
};


const deleteFilmById = async (req: Request, res: Response) => {
  try {
    const filmsIdtoDelete = req.params.id;
    const filmDeleted = await Film.delete({
      id: parseInt(filmsIdtoDelete),
    });

    if (filmDeleted.affected) {
      return res.send(
        "Se ha eliminado correctamente la peliculacon el id " + filmDeleted
      );
    }

    return res.send("No se ha eliminado nada");
  } catch (error) {
    return res.send(error);
  }
};

const getFilmsbyId = (req: Request, res: Response) => {
  const filmsId = req.params.id;

  return res.send(`Get film id${filmsId}`);
};

export { getFilms, createFilm, updateFilmById, deleteFilmById, getFilmsbyId };
