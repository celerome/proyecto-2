
//Función para validar el formulario
function checkForm() {

    //Aquí "seleccionamos" los elementos HTML con los que vamos a trabajar
    const userName = document.querySelector('#user-name').value;
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirm-password').value;
    const message = document.querySelector('#message');
    const submitBtn = document.querySelector('#submit');

    //Si todos los campos estan completos...
    if(userName.length !== 0 && password.length !== 0 && confirmPassword.length !== 0) {
        
        //Si el largo de la contraseña es igual o mayor a 8 caracteres...
        if(password.length >= 8) {
            
            //Si coinciden la contraseña y su confirmación...
            if(password === confirmPassword) {
                message.innerText = 'Las contraseñas coinciden';
                message.classList.remove ('error');
                message.classList.add('success');
                submitBtn.disabled = false;
            
            //Si no coinciden...
            } else {
                message.innerText = 'Las contraseñas no coinciden';
                message.classList.add('error');
                submitBtn.disabled = true;
            }

        //Si el largo de la contraseña NO es igual o mayor a 8 caracteres...   
        } else {
            message.innerText = 'La contraseña debe tener al menos 8 caracteres';
            message.classList.add('error');
            submitBtn.disabled = true;
        }

    //Si algún campo esta incompleto...    
    } else {
        message.innerText = 'Completar todos los campos';
        message.classList.add('error');
        submitBtn.disabled = true;
    }
}

const form = document.querySelector('#register-form');

form.addEventListener('input', checkForm);

form.addEventListener('submit', function() {
    window.alert("Su registro fue exitoso");
});



/*  CONSIGNA:
-Resultados esperados:
En caso de que haya campos incompletos, la contraseña tenga menos de ocho caracteres,
o que no coincida con lo ingresado en el campo "confirmar contraseña", deberían aparecer
mensajes debajo indicando:
-Por favor completar todos los campos
-La contraseña debe tener al menos 8 caracteres
-Las contraseñas no coinciden

Cuando este todo correcto el mensaje dirá "las contraseñas coinciden" y
se habilitará el boton.
Luego, al clickear el boton, debe aparecer un mensaje en la ventana del navegador,
indicando que el registro fue exitoso.

Fragmentos de código a completar:
-Línea 16: escribir entre los paréntesis del if, la condicion que compruebe si la longitud de la
contraseña es igual o mayor a ocho caracteres.
-Línea 41: completar con un texto para el mensaje que indica que se deben completar todos los campos. 
-Linea 52: completar con línea de código que haga que la ventana del navegador muestre un mensaje 
indicando que el registro fue exitoso.

*/

