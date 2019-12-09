module.exports = {
  host: '127.0.0.1',
  username: 'docker',
  password: 'docker',
  database: 'nodeauth',
  dialect: 'postgres',
  operatorAliases: false,
  logging: false,
  define: {
    timestamps: true,
    undescored: true,
    undescoredAll: true
  }
}