const mongoose = require('mongoose')

function connectToDo(){
  mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    console.log('connected to DB');
    
  })
}

module.exports=connectToDo