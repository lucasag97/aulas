import { sequelize } from '../db'
import User from './User'
import Sequelize from 'sequelize'
import NotiHelper from '../utils/NotiHelper'

const Notificacion = sequelize.define('Notificacion', {
    id: { type: Sequelize.SMALLINT, autoIncrement: true, primaryKey: true },
    id_user_emisor: {
        type: Sequelize.SMALLINT,
        references: { model: 'User', key: 'id'},
        required: true
    },
    id_user_receptor: {
        type: Sequelize.SMALLINT,
        references: 'user',
        referencesKey: 'id',
        required: true
    },
    notificacion: Sequelize.STRING,
    fecha: { type: Sequelize.DATE },
    borra_r: Sequelize.BOOLEAN,
    borra_e: Sequelize.BOOLEAN,
    visto: Sequelize.BOOLEAN
}, { timestamps: false, tableName: 'notificacion' })

Notificacion.hasOne(User, { as: 'userReceptor', foreignKey: 'id', sourceKey: 'id_user_receptor' })
Notificacion.hasOne(User, { as: 'userEmisor', foreignKey: 'id', sourceKey: 'id_user_emisor' })

NotiHelper.setMethods(Notificacion, User)


export default Notificacion