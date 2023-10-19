import { Request, Response } from "express";



const getFilms = (req: Request, res: Response) => {
    return res.send("Get films");
}

export {getFilms}