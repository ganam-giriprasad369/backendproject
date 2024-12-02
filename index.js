const express = require('express');
const connectdb = require('./config/db');// to connect the mongodb atlas
const task = require('./models/taskModel'); // this is mongoose schema model(collection inside fields).
const taskRoutes = require('./routes/taskRoutes');//imports the routes folder path.
const cors = require('cors');


const app = express();
app.use(express.json());

app.use(cors());






app.use('/api/v1/tasks',taskRoutes);// to use routes for give url path/.

app.get('/', async(req,res)=>{
    const data = await new task({
        title:"summer holiday homeWork",
        description:"completed the homework on time , it is due time of :23/8/2222",
        date:new Date()
    }).save();

    res.send({
        data,
        message:"reading the data"
    })
})

app.listen(4000,()=>{
    console.log('localhost is connected : 4000...')
})
connectdb();