const Cliente=require('./../services/schemaCliente');


const getClientes=(page,limit)=>{
    // return new Promise((resolve,reject)=>Cliente.find({}).skip(page*limit).limit(limit).exec((err,docs)=>{
    //   if(err) return reject(err);
    //   return resolve(docs);
    // }))

    return new Promise((resolve,reject)=>{
       Cliente.find({}).skip(page*limit).limit(limit).exec().then((dato)=>{
         resolve(dato);
       },err=>{
         reject(err)
       })
    })
}


module.exports={
  getClientes
}
