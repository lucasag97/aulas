import express from 'express'
import Model from '../models/Edificio'

export default async () => {

    const router = express.Router()

    // Index edificio
    router.get('/', async (req, res) => {
        const sede = req.query.idSede
        try {
            if (sede) {
                const response = await Model.findAll({ where: { id_sede: sede } })
                return res.json(response)
            }
            const response = await Model.findAll()
            return res.json(response)
        } catch (err) {
            console.log(err)
            res.json(err)
        }
    })

    // Get one edificio
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