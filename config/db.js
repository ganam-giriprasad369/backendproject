const mongoose = require('mongoose');
const connectdb = async ()=>{
    try{
        await mongoose.connect('mongodb+srv://Giriprasad:EdF0ApmfPENyyTFY@cluster0.xe3qu.mongodb.net/mydb');
        console.log('connected database!');
    }
    catch(error){
        console.log(error);
    }
}

module.exports = connectdb;