

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);


    form.addEventListener('submit', (event) => {
        event.preventDefault();


        // validar los inputs del formulario con expresiones regulares
        const validar = validarInputs(...form.elements);


        if (!validar) {
            return;
        }
        else {
            // Obtener los datos del formulario
            const formData = new FormData(form);
            formData.forEach((value, key) => {
                data[key] = value;
            });

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
              };

            try {
                const response = fetch('https://formsubmit.co/alanbc60@gmail.com', options)     
                const data = response.json();
    
                if(response.ok) {
                    console.log("Email enviado");
                    // crear un modal de exito
                }
                else {
                    console.log("Error al enviar el email");
                }                
            } catch (error) {
                console.log(error);
            }
        }

    });
}); 


async function validarInputs(nombre, email, comentario) {

    const contenedorformulario = document.querySelector('.contenedor_formulario_contactanos');

    let validacion = true;

    // validar que el nombre solo contenga letras y espacios
    let regex = /^[a-zA-Z]+$/;

    // validar que el correo solo contenga letras, numeros, puntos, guiones y guion bajo
    let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (nombre.value === "" || email.value === "" || comentario.value === "") {
        validacion = false;
        alert("Todos los campos son obligatorios.");
    }

    if (!regex.test(nombre)) {
        validacion = false;
        // crear un contenedor de error
        alert("El nombre contiene caracteres no válidos.");  
    } 

    if(!regexEmail.test(email)) {
        validacion = false;
        alert("El correo contiene caracteres no válidos, solo acepta letras, números, puntos, guiones y guion bajo.");
    }

    // validar que el comentario no exceda los 255 caracteres
    if (comentario.value.length > 255) {
        validacion = false;
        alert("El comentario no puede tener más de 255 caracteres.");
    }

    return validacion;

}








// async function enviarComentario (dataFormW) {
//     const mensaje = {
//         to: 'recipient@example.com',
//         from: 'sender@example.com',
//         subject: 'Asunto del correo',
//         html: '<p>Contenido del formulario HTML aquí</p>',
//     };

//     sgMail.send(msg)
//   .then(() => {
//     console.log('Correo enviado correctamente');
//   })
//   .catch((error) => {
//     console.error(error.toString());
//   });

// } 




