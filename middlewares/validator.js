const boom =require('@hapi/boom');

function validacionHandle(schema,property){
   return (req,res,next)=>{
    const data=req[property];
    console.log('data',data)
    const {error}=schema.validate(data,{abortEarly:false});
    if(error){
      next(boom.badRequest(error));
    }
    next()
   }
}

module.exports=validacionHandle;
