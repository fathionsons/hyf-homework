const express=require('express');
const router=express.Router();

router.get('/', (req,res) =>{
    res.send('Fathi is a cute guy');

    });
module.exports=router;