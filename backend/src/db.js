import Sequelize from 'sequelize'

export const sequelize = new Sequelize('aulas_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default callback => {
	callback(sequelize)
}
