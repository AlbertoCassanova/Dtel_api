import express from "express";
import { engine } from 'express-handlebars';
import morgan from 'morgan'
import path from 'path'
import {fileURLToPath} from 'url';
import dotenv from 'dotenv'
import indexRoutes from './routes/index.js'
import { sequelize } from "./database.js";

dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()

// settings
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(express.json())
app.use(morgan('dev'))
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, './views'));

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

// routes
app.use('/', indexRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// start the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});