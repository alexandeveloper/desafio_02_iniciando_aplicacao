module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: '5433',
  username: 'usuario_meetup',
  password: 'senha_meetup',
  database: 'db_meetup',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
