require('../models/product-model'); //registrando
const base = require('../bin/base/repository-base');


class productRepository{
    constructor(){
        this._base = new base('product');
    }   
    async IsNameExists(name){
        return await this._base._model.findOne(name,'nome _id');
    }
    async getByIdCateg(idCateg){
        return await this._base._model.find({idCategoria:idCateg});
    }
    async create(data){
        return await this._base.create(data);
    }
    async update(id,data){
        return await this._base.update(id, data);
    }
    async getAll(){
        return await this._base.getAll();
    }
    async getById(id){
        return await this._base.getById(id);
    }
    async delete(id){
        return await this._base.delete(id);
    }
}
module.exports = productRepository;