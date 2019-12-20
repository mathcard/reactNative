const Box = require('../models/Box');

//Criando o Box
class BoxController{
    async store(req, res){    
        const box = await Box.create({title: req.body.title}); 
        return res.json(box);
    }

    async show(req, res){
        const box = await Box.findById(req.params.id).populate({
            path: "files",
            options: { sort: {createdAt: -1 }} //ordena de forma decrescente
        });
        return res.json(box);
    }
}

module.exports = new BoxController();