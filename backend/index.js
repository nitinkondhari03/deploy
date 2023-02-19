const express=require("express")
const cors=require("cors")
const { authenticate}=require('./middlewares/authenticate.middlewares')
const {noteRouter}=require('./routes/Notes.route')
const {connection}=require("./db")
const {userRouter}=require('./routes/User.routes')

const swaggerUI=require("swagger-ui-express")
const swaggerJsdoc=require("swagger-jsdoc")
const swaggerJSDoc = require("swagger-jsdoc")
require("dotenv").config()
const app=express()




app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("HOME PAGE")  
})

const options={
    definition:{
        openapi:"3.0.0",
        info:{
            title:"Learning Swagger for First time",
            versions:"1.0.0"
        },
        server:[
            {
                url:"http:/localhost:8080"
            }
        ]
    },
    apis:["./router/*.js"]
}

const swaggerSpec=swaggerJSDoc(options)
app.use("/api-doc",swaggerUI.serve,swaggerUI.setup(swaggerSpec))
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