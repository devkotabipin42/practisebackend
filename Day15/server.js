require('dotenv').config()
const app = require('./src/app')

const ConnectedDB=require('./src/config/database')
ConnectedDB()

app.listen(3000,()=>{
  console.log('server is running in port 3000');
  
})