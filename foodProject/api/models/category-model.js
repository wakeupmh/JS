'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;
const categoryModel = new schema({
    titulo:{trim:true, index:true, required:true, type:String},
    descricao:{type:String},
    ativo:{type:Boolean, required:true},
    foto:{type:String, required:true},
    dataCriacao:{type:Date, default:Date.now}
}, {versionKey:false});
categoryModel.pre('save', next =>{
    let now = new Date();
    if(!this.dataCriacao)
        this.dataCriacao = now;
    next();
});

module.exports = mongoose.model('category', categoryModel);