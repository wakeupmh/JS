'use strict'
require('../models/product-model')
const repository = require('../repositories/product-repository');
const ctrlBase = require('../bin/base/controller-base');
const validation = require('../bin/helpers/validation');
const _repo = new repository();
function productController(){

}
productController.prototype.post = async (req, res) =>{
    let _validationContract = new validation();
    _validationContract.isRequired(req.body.nome, 'Informe um nome');
    _validationContract.isRequired(req.body.descricao, 'Informe uma descrição');
    _validationContract.isRequired(req.body.preco, 'Informe um preço');
    _validationContract.isRequired(req.body.foto, 'Envie uma foto');
    _validationContract.isRequired(req.body.ativo, 'Informe a situação do produto');
    _validationContract.isTrue(!isNaN(req.body.preco), 'Informe um preço válido');
    
    // let productIsNameExists = await _repo.IsNameExists(req.body.nome);
    // if(productIsNameExists)
    //     _validationContract.isTrue((productIsNameExists.nome != undefined), `Já existe o nome ${req.body.nome} cadastrado na nossa base!`);   
    ctrlBase.post(_repo, _validationContract, req, res);
};
productController.prototype.put = async (req, res) =>{
    let _validationContract = new validation();
    _validationContract.isRequired(req.body.nome, 'Informe um nome');
    _validationContract.isRequired(req.body._id, 'Informe o id a ser editado');
    _validationContract.isRequired(req.body.descricao, 'Informe uma descrição');
    _validationContract.isRequired(req.body.preco, 'Informe um preço');
    _validationContract.isRequired(req.body.foto, 'Envie uma foto');
    _validationContract.isRequired(req.body.ativo, 'Informe a situação do produto');
    _validationContract.isTrue(!isNaN(req.body.preco), 'Informe um preço válido');
    
    // let productIsNameExists = await _repo.IsNameExists(req.body.nome);
    // if(productIsNameExists){
    //     _validationContract.isTrue(
    //         (productIsNameExists.nome != undefined) && 
    //         (productIsNameExists._id != req.params.id), 
    //         `Já existe o nome ${req.body.nome} cadastrado na nossa base!`
    //     );
    // }
   ctrlBase.put(_repo, _validationContract, req, res);
};
productController.prototype.get = async (req, res) =>{
    ctrlBase.get(_repo, req, res);
};
productController.prototype.getById = async (req, res) =>{
    ctrlBase.getById(_repo, req, res);
};
productController.prototype.getByIdCateg = async(req, res) =>{
    try {
        let result = await _repo.getByIdCateg(req.params.id);
        res.status(200).send(result);
    } catch (err) {
        console.log('Post com erro:',err);
        res.status(500).send({message:'Erro no processamento', error:err});
    }
};
productController.prototype.delete = async (req, res) =>{
    ctrlBase.delete(_repo, req, res);
};

module.exports = productController;