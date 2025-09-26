import * as config from "config";
import { Sequelize } from "sequelize-typescript";
import { User } from "./user";
import { Role } from "./role";

const sequelize = new Sequelize({
  dialect: config.get("DBconfig.dialect"),
  host: config.get("DBconfig.host"),
  username: config.get("DBconfig.username"),
  password: config.get("DBconfig.password"),
  database: config.get("DBconfig.database"),
  models: [User, Role],
});

export default sequelize;
