module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '162.241.203.82'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'dmades80_cepnovo'),
      user: env('DATABASE_USERNAME', 'dmades80_cep'),
      password: env('DATABASE_PASSWORD', 'Olinad2307'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
