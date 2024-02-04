const {Router}=require("express");
const {obtenerTodoCliente}=require('./controller/clienteController');

const router=Router();

console.log('ingresando 1')
router.get('/all',obtenerTodoCliente);

module.exports=router;
