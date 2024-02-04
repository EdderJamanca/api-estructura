const {getClientesAll}=require('./../model/Cliente');
const {single,multiple}=require('./../dto/DTOCliente');
// const Clientes=require('./../services/schemaCliente');


const obtenerTodoCliente=async(req,res,next)=>{

  const page=parseInt((req.query.page || 0).toString(),10);
  const limit=parseInt((req.query.limit || 10).toString(),10);

  console.log('page',page);
  console.log('limit',limit);

  const clientes= await getClientesAll(page,limit);

  return res.send(multiple(clientes,[]));

}

module.exports={obtenerTodoCliente}
