import express from "express";
import { routerFilms } from "./routes/filmsRoutes";
import { AppDataSource } from "./routes/db";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json()) //middleware
app.use("/films", routerFilms);

AppDataSource.initialize()
.then(() => {
 console.log('Database connected');
 
 app.listen(PORT, () => {
   console.log(`Server running ${PORT}`);
 });
})
.catch(error => {
 console.log(error)
})

