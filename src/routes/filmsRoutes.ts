import { Router } from "express";

const routerFilms = Router();

routerFilms.get("/films", (req, res) => {
  return res.send("Get films");
});

routerFilms.post("/films", (req, res) => {
  return res.send("CREATE FILM");
});

routerFilms.put("/films/:id", (req, res) => {
  const filmsId = req.params.id;

  return res.send("UPDATE FILM " + filmsId);
});

routerFilms.delete("/films/:id", (req, res) => {
  const filmsId = req.params.id;

  return res.send("DELETE FILM " + filmsId);
});

export { routerFilms };
