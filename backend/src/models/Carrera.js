import { sequelize } from '../db'
import Sequelize from 'sequelize'

const Carrera = sequelize.define('Carrera', {
    id: { type: Sequelize.SMALLINT, primaryKey: true },
    id_instituto: {
        type: Sequelize.SMALLINT,
        references: 'instituto',
        referencesKey: 'id'
    },
    nombre: Sequelize.STRING,
}, { timestamps: false, tableName: 'carrera' })

export default Carrera