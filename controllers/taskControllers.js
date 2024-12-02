const task = require('../models/taskModel');


//get method
const getTasks = async(req,res)=>{
    try{
        const data = await task.find({});
        res.status(200).send({
            success:true,
            message:"Data of tasks ",
            data
        })

    }
    catch(error){
        res.status(500).send({
            success: false,
            message:"INTERVAL SERVER ERROR",
            error
        })
    }
}
//..........................................................


//post method:
const addTask = async(req,res)=>{
    try{
        const {title, description} = req.body;
        if (!title || !description) {
            res.status(400).send({ // Changed 404 to 400 (Bad Request)
                success: false,
                message: "All fields are mandatory: title, description, and date."
            });
        }
        else{
            await new task({
                title,
                description
                
            }).save();
    
            res.status(201).send({ // Changed status code to 201 (Created)
                success: true,
                message: "Task created successfully"
            });
         }
        }
    
    catch(error){
        res.status(500).send({
            success: false,
            message:"INTERVAL SERVER ERROR",
            error: error.message || "Unknown error"
        })
    }
    

}
//..............................................................

// update method:

const updateTask = async(req,res)=>{
    try
    {
        const task_id = req.params.id;
        await task.updateOne({_id:task_id},{$set:req.body});
        res.status(200).send({
            success:true,
            message:"task update successfully"
        })
    }
    catch(error)
    {
        res.status(500).send({
            success: false,
            message:"INTERVAL SERVER ERROR",
            error: error.message || "Unknown error"
        })
    }
}





//..............................................................

//delete method:
const deleteTask = async (req,res)=>{
    try{
        const task_id = req.params.id;
        await task.deleteOne({_id: task_id});

        res.status(200).send({
            success:true,
            message:"delete task successfully"
        })
    }
    catch(error){
        res.status(500).send({
            success: false,
            message:"INTERVAL SERVER ERROR",
            error: error.message || "Unknown error"
        })
    }
}


//..............................................................
module.exports={getTasks, addTask, updateTask, deleteTask};