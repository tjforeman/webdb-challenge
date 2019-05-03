const knex=require('knex');
const router = require('express').Router();
const db =require('../data/dbConfig.js');

router.post('/', (req, res) => {
    if (!req.body.description || !req.body.notes || !req.body.project_id){
        res.status(400).json({message:'Description, notes, and project id are all required to add an Action'})
    }else{
    db('actions')
    .insert(req.body,'id')
    .then(action =>{
        res.status(200).json(action)
        })
    .catch(err=>{
        res.status(500).json(err)
    })
    }
      });

router.get('/', (req, res) => {
    db('actions')
    .then(action=>{
      res.status(200).json(action)
    }).catch(err =>{
        res.status(500).json({error:err,message:'Unable to get the Actions at this time.'})
    })
  });

module.exports=router