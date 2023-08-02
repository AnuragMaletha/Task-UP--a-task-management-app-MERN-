const mongoose =require("mongoose");

const dataSchema=new mongoose.Schema({
    title:{type:String,required:true,unique:true},
    desc:{type:String,required:true,unique:true},
    status:{type:String,required:true}
},
    {timestamps:true}
);

module.exports=mongoose.model("Data",dataSchema);