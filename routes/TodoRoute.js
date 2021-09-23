const router = require('express').Router();
const Todo = require('../models/Todo');

router.post('/', async (req, res) => {
    const newTask = new Todo(req.body);
    try{
        const savedTask = await newTask.save();
        res.status(200).json(savedTask);
    }catch(err){
        res.status(500).json(err);
    }

});

router.put('/:id',async (req,res) => {
    try{
        const taskupdate = await Todo.findById(req.params.id);
        const updatedtask = await Todo.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{
            new:true
        })
        res.status(200).json(updatedtask);
        
        
    }catch(err){
        res.status(500).json(err);
    }
})

router.delete('/:id',async (req, res) => {
    try{
        const deletetask = await Todo.findById(req.params.id);
        await Todo.findByIdAndDelete(req.params.id)
        res.status(200).json("Task Deleted");
    }catch(err){
        res.status(500).json(err);
    }
    
})

router.get('/', async (req, res) => {
    try{
        const alltask = await Todo.find()
        res.status(200).json(alltask);

    }catch(err){
        res.status(500).json(err);
    }
    

})

module.exports = router;