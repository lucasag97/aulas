import { sequelize } from '../db'
import Sequelize from 'sequelize'

const EspecialCalendar = sequelize.define('EspecialCalendar', {
    id: { type: Sequelize.SMALLINT, primaryKey: true },
    id_aula: {
        type: Sequelize.SMALLINT,
        references: 'aula',
        referencesKey: 'id'
    },
    inicio: Sequelize.DATE,
    fin: Sequelize.DATE,
    nombre: Sequelize.STRING,
    descripcion: Sequelize.STRING,
    momento: Sequelize.DATE,
    id_ucrea: {
        type: Sequelize.SMALLINT,
        references: 'user',
        referencesKey: 'id'
    },
    id_umodifica: {
        type: Sequelize.SMALLINT,
        references: 'user',
        referencesKey: 'id'
    },
    id_carrera: {
        type: Sequelize.SMALLINT,
        references: 'carrera',
        referencesKey: 'id'
    },
    examen_final: Sequelize.BOOLEAN,
    id_materia: {
        type: Sequelize.SMALLINT,
        references: 'materia',
        referencesKey: 'id'
    },
    id_instituto: {
        type: Sequelize.SMALLINT,
        references: 'instituto',
        referencesKey: 'id'
    },
}, { timestamps: false, tableName: 'especial_calendar' })

export default EspecialCalendar