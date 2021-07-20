const { db } = require('./.env')

module.exports = {
    client: 'postgresql',
    connection: {
        database: 'knowledge_final',
        user: 'postgres',
        password: 'abcd12' // sua senha 
},
	client: 'postgresql',
	connection: db,
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};

