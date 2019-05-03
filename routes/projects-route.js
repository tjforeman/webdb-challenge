const knex=require('knex');
const router = require('express').Router();
const db =require('../data/dbConfig.js');

router.post('/', (req, res) => {
    if (!req.body.project_name){
        res.status(400).json({message:'A name is required to add a Project'})
    }else{
    db('projects')
    .insert(req.body,'id')
    .then(projects =>{
        res.status(200).json(projects)
        })
    .catch(err=>{
        res.status(500).json(err)
    })
    }
      });

router.get('/', (req, res) => {
    db('projects')
    .then(projects=>{
      res.status(200).json(projects)
    }).catch(err =>{
      res.status(500).json({error:err,message:'Unable to get the Projects at this time.'})
    })
  });


module.exports=router