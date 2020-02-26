const conexao = require('../conexao')

const executaQuery = (query) => {
  return new Promise((resolve, reject) => {
    conexao.query(query, (erro, resultados, campos) => {
      if (erro) {
        reject(erro)
      } else {
        resolve(resultados) 
      }
    })
  })
}

module.exports = executaQuery
