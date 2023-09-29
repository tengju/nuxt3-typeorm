import "reflect-metadata"
import { DataSource } from "typeorm";
import path from "path"

let dataSource: DataSource | null = null;

export const connection = async () => {
    console.log(path.resolve(process.cwd(),"server/database/entities/**/*.model.{js,ts}"))
  if (dataSource === null) {
    dataSource = new DataSource({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "root",
        database: "test",
        synchronize: true,
        logging: true,
        entities: [path.resolve(process.cwd(),"server/database/entities/**/*.model.{js,ts}")],
        subscribers: [],
        migrations: [],
    });
  }
  if (!dataSource.isInitialized) {
    console.log("1")
    await dataSource.initialize();
  }
  return dataSource;
};
