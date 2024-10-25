import express from "express";
import { engine } from 'express-handlebars';
import morgan from 'morgan'
import path from 'path'
import {fileURLToPath} from 'url';
import dotenv from 'dotenv'

dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = 3000
const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, './views'));

app.get('/', (req, res) => {
    res.render('home');
});

let server = app.listen(port, () => {
    console.log("Server listening in https://localhost:" + server.address().port);
})