import { Router } from 'express'

export default async () => {
	const router = Router()

	// Default response
	router.get('/', (req, res) => {
		res.json({
			message: 'Sistema de gestión de aulas API REST'
		})
	})

	const entities = [
		'user', 'sede', 'instituto', 'carrera',
		'materia', 'edificio', 'aula', 'comision',
		'ciclo', 'evento', 'especial', 'notificacion'
	]

	entities.forEach(async (entity) => {
		router.use(`/${entity}`, (await require(`../controllers/${entity}`).default()))
	})

	return router
}
