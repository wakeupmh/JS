require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
}); 
module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT || 'postgres',
  storage: './__tests__/database.sqlite',
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