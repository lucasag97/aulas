import { sequelize } from '../db'
import Sequelize from 'sequelize'

const CicloLectivo = sequelize.define('CicloLectivo', {
    id: { type: Sequelize.SMALLINT, primaryKey: true },
    nombre: Sequelize.STRING,
    fecha_inicio: Sequelize.DATE,
    fecha_fin: Sequelize.DATE,
    estado: Sequelize.STRING
}, { timestamps: false, tableName: 'ciclo_lectivo' })

export default CicloLectivo