const express=require("express");
const app=express();
const mongoose =require("mongoose");
const dotenv =require("dotenv");
const Route=require("./routes")


dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>console.log("DB connected")).catch((err)=>console.log(err)); 

  app.use(express.json());
  
app.use("/api/tasks",Route);

app.listen(8800,()=>{
    console.log("app running")
})

