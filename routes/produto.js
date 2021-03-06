const express = require('express');
const router = express.Router();
const Produto = require('../models/produto');
const mongoose = require('mongoose');
router.get('/', (req, res) =>{
    Produto.find()
    .exec()
    .then(doc=>{
        res.status(200).json(doc)
    })
    .catch(erro=>{
        res.status(500).json({
            erro:erro
        })
    })
});
//recuperando dados
router.get('/:produtoId', (req, res) =>{
    const id = req.params.produtoId;
    if(id ==='unidesc'){
        res.status(200).json({
            message:'produto encontrado',
            _id: id
        });
    }
    else{
        res.status(400).json({
            message:'produto não encontrado'
        })
    }
});
//postando dados
router.post('/', (req, res) =>{
    const produto = new Produto({
        _id: new mongoose.Types.ObjectId(), 
        nome: req.body.nome,
        preco: req.body.preco
    });
    produto.save()
    .then(result =>{
        res.status(201).json({
            message:'Post Request para /produtos',
            produto: produto
        });
    })
    .catch(erro =>{
        res.status(500).json({
            error:erro
        })   
    });   
});
//deletando dados
router.delete('/:produtoId', (req, res) =>{
    const id = req.params.produtoId;
    console.log(req.params.produtoId);
    if(id === id){
        res.status(200).json({
           
            message:'produto apagado'
            
        });
    }
    else{
        res.status(400).json({
            message:'produto não encontrado'
        })
    }
});
//get com id
router.get('/:produto', (req, res) =>{
    const id = req.params.produtoId;
    console.log(req.params.produtoId);
    if(id === id){
        res.status(200).json({
            message:'produto encontrado',
            _id: id
        });
    }
    else{
        res.status(400).json({
            message:'produto não encontrado'
        })
    }
});
//Atualizando dados
router.put('/', (req, res) =>{
    const produto = new Produto({
        _id: new mongoose.Types.ObjectId(), 
        nome: req.body.nome,
        preco: req.body.preco
    });
    produto.save()
    .then(result =>{
        res.status(201).json({
            message:'Put Request para /produtos',
            message:'Produto alterado',
            produto: produto
        });
    })
    .catch(erro =>{
        res.status(500).json({
            error:erro
        })   
    });   
});


module.exports = router;