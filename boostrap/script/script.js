const formulario=document.getElementById('formulario');
const input=document.querySelectorAll('#formulario input')
const expresiones={
    usuario:/^[a-zA0-Z0-9\_\-]{4,16}$/,
    nombre:/^[a-zA0-Z0-9\_\-]{1,40}$/,
    contraseña:/^.{4-12}$/,
    //contraseña2:
    correo:/^[a-zA0-Z0-9_.+-]+@[a-zA-Z0-9-.]$/,
    telefono:/^[0-9]{7-14}$/,
}
const campos={
    usuario:false,
    nombre:false,
    contraseña:false,
    correo:false,
    telefono:false,
}
 const validarformulario=(e)=>{
    switch(e.target.name){
        case "usuario":
            validarcampo(expresiones.usuario,e.target,'usuario')
        break
        case "nombre":
            validarcampo(expresiones.usuario,e.target,'nombre')
        break
        case "contraseña":
            validarcampo(expresiones.usuario,e.target,'contraseña')
            validarcontraseña2();
        break
        case "contraseña2":
             validarcontraseña2();
        break
        case "correo":
            validarcampo(expresiones.usuario,e.target,'correo')
        break
        case "telefono":
            validarcampo(expresiones.usuario,e.target,'telefono')
        break


    }


 }
 const validarcampo =(expresion,input,campo)=>{
     if(expresion.test(input.value)){
        document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-correcto');
     }
 }