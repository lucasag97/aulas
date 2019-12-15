import { sequelize } from '../db'
import Sequelize from 'sequelize'

const Notificacion = sequelize.define('Notificacion', {
    id: { type: Sequelize.SMALLINT, primaryKey: true },
    id_user_emisor: {
        type: Sequelize.SMALLINT,
        references: 'user',
        referencesKey: 'id'
    },
    id_user_receptor: {
        type: Sequelize.SMALLINT,
        references: 'user',
        referencesKey: 'id'
    },
    notificacion: Sequelize.STRING,
    fecha: Sequelize.DATE,
    borra_r: Sequelize.BOOLEAN,
    borra_e: Sequelize.BOOLEAN,
    visto: Sequelize.BOOLEAN
}, { timestamps: false, tableName: 'notificacion' })

export default Notificacion