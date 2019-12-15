import { sequelize } from '../db'
import Sequelize from 'sequelize'

const Comision = sequelize.define('Comision', {
    id: { type: Sequelize.SMALLINT, primaryKey: true },
    numero: Sequelize.INTEGER,
    id_materia: {
        type: Sequelize.SMALLINT,
        references: 'materia',
        referencesKey: 'id'
    },
    carga_horaria_semanal: Sequelize.INTEGER,
    id_ciclo: {
        type: Sequelize.SMALLINT,
        references: 'ciclo_lectivo',
        referencesKey: 'id'
    },
    id_turno: {
        type: Sequelize.SMALLINT,
        references: 'turno',
        referencesKey: 'id'
    }
}, { timestamps: false, tableName: 'comision' })

export default Comision