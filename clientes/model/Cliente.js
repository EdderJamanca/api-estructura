const {getClientes}=require('./../dao/DAOCliente');

const getClientesAll=(page,limit)=>{
  return getClientes(page,limit);
}

module.exports={getClientesAll};
