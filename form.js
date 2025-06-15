const formulario = document.querySelector("#Formulario1");

formulario.addEventListener("submit", (event) => {
    event.preventDefault(); // Previene el envío

    const mensajeError = document.querySelectorAll(".mensajeError"); // Limpia los mensajes de error
    mensajeError.forEach(msg => msg.textContent = "");

    let hasError = false;

    const nombre = document.querySelector("#nombre");
    if (nombre.value.trim() === ''){
        document.querySelector('#errorNombre').textContent = "El nombre es obligatorio.";
        nombre.setAttribute('aria-invalid', 'true');    // Indica que hay un error
        hasError = true;
    }else{
        nombre.removeAttribute('aria-invalid');
    }

    const email = document.querySelector("#email");
    if (email.value.trim() === ''){
        document.querySelector('#errorEmail').textContent = "El email es obligatorio.";
        email.setAttribute('aria-invalid', 'true');    // Indica que hay un error
        hasError = true;
    }else{
        email.removeAttribute('aria-invalid');
    }

    const asunto = document.querySelector("#asunto");
    if (asunto.value.trim() === ''){
        document.querySelector('#errorAsunto').textContent = "El asunto es obligatorio.";
        asunto.setAttribute('aria-invalid', 'true');    // Indica que hay un error
        hasError = true;
    }else{
        asunto.removeAttribute('aria-invalid');
    }

    const mensaje = document.querySelector("#mensaje");
    if (mensaje.value.trim() === ''){
        document.querySelector('#errorMensaje').textContent = "El asunto es obligatorio.";
        mensaje.setAttribute('aria-invalid', 'true');    // Indica que hay un error
        hasError = true;
    }else{
        asunto.removeAttribute('aria-invalid');
    }

    if (!hasError) { // Si no hay errores, se envia  el formulario
        alert("Formulario enviado correctamente"); 
        formulario.reset(); // Resetea el formulario
    }
});