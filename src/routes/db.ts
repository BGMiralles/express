import "reflect-metadata"
import { DataSource } from "typeorm"
import { Film1697789983877 } from "../migration/1697789983877-film"

export const AppDataSource = new DataSource({
 type: "mysql",
 host: "localhost",
 port: 3306,
 username: "root",
 password: "borjitA90?",
 database: "fsd",
 entities: [],
 migrations: [Film1697789983877],
 synchronize: false,
 logging: false,
})
