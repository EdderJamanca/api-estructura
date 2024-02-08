const {McrearUsuario,obtenerUsuario}=require('./../model/userModel');
const {single,multiple}=require("./../dto/userDto");
const boom =require('@hapi/boom');
const bcrypt = require('bcrypt');


const crearUsuario=async (req,res,next)=>{
      const {nombre,apellido,email,password,roles,celular,departamento,provicia,direccion}=req.body;

       const usuarios=await obtenerUsuario(email);

       if(usuarios.length>0){
          next(boom.badRequest('El email ya se encuentra registrado'));
          return;
       }

       try{
         const hash = await bcrypt.hash(password, 10);

         const newUsuario= await McrearUsuario({
          nombre:nombre,
          apellido:apellido,
          email:email,
          password:hash,
          roles:roles,
          celular:celular,
          departamento:departamento,
          provicia:provicia,
          direccion:direccion
        })

        res.status(201).json(single(newUsuario))
       }catch(error){
          next(error);
       }

}

module.exports={
  crearUsuario
}
