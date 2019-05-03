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

  router.get('/:id',(req,res)=>{
      db('projects')
      .where({id:req.params.id})
      .first()
      .then(project=>{
          if(project){
          db('actions')
          .where({project_id:req.params.id})
          .then(actionsInProject=>{
            project.actions=actionsInProject;
            res.status(200).json(project)
          })
        }else{
            res.status(404).json({message:'The project with the Specified ID does not exist'})
        }
      })
      .catch(err=>{
          res.status(500).json({error:err,message:'Unable to get the Specified Project at this time.'})
      })
  })

  router.put('/:id', (req, res) => {
    if (!req.body.project_name){
        res.status(400).json({message:'A name, is required to update an Project'})
    }else{
      db('projects')
      .where({id:req.params.id})
      .update(req.body)
      .then(count=>{
      if (count>0) {
        res.status(200).json({message:`${count} record was updated`})
      }else{
        res.status(404).json({message:'The specified Project does not exist'})
      }
    })
    .catch(err =>{
      res.status(500).json({error:err,message:'Unable to update the Project at this time'})
    })
}
  });
      router.delete('/:id', (req, res) => {
        db('projects')
        .where({id:req.params.id})
        .del()
        .then(count =>{
            if (count>0){
            res.status(200).json({message:`${count} Project was deleted`})
            }else{
            res.status(400).json({message:'the specified Project does not exist'})
              }
            })
        .catch(err =>{
            res.status(500).json({error:err,message:'Unabled to delete the Project at this time.'})
            })
          });


module.exports=router