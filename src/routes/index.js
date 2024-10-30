import express from "express";
import Numeros from "../models/Numeros.js";
import FormatearOperador from "../utils/format.js";
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/count', async(req, res) => {
    const count = await Numeros.count()
    res.json({
        numeros_registrados: count
    });
});

router.get('/registros', async(req, res) => {
    const numeros = await Numeros.findAll();
    let lista = []
    numeros.forEach((e)  => {
        lista.push(
            {
                id: e.dataValues.id,
                numeros: e.dataValues.numero,
                operador: FormatearOperador(e.dataValues.operador)
            }
        )
    })
    res.json(lista);
})

export default router