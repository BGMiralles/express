import { Request, Response } from "express";



const getFilms = (req: Request, res: Response) => {
    return res.send("Get films");
}

const createFilm = (req: Request, res: Response) => {
    return res.send("CREATE FILM");
  }

const modifyFilm = (req: Request, res: Response) => {
    const filmsId = req.params.id;
  
    return res.send("UPDATE FILM " + filmsId);
  }

export {getFilms, createFilm, modifyFilm}