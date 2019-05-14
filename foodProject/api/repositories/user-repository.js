require('../models/user-model'); //registrando
const base = require('../bin/base/repository-base');
const md5 = require('md5');

class userRepository{
    constructor(){
        this._base = new base('user');
        this._projection = 'nome email _id';
        this._projPhoto = 'nome email _id foto';
    }   
    async auth(mail, password){
        let _hashPassword = md5(password);
        return await this._base._model.findOne({email:mail, senha:_hashPassword},this._projection);
    }
    async create(data){
        let createdUser = await this._base.create(data);
        return this._base._model.findById(createdUser._id, this._projection);
    }
    async update(id,data){
        let updatedUser = await this._base.update(id, data);
        return this._base._model.findById(updatedUser._id);
    }
    async getAll(){
        return await this._base._model.find({}, this._projPhoto);
    }
    async getById(id){
        return await this._base._model.findById(id);
    }
    async delete(id){
        return await this._base.delete(id);
    }
    async isEmailExists(mail){
        return await this._base._model.findOne({email:mail}, this._projection);
    }
}
module.exports = userRepository;