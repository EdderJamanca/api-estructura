const {Router}=require('express');
const cliente=require('./../clientes/router');


const router=Router();


router.use('/clientes',cliente);

module.exports=router;
