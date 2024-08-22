function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


document.getElementById("regBtn").addEventListener("click", function () {
    // Esta línea selecciona el elemento del DOM con el id="regBtn" (que se espera que sea el botón de registro) y
    // agrega un event listener para el evento de click.
    // Cuando el usuario hace clic en el botón, se ejecuta la función proporcionada.
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const terminos = document.getElementById("terminos").checked;
    //Aca se obtienen los valores de los campos del formulario mediante 
    //document.getElementById(id).value para los campos de texto 
    //document.getElementById(id).checked para el checkbox.
    // Estos valores se almacenan en variables para su uso posterior.

 if (nombre == "" || apellido == "" || email == "" || password1 == "" || password2 == "" || password1 !== password2 || password1.length < 6 || !terminos) {
    showAlertError();
} 
else {
    showAlertSuccess();
}
});
//Se realiza una serie de comprobaciones para asegurarse de que los datos ingresados sean válidos:
//nombre == "" || apellido == "" || email == "" || password1 == "" || password2 == "": Verifica que ninguno de los campos esté vacío.
//password1 !== password2: Verifica que las contraseñas ingresadas coincidan.
//password1.length < 6: Verifica que la contraseña tenga al menos 6 caracteres.
//!terminos: Verifica que el checkbox de aceptación de términos y condiciones esté marcado.