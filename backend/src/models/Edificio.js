import { sequelize } from '../db'
import Sede from './Sede'
import Sequelize from 'sequelize'

const Edificio = sequelize.define('Edificio', {
    id: { type: Sequelize.SMALLINT, primaryKey: true },
    id_sede: {
        type: Sequelize.SMALLINT,
        references: 'sede',
        referencesKey: 'id'
    },
    nombre: Sequelize.STRING,
    cantidad_aulas: Sequelize.INTEGER
}, { timestamps: false, tableName: 'edificio' })

Edificio.hasOne(Sede, { as: 'sede', foreignKey: 'id', sourceKey: 'id_sede' })

export default Edificio