import { sequelize } from '../db'
import Sequelize from 'sequelize'

const Materia = sequelize.define('Materia', {
    id: { type: Sequelize.SMALLINT, primaryKey: true },
    nombre: Sequelize.STRING,
    desc_corta: Sequelize.STRING,
    id_carrera: {
        type: Sequelize.SMALLINT,
        references: 'carrera',
        referencesKey: 'id'
    },
    anio: Sequelize.INTEGER,
    cod_materia: Sequelize.STRING
}, { timestamps: false, tableName: 'materia' })

export default Materia