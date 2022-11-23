import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "interviewdatabase",
  "root@localhost",
  "root",
  {
    host: "DESKTOP-DP5A5FO",
    dialect: "mysql",
    logging: false,
    // operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 3000,
      idle: 1000,
    },
    // if it's SQLite then only do this
    // storage: 'path/to/database.sqlite'
  }
);

sequelize
  .authenticate()
  .then(() => console.log("Database Connected SuccessFully...".green))
  .catch((err) => console.log("error", err));

sequelize
  .sync({ alter: true })
  .then(() => console.log("re-sync :>> "))
  .catch(() => console.log("err :>> "));
