const express =require("express");
const router = express.Router();
//tüm ürünleri getir (read-all)

router.get("/",async(reg,res)=>{
    res.send("ürünler, getir.")
})



module.exports=router;