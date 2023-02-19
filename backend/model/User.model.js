const mongoose=require("mongoose")


const userScema=mongoose.Schema({
      name:String,
      email:String,
      pass:String,
      age:Number
})

const UserModel=mongoose.model("user",userScema)

module.exports={
      UserModel
}