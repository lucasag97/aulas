import { sequelize } from '../db'
import Sequelize from 'sequelize'

const EventoCalendar = sequelize.define('EventoCalendar', {
    id: { type: Sequelize.SMALLINT, primaryKey: true },
    id_aula: {
        type: Sequelize.SMALLINT,
        references: 'aula',
        referencesKey: 'id'
    },
    id_comision: {
        type: Sequelize.SMALLINT,
        references: 'comision',
        referencesKey: 'id'
    },
    id_user_asigna: {
        type: Sequelize.SMALLINT,
        references: 'user',
        referencesKey: 'id'
    },
    id_umodifica: {
        type: Sequelize.SMALLINT,
        references: 'user',
        referencesKey: 'id'
    },
    hora_ini: Sequelize.DATE,
    hora_fin: Sequelize.DATE,
    dow: Sequelize.STRING,
    id_instituto: {
        type: Sequelize.SMALLINT,
        references: 'instituto',
        referencesKey: 'id'
    },
    id_ciclo: {
        type: Sequelize.SMALLINT,
        references: 'ciclo_lectivo',
        referencesKey: 'id'
    },
    momento: Sequelize.DATE,
}, { timestamps: false, tableName: 'evento_calendar' })

export default EventoCalendar