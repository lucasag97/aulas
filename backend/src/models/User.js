import { sequelize } from '../db'
import Sequelize from 'sequelize'

const User = sequelize.define('User', {
    id: { type: Sequelize.SMALLINT, primaryKey: true },
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    profile_picture: Sequelize.STRING,
    authKey: Sequelize.STRING,
    accessToken: Sequelize.STRING,
    activate: Sequelize.SMALLINT,
    rol: Sequelize.SMALLINT,
    idInstituto: {
        type: Sequelize.SMALLINT,
        references: 'instituto',
        referencesKey: 'id'
    },
    verification_code: Sequelize.STRING
}, { timestamps: false })

export default User