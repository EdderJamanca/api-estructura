const Users=require('./../service/schemaUser');


const crearUnUsuario=(body)=>{

  return new Promise((resolve,reject)=>{
    Users.create(body).then((data)=>resolve(data),err=>reject(err));
  })
}

const getUserEmail=(email)=>{
  return new Promise((resolve,reject)=>{
       Users.find({"email":email}).then((data)=>resolve(data),err=>reject(err))
  });
}

module.exports={
crearUnUsuario,getUserEmail
}
