import express from 'express'
import Model from '../models/Notificacion'
import { encrypt, decrypt } from '../utils/encrypt'

export default async () => {

    const router = express.Router()

    // Index notifications
    router.get('/', async (req, res) => {
        const sender = req.query.senderId
        const receiver = req.query.receiverId
        const filters = req.query.filters ? JSON.parse(req.query.filters) : undefined
        try {
            if (sender) {
                const response = await Model.findAllBySender(sender)
                return res.json(response)
            }
            if (receiver) {
                const response = await Model.findAllByReceiver(receiver)
                return res.json(response)
            }
            const response = await Model.find(filters)
            return res.json(response)
        } catch (err) {
            console.log(err)
            res.json(err)
        }
    })

    // Get one notification
    router.get('/:id', async (req, res) => {
        try {
            const response = await Model.findByPk(req.params.id)
            return res.json(response)
        } catch (err) {
            res.json(err)
        }
    })

    // Create a notification
    router.post('/', async (req, res) => {
        try {
            if (req.body.notificacion) {
                req.body.notificacion = encrypt(req.body.notificacion)
            }
            const model = await Model.create(req.body)
            await model.save()
            return res.json(model)
        } catch (err) {
            console.log(err)
            res.json(err)
        }
    })
    
    return router
}