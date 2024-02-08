const {Router}=require("express");
const validacionHandle=require('./../middlewares/validator');

const {obtenerTodoCliente,newCliente}=require('./controller/clienteController');

const {validacionClienteCreate}=require('./validacionCliente');

const router=Router();

console.log('ingresando 1')
router.get('/all',obtenerTodoCliente);
router.post('/create',validacionHandle(validacionClienteCreate,'body'),newCliente);

module.exports=router;
