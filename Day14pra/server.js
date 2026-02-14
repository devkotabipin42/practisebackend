require('dotenv').config()
const app = require('./src/app')
const ConnectDbase= require('./src/config/database')
ConnectDbase()

app.listen(3000,()=>{
  console.log('server is running port  in 3000');
  
})