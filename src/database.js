import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()

const DATABASE = process.env.DB_NAME
const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD
const HOST = process.env.DB_HOST

export const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
    host: HOST,
    dialect: 'mysql'
});