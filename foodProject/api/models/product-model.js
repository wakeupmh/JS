'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;
const productModel = new schema({
    nome:{trim:true, index:true, required:true, type:String},
    descricao:{type:String, required:true},
    idCategoria:{type:String, required:true, trim:true},
    preco:{type:String, required:true},
    peso:{type:String, required:true},
    ativo:{type:Boolean, required:true},
    foto:{type:String, required:true},
    dataCriacao:{type:Date, default:Date.now}
}, {versionKey:false});
productModel.pre('save', next =>{
    let now = new Date();
    if(!this.dataCriacao)
        this.dataCriacao = now;
    next();
});

module.exports = mongoose.model('product', productModel);