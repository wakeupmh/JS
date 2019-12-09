module.exports = {
  host: '127.0.0.1',
  username: 'postgres',
  password: 'postgres',
  database: 'nodeauth',
  dialect: 'postgres',
  operatorAliases: false,
  logging: false,
  define: {
    "createdAt": "created_at",
    "updatedAt": "updated_at",
    timestamps: true,
    undescored: true,
    undescoredAll: true
  }
}