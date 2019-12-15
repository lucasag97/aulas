import express from 'express'
import Model from '../models/User'
import { encrypt, decrypt } from '../utils/encrypt'

export default async () => {

    const router = express.Router()

    router.post('/', async (req, res) => {
        const body = req.body
        let password = null
        if (body.password) {
            password = encrypt(body.password.toString())
        }
        try {
            const response = await Model.findOne({ where: { username: body.username, password: password }})
            res.json(response)
        } catch (err) {
            res.json(err)
        }
    })
    
    return router
}