const {crearUnUsuario,getUserEmail} =require('./../dao/userDao');

const McrearUsuario=(body)=>{
     return crearUnUsuario(body);
}

const obtenerUsuario=(email)=>{
    return  getUserEmail(email);
}

module.exports={McrearUsuario,obtenerUsuario}
