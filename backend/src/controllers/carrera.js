import express from 'express'
import Model from '../models/Carrera'

export default async () => {

    const router = express.Router()

    // Index users
    router.get('/', async (req, res) => {
        try {
            const response = await Model.findAll()
            res.json(response)
        } catch (err) {
            res.json(err)
        }
    })

    // Get one user
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