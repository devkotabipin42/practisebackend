require('dotenv').config()
const app = require('./src/app')
const connectToDo=require('./src/config/database')
connectToDo()

app.listen(3000,()=>{
  console.log('server is running in 3000');
  
})