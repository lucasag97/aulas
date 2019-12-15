import { sequelize } from '../db'
import Sequelize from 'sequelize'

const Sede = sequelize.define('Sede', {
    id: { type: Sequelize.SMALLINT, primaryKey: true },
    id_institucion: {
        type: Sequelize.SMALLINT,
        references: 'institucion_educativa',
        referencesKey: 'id'
    },
    nombre: Sequelize.STRING,
    calleynum: Sequelize.STRING,
    localidad: Sequelize.STRING,
    disponible_desde: Sequelize.DATE,
    disponible_hasta: Sequelize.DATE,
}, { timestamps: false, tableName: 'sede' })

export default Sede