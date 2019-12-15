import { sequelize } from '../db'
import Sequelize from 'sequelize'

const Aula = sequelize.define('Aula', {
    id: { type: Sequelize.SMALLINT, primaryKey: true },
    nombre: Sequelize.STRING,
    id_edificio: {
        type: Sequelize.SMALLINT,
        references: 'edificio',
        referencesKey: 'id'
    },
    piso: Sequelize.SMALLINT,
    capacidad: Sequelize.INTEGER,
    obs: Sequelize.STRING,
}, { timestamps: false, tableName: 'aula' })

export default Aula