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
                numero: e.dataValues.numero,
                operador: FormatearOperador(e.dataValues.operador),
                fecha_consulta: e.dataValues.fecha_consulta
            }
        )
    })
    res.json(lista);
})

router.get('/registros/:id', async(req, res) => {
    const { id } = req.params
    const query = await Numeros.findOne({where: {numero:id}});
    if (query != null) {
        res.json(query.dataValues)
    }
    else {
        res.status(404).json({message: "ESTE REGISTRO NO SE ENCUENTRA DISPONIBLE"})
    }
})

export default router