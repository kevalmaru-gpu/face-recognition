// Update with your config settings.

module.exports = {

  development: {
  client: 'pg',
  connection: {
    connectionString : "postgres://vyexavrnihyasz:1c31e58bff115e4679f4dbdf33f6c9c90cec126a14febb848289f75eff07aee0@ec2-52-23-87-65.compute-1.amazonaws.com:5432/d1s4uoreqf739s",
    ssl: { rejectUnauthorized: false }
  },
  migrations: {
    directory: __dirname + '/knex/migrations',
  },
  seeds: {
      directory: __dirname + '/knex/seeds'
  }
},

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
