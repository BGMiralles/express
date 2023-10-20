import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
 type: "mysql",
 host: "localhost",
 port: 3306,
 username: "root",
 password: "borjitA90?",
 database: "fsd",
 entities: [],
 synchronize: false,
 logging: false,
})
