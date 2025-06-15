const formulario = document.querySelector("#Formulario1");

formulario.addEventListener("submit", (event) => {
    event.preventDefault(); // Previene el envío del formulario

    const mensajeError = document.querySelectorAll(".mensajeError"); // Limpia los mensajes de error
    mensajeError.forEach(mensajes.textContet = "");

    const nombre = document.querySelector("#nombre");
    if (nombre.value.trim() === ''){
        document.querySelector("#errorNombre").textContent = "El nombre es obligatorio.";
        nombre.setAttribute("aria-invalid", "true");    // Indica que hay un error
        mensajeError = true;
    }else{
        nombre.setAttribute("aria-invalid", "false"); // Indica que no hay error
    }

    const email = document.querySelector("#email");
    if (email.value.trim() === ''){
        document.querySelector("#errorEmail").textContent = "El email es obligatorio.";
        email.setAttribute("aria-invalid", "true");    // Indica que hay un error
        mensajeError = true;
    }else{
        email.setAttribute("aria-invalid", "false"); // Indica que no hay error
    }

    const asunto = document.querySelector("#asunto");
    if (asunto.value.trim() === ''){
        document.querySelector("#errorAsunto").textContent = "El asunto es obligatorio.";
        asunto.setAttribute("aria-invalid", "true");    // Indica que hay un error
        mensajeError = true;
    }else{
        asunto.setAttribute("aria-invalid", "false"); // Indica que no hay error
    }

    const mensaje = document.querySelector("#mensaje");
    if (mensaje.value.trim() === ''){
        document.querySelector("#errorMensaje").textContent = "El asunto es obligatorio.";
        mensaje.setAttribute("aria-invalid", "true");    // Indica que hay un error
        mensajeError = true;
    }else{
        asunto.setAttribute("aria-invalid", "false"); // Indica que no hay error
    }

    if (!mensajeError) { // Si no hay errores, se envia  el formulario
        alert("Formulario enviado correctamente"); 
        formulario.reset(); // Resetea el formulario
    }
})