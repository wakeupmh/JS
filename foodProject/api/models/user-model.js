'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;
const userModel = new schema({
    nome:{trim:true, index:true, required:true, type:String},
    email:{type:String, trim:true, required:true},
    endereco:{type:String, trim:true},
    senha:{type:String, required:true},
    foto:{type:String},
    ativo:{type:Boolean},
    dataCriacao:{type:Date, default:Date.now}
}, {versionKey:false});
userModel.pre('save', next =>{
    let now = new Date();
    if(!this.dataCriacao)
        this.dataCriacao = now;
    next();
});

module.exports = mongoose.model('user', userModel);