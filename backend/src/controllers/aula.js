import express from 'express'
import Model from '../models/Aula'

export default async () => {

    const router = express.Router()

    // Index Aulas
    router.get('/', async (req, res) => {
        const edificio = req.query.idEdificio
        try {
            if (edificio) {
                const response = await Model.findAll({ where: { id_edificio: edificio } })
                return res.json(response)
            }
            const response = await Model.findAll()
            return res.json(response)
        } catch (err) {
            console.log(err)
            return res.json(err)
        }
    })

    // Get one aula
    router.get('/:id', async (req, res) => {
        try {
            const response = await Model.findByPk(req.params.id)
            res.json(response)
        } catch (err) {
            res.json(err)
        }
    })
    
    return router
}