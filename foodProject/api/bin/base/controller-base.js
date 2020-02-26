exports.post = async(repo, validationContract, req, res) =>{
    try {
        let data = req.body;
        if(!validationContract.isValid()){
            res.status(400).send({
                message:'Existem dados inválidos na sua requisição!', 
                validation: validationContract.errors()
            }).end();
            return;
        }
        let result = await repo.create(data);
        res.status(201).send(result);
    } catch (err) {
        console.log('Post com erro:',err);
        res.status(500).send({message:'Erro no processamento', error:err});
    }
}
exports.put = async(repo, validationContract, req, res) =>{
    try {
        let data = req.body;
        let id = req.params.id;
        if(!validationContract.isValid()){
            res.status(400).send({
                message:'Existem dados inválidos na sua requisição!', 
                validation: validationContract.errors()
            }).end();
            return;
        }
        let result = await repo.update(id,data);
        console.log(result);
        res.status(202).send(result);
    } catch (err) {
        console.log('Post com erro:',err);
        res.status(500).send({message:'Erro no processamento', error:err});
    }
}
exports.get = async(repo, req, res) =>{
    try {
        let result = await repo.getAll();
        res.status(200).send(result);
    } catch (err) {
        console.log('Post com erro:',err);
        res.status(500).send({message:'Erro no processamento', error:err});
    }
    
}
exports.getById = async(repo, req, res) =>{
    try {
        let id = req.params.id;
        if(id){
            let result = await repo.getById(id);
            res.status(200).send(result);
        }else{
            res.status(400).send({message:'O parametro Id precisa ser informado'})
        }
        
    } catch (err) {
        console.log('Post com erro:',err);
        res.status(500).send({message:'Erro no processamento', error:err});
    }
}
exports.delete = async(repo, req, res) =>{
    try {
        let id = req.params.id;
        if(id){
            let result = await repo.delete(id);
            res.status(204).send({message:'Deletado com sucesso!'});
        }else{
            res.status(400).send({message:'O parametro Id precisa ser informado'})
        }
        
    } catch (err) {
        console.log('Post com erro:',err);
        res.status(500).send({message:'Erro no processamento', error:err});
    }
}