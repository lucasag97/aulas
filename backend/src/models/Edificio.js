import { sequelize } from '../db'
import Sequelize from 'sequelize'

const Edificio = sequelize.define('Edificio', {
    id: { type: Sequelize.SMALLINT, primaryKey: true },
    id_sede: {
        type: Sequelize.SMALLINT,
        references: 'sede',
        referencesKey: 'id'
    },
    nombre: Sequelize.STRING,
    cantidad_aulas: Sequelize.INTEGER
}, { timestamps: false, tableName: 'edificio' })

export default Edificio