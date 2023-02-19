const express=require("express")
const cors=require("cors")
const { authenticate}=require('./middlewares/authenticate.middlewares')
const {noteRouter}=require('./routes/Notes.route')
const {connection}=require("./db")
const {userRouter}=require('./routes/User.routes')
require("dotenv").config()
const app=express()




app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("HOME PAGE")  
})

app.use("/users",userRouter)
app.use(authenticate)
app.use("/note",noteRouter)


app.listen(8080,async()=>{
      try {
          await connection
          console.log("Connect to   DB")  
      } catch (error) {
            console.log(err.message)
      }
      console.log("Server is running at port 8080")
})