'use strict'
require('../models/user-model');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const repository = require('../repositories/user-repository');
const ctrlBase = require('../bin/base/controller-base');
const validation = require('../bin/helpers/validation');
const variables = require('../bin/configuration/variables');
const _repo = new repository();

function userController(){

}
userController.prototype.post = async (req, res) =>{
    let _validationContract = new validation();
    _validationContract.isRequired(req.body.email, 'Informe seu e-mail');
    _validationContract.isRequired(req.body.nome, 'Informe seu nome');
    _validationContract.isEmail(req.body.email, 'O e-mail informado é inválido');
    _validationContract.isRequired(req.body.senha, 'A senha informada é inválida');
    _validationContract.isRequired(req.body.senhaConfirmacao, 'A senha de confirmação é inválida')
    _validationContract.isTrue(req.body.senha != req.body.senhaConfirmacao, 'As senhas são diferentes');
    if(req.body.email){
        let userIsEmailExists = await _repo.isEmailExists(req.body.email);
        if(userIsEmailExists)
            _validationContract.isTrue((userIsEmailExists.nome != undefined), `Já existe o e-mail ${req.body.email} cadastrado na nossa base!`)
        
    }
    if( req.body.senha)
        req.body.senha = md5(req.body.senha);   
    ctrlBase.post(_repo, _validationContract, req, res);
    
};
userController.prototype.put = async (req, res) =>{
    let _validationContract = new validation();
    _validationContract.isRequired(req.body.email, 'Informe seu e-mail');
    _validationContract.isRequired(req.body.nome, 'Informe seu nome');
    _validationContract.isEmail(req.body.email, 'O e-mail informado é inválido');
    
    let userIsEmailExists = await _repo.isEmailExists(req.body.email);
    if(userIsEmailExists){
        _validationContract.isTrue(
            (userIsEmailExists.nome != undefined) && 
            (userIsEmailExists._id != req.params.id), 
            `Já existe o e-mail ${req.body.email} cadastrado na nossa base!`
        );
    }
    ctrlBase.put(_repo, _validationContract, req, res);
};
userController.prototype.get = async (req, res) =>{
    ctrlBase.get(_repo, req, res);
};
userController.prototype.getById = async (req, res) =>{
    ctrlBase.getById(_repo, req, res);
};
userController.prototype.delete = async (req, res) =>{
    ctrlBase.delete(_repo, req, res);
};
userController.prototype.auth = async (req, res)=>{
    let _validationContract = new validation();
    let mail = req.body.email; let senha = req.body.senha;
    _validationContract.isRequired(mail, 'Informe seu e-mail');
    _validationContract.isRequired(senha, 'Informe sua senha');
    _validationContract.isEmail(mail, 'O e-mail informado é inválido');
    if(!_validationContract.isValid()){
        res.status(400).send({message:'Não foi possível efetuar o login', validation: _validationContract.errors()});
        return;
    }
    let userFinded = await _repo.auth(mail, senha);
    if(userFinded){
        res.status(200).send({
            usuario: userFinded,
            token: jwt.sign({user: userFinded}, variables.Security.secretKey)
        });
    }else{
        res.status(400).send({message:'Usuário e senha não encontrados!', validation: _validationContract.errors()});
    }

}
module.exports = userController;