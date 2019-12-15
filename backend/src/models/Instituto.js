import { sequelize } from '../db'
import Sequelize from 'sequelize'

const Instituto = sequelize.define('Instituto', {
    id: { type: Sequelize.SMALLINT, primaryKey: true },
    id_institucion: {
        type: Sequelize.SMALLINT,
        references: 'institucion_educativa',
        referencesKey: 'id'
    },
    nombre: Sequelize.STRING,
    color_hexa: Sequelize.STRING
}, { timestamps: false, tableName: 'instituto' })

export default Instituto