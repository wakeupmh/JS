const variables = {
    Api:{
        port: process.env.port || 3000
    },
    Database:{
        connection: process.env.connection || "mongodb+srv://<domain>:senha@cluster0-x526p.mongodb.net/<document>?retryWrites=true"
    },
    Security:{
        secretKey: '2d59fbb85d86f038d0c9ce012b601410'
    }
}
module.exports = variables;
