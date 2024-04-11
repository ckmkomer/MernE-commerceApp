const express =require("express");
const router = express.Router();


// diğer router dosyaları içe aktarıyoruz

const productRoute = require("./product.js");
const categoryRoute = require("./categories.js");


//her rotayı ilgili yol altında kullanıyoruz.
router.use("./categories,",categoryRoute);
router.use("./product,",productRoute);



module.exports=router;