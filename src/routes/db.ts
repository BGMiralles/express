import "reflect-metadata"
import { DataSource } from "typeorm"
import { Film1697789983877} from "../migration/1697789983877-film"
import { CreateGenresTable1698047098270 } from "../migration/1698047098270-create-genres-table";
import { Film } from "../models/Film"

export const AppDataSource = new DataSource({
 type: "mysql",
 host: "localhost",
 port: 3306,
 username: "root",
 password: "borjitA90?",
 database: "fsd",
 entities: [Film],
 migrations: [Film1697789983877, CreateGenresTable1698047098270],
 synchronize: false,
 logging: false,
})
