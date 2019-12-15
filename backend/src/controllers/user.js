import express from 'express'
import Model from '../models/User'

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

    // Register user
    router.post('/', async (req, res) => {
        const body = req.body
        try {
            const model = await Model.build(body)
            await model.save()
            res.json(model)
        } catch (err) {
            res.json(err)
        }
    })
    
    return router
}