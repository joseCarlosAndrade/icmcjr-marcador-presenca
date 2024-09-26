import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const PGHOST = process.env.PGHOST || 'default_host';
const PGUSER = process.env.PGUSER || 'default_pguser';
const PGDATABASE = process.env.PGDATABASE || 'default_database';
const PGPASSWORD = process.env.PGPASSWORD || 'default_pgpassord';

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
    dialect: "postgres",
    host: PGHOST,
    port: 5432,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
  });
  
  export default sequelize;