import * as Sequelize from 'sequelize'
import * as Promise from 'bluebird'

function up (utils: {
  transaction: Sequelize.Transaction,
  queryInterface: Sequelize.QueryInterface,
  sequelize: Sequelize.Sequelize
}): Promise<void> {
  const q = utils.queryInterface

  const data = {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }

  return q.addColumn('Videos', 'nsfw', data)
    .then(() => {
      data.defaultValue = null

      return q.changeColumn('Videos', 'nsfw', data)
    })
}

function down (options, callback) {
  throw new Error('Not implemented.')
}

export {
  up,
  down
}