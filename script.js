const btnCrearCuenta = document.getElementById('form-login-btncrearcuenta');
const btnLogin = document.getElementById('form-login-btnlogin');

let containerLogin = document.getElementById('container-login');
let containerRegistro = document.getElementById('container-registro');
btnCrearCuenta.addEventListener('click',()=>{
    containerLogin.classList.replace('show','hide');
    containerRegistro.classList.replace('hide','show');
    // containerRegistro.style.fontFamily = 'Impact';
})

//VALIDANDO EMAIL
let loginEmail = document.getElementById('login-email');
function validaremail(){
    let expresionEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const isEmail = value =>(expresionEmail.test(value));
    if(isEmail(loginEmail.value)){
        console.log("Es email correcto");
        return true;
    }else{
        console.log("Ingresar un email válido");
        return false;
    }
}

// VALIDANDO PASSWORD
let loginPassword = document.getElementById('login-password');
function validarpassword(){
    let expresionPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
    const isPassword = value =>(expresionPassword.test(value));
    if(isPassword(loginPassword.value)){
        console.log('Constraseña segura');
        return true;
    }else{
        console.log('Contraseña no cumple con lo solicitado');
        return false;
    }
}

//Comparando Funciones, según su valor booleano

btnLogin.addEventListener('click',()=>{
    if(validaremail() && validarpassword()){
        alert ('Bien');
    }else{
        alert ('Mal');
    }
})

const btnRegistro = document.getElementById('form-registro-btnregistro');
let parrafo = document.getElementById('form-registro-parrafo');
btnRegistro.addEventListener('click',()=>{
    parrafo.classList.remove('hide');
    parrafo.classList.add('show');

    alert ('Se pudo realizar el Rgistro Exitosamente');
    limpiar();
})

//Realizando la Limpieza de cada input con su Id Generado txt#
function limpiar(){
    for(let i=1;i<=5;i++){
        let txt = 'txt'+i;
        //Támbien: document.getElementById(txt).value = '';
        recuadro = document.getElementById(txt);
        recuadro.value='';
    }
}