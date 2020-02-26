'use strict'
require('../models/category-model')
const repository = require('../repositories/category-repository');
const validation = require('../bin/helpers/validation');
const ctrlBase = require('../bin/base/controller-base');
const _repo = new repository();
function categoryController(){

}
categoryController.prototype.post = async (req, res) =>{
    let _validationContract = new validation();
    _validationContract.isRequired(req.body.titulo, 'Informe um titulo');
    _validationContract.isRequired(req.body.foto, 'Envie uma foto');
    _validationContract.isRequired(req.body.ativo, 'Informe a situação do produto');
    
    let categoryIsNameExists = await _repo.IsNameExists(req.body.titulo);
    if(categoryIsNameExists)
        _validationContract.isTrue((categoryIsNameExists.titulo != undefined), `Já existe o titulo ${req.body.titulo} cadastrado na nossa base!`);   
    ctrlBase.post(_repo, _validationContract, req, res);
};
categoryController.prototype.put = async (req, res) =>{
    let _validationContract = new validation();
    _validationContract.isRequired(req.body.titulo, 'Informe um titulo');
    _validationContract.isRequired(req.body.id, 'Informe o id a ser editado');
    _validationContract.isRequired(req.body.foto, 'Envie uma foto');
    _validationContract.isRequired(req.body.ativo, 'Informe a situação do produto');
    if(categoryIsNameExists){
        _validationContract.isTrue(
            (categoryIsNameExists.titulo != undefined) && 
            (categoryIsNameExists._id != req.params.id), 
            `Já existe o titulo ${req.body.titulo} cadastrado na nossa base!`
        );
    }
    ctrlBase.put(_repo, _validationContract, req, res);
};
categoryController.prototype.get = async (req, res) =>{
    ctrlBase.get(_repo, req, res);
};
categoryController.prototype.getById = async (req, res) =>{
    ctrlBase.getById(_repo, req, res); 
};
categoryController.prototype.delete = async (req, res) =>{
    ctrlBase.delete(_repo, req, res);
};

module.exports = categoryController;