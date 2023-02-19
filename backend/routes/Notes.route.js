const express=require("express")

const { NoteModel}=require("../model/Note.model")
const noteRouter=express.Router()

noteRouter.get("/",async(req,res)=>{
      const notes=await NoteModel.find()
  
      res.send(notes)
})

noteRouter.patch("/update/:id",async(req,res)=>{
      const payload=req.body
      const id=req.params.id

      const note=await NoteModel.findOne({"_id":id})
      const userID_in_note=note.userID
      const userID_making_req=req.body.userID
      try {
            if(userID_making_req===userID_in_note){
                  res.send({"msg":"you are not authorized"})
 
            }else{
                  await NoteModel.findByIdAndUpdate({"_id":id},payload) 
                  res.send("Update the note") 
            }
         
      } catch (err) {
           console.log(err)
           res.send({"msg":"Something went wrong"}) 
      }
})

noteRouter.post("/create",async(req,res)=>{
      const payload=req.body
      const note=new NoteModel(payload)
      await note.save()
      res.send({"msg":"Note Created"})
})


noteRouter.delete("delete",async(req,res)=>{
      const noteID=req.params.id
      await NoteModel.findByIdAndDelete({_id:noteID})
      res.send({"msg":`Note with id :${noteID} has been deleted`})
})

module.exports={
      noteRouter
}