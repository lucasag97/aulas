import { sequelize } from '../db'
import Sequelize, { DataTypes } from 'sequelize'

const User = sequelize.define('User', {
    id: { type: Sequelize.SMALLINT, autoIncrement: true, primaryKey: true },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
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