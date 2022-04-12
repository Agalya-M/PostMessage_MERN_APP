import express from 'express';
const router=express.Router();
import  Postmessage  from '../models/postMessages.js';


router.get('/getposts',async(req,res)=>{
    const data=await Postmessage.find();
    res.send(data);

})

router.post('/createpost',async(req,res)=>{
    try{
    const data=req.body;
    console.log(data)
    const newpost=new Postmessage({...data});
    newpost.save();
    res.json(newpost);
    }
    catch(err){
        res.send(err);
        
    }
    

})

router.get('/findone/:id',async(req,res)=>{
    try{
        const data=await Postmessage.findOne(
            {_id:req.params.id},
)
        res.json(data)
        
        
    }
    catch(err){
        console.log(err)

    }
})

router.put('/updatepost/:id',async(req,res)=>{
    try{
        const data=await Postmessage.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true})
        res.status(201).json(data)
        
        
    }
    catch(err){
        console.log(err)

    }
})

router.delete('/deletepost/:id',async(req,res)=>{
    try{
        const data=await Postmessage.deleteOne(
            {_id:req.params.id}
            )
        res.send("Deleted")
        
        
    }
    catch(err){
        console.log(err)

    }
})




//module.exports=router;
export default router;