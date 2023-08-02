const router=require("express").Router();
const Data=require("./Data");



//here we are uploading the data
router.post('/', async (req, res) => {
  const data={
    title:req.body.title,
    desc:req.body.desc,
    status:req.body.status,
  }
  const newData= new Data(data);
    const existTitle = await Data.findOne({ name: req.body.title});

    const alert={message:"alert"};
    if (existTitle) {
      res.status(500).json(alert);
    }else{
      try{
        const savedData= await newData.save();
        res.status(201).json(savedData);
        }catch(err){
        res.status(500).json(err);
      }
    }
    });
    
    
  
  //fecthing the data from the database and sending it to the front end
  router.get('/', async (req, res) => {
    try{
      const getData = await Data.find();
      res.status(200).json(getData)
    }catch(err){
      res.status(500).json(err);
    }
  });
  
  //updating the data
  router.put('/:id', async (req, res) => {
    const newData= new Data({
      title:req.body.title,
      desc:req.body.desc,
      status:req.body.status
      });
      
      try{
        const updatedData= await Data.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json(updatedData);
    }catch(err){
        res.status(500).json(err);
    }
  });
  
  //deleting the data
  router.delete('/:id',async (req, res) => {

    try{
      await Data.findByIdAndDelete(req.params.id);
      res.status(200).json("the data has been deleted");
    }catch(err){
      res.status(500).json("err");
    }
  });
  
module.exports=router;