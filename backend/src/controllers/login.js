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
            const user = await Model.findOne({ where: { username: body.username }})
            if (user) {
                if (password !== user.password) {
                    return res.json({ message: 'Incorrect username or password' })
                }
            } else {
                return res.json({ message: "User doesn't exists" })
            }
            return res.json({ accessToken: user.accessToken })
        } catch (err) {
            console.log(err)
            res.json(err)
        }
    })
    
    return router
}