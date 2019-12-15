import { sequelize } from '../db'
import Edificio from './Edificio'
import Sequelize from 'sequelize'

const Aula = sequelize.define('Aula', {
    id: { type: Sequelize.SMALLINT, autoIncrement: true, primaryKey: true },
    nombre: Sequelize.STRING,
    id_edificio: {
        type: Sequelize.SMALLINT,
        references: 'edificio',
        referencesKey: 'id'
    },
    piso: Sequelize.SMALLINT,
    capacidad: Sequelize.INTEGER,
    obs: Sequelize.STRING,
}, { timestamps: false, tableName: 'aula' })

Aula.hasOne(Edificio, { as: 'edificio', foreignKey: 'id', sourceKey: 'id_edificio' })

export default Aula