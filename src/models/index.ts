import * as config from "config";
import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
  dialect: config.get("DBconfig.dialect"),
  host: config.get("DBconfig.host"),
  username: config.get("DBconfig.username"),
  password: config.get("DBconfig.password"),
  database: config.get("DBconfig.database"),
  models: [],
});

export default sequelize;
