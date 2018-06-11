import * as Sequelize from 'sequelize'
import config from '../secret'

const sequelize = new Sequelize(config.database, config.username, config.password, {
  dialect: 'mysql',
  define: {
    underscored: false,
    freezeTableName: false,
    // syncOnAssociation: true,
    charset: 'utf8',
    timestamps: true,
  },
  dialectOptions: {
    collate: 'utf8_general_ci'
  }
})

const USER = sequelize.define('users', {
  id: { type: Sequelize.MEDIUMINT, primaryKey: true },
  user_id: Sequelize.STRING,
  last_active: Sequelize.DATE
})

const TODO = sequelize.define('todos', {
  id: { type: Sequelize.MEDIUMINT, primaryKey: true },
  parent: Sequelize.MEDIUMINT,
  content: Sequelize.TEXT,
  status: Sequelize.TINYINT,
  date: Sequelize.DATE
})

export { sequelize, USER, TODO }