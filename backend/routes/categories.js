const express =require("express");
const router = express.Router();
//tüm kategorileri getir (read-all)

router.get("/",async(reg,res)=>{
    res.send("kategorileri getir.")
})



module.exports=router;