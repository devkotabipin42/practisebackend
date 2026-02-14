const express = require('express')
const app = express()
const noteModel= require('./model/notes.model')
app.use(cors())

app.use(express.json())
app.use(express.static('./public'))
app.post('/api/notes',async(req,res)=>{
  const{title,description,age} = req.body
  const note = await noteModel.create({
    title,description,age
  })
  res.status(201).json({
    message:'Note created',note
  })
})
app.get('/api/notes',async(req,res)=>{
  const note = await noteModel.find()
  res.status(200).json({
    message:"create sucessfull",note
  })
})

app.delete('/api/notes/:id',async(req,res)=>{
  const id = req.params.id
  await noteModel.findByIdAndDelete(id)
  res.status(200).json({
    message:"deleted"
  })
})

app.patch('/api/notes/:id',async(req,res)=>{
  const id = req.params.id
  const {title,description,age} = req.body
  const note = await noteModel.findByIdAndUpdate(id,{title,description,age})
  res.status(200).json({
    message:"update sucessfull",note
  })
})
module.exports= app