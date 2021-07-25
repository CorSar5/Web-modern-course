// Update with your config settings.
const {db}= require('./.env')

module.exports = {
    client: 'pg',
    connection:db,
    pool: {
      min: 2,
      max: 20
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
