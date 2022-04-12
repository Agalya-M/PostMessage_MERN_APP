import express from 'express';
const router=express.Router();



router.get('/getuser',async(req,res)=>{
   // const data=await Postmessage.find();
    res.send("user data");

})



//module.exports=router;
export default router;