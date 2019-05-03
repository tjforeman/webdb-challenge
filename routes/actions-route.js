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
    })
    .catch(err =>{
        res.status(500).json({error:err,message:'Unable to get the Actions at this time.'})
    })
  });

  router.get('/:id', (req, res) => {
    db('actions')
    .where({id:req.params.id})
    .first()
    .then(action=>{
      if(action){
      res.status(200).json(action)
      }else{
        res.status(404).json({message:'the specified Action does not exist'})
      }
    })
    .catch(err =>{
      res.status(500).json(err)
    })
  });

  router.put('/:id', (req, res) => {
    if (!req.body.description || !req.body.notes || !req.body.project_id){
        res.status(400).json({message:'Description, notes, and project id are all required to update an Action'})
    }else{
      db('actions')
      .where({id:req.params.id})
      .update(req.body)
      .then(count=>{
      if (count>0) {
        res.status(200).json({message:`${count} record was updated`})
      }else{
        res.status(404).json({message:'The specified Action does not exist'})
      }
    })
    .catch(err =>{
      res.status(500).json({error:err,message:'Unable to update the Action at this time'})
    })
}
  });
  
  router.delete('/:id', (req, res) => {
    db('actions')
    .where({id:req.params.id})
    .del()
    .then(count =>{
        if (count>0){
        res.status(200).json({message:`${count} Action was deleted`})
        }else{
        res.status(400).json({message:'the specified Action does not exist'})
          }
        })
    .catch(err =>{
        res.status(500).json(err)
        })
      });

module.exports=router