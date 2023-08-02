const express=require("express");
const app=express();
const mongoose =require("mongoose");
const dotenv =require("dotenv");
const Route=require("./routes")
const cors = require("cors")

app.use(cors())


dotenv.config();
const PORT= process.env.PORT || 8800
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>console.log("DB connected")).catch((err)=>console.log(err)); 

  app.use(express.json());
  
app.use("/api/tasks",Route);

app.listen(PORT,()=>{
    console.log(`app running on ${PORT}`)
})

