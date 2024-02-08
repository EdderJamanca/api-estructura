const {Router}=require('express');

const {validacionCrearUser,
  validacionUpdateUser} =require('./validacionUser');

const validacionHandle=require('./../middlewares/validator');

const {crearUsuario}=require('./controller/userController');



const router=Router();


router.post('/create',validacionHandle(validacionCrearUser,'body'),crearUsuario);


module.exports=router;
