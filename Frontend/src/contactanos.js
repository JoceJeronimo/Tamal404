

document.addEventListener('DOMContentLoaded', () => {
<<<<<<< HEAD
    const form = document.querySelector('form');

    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);


    form.addEventListener('submit', (event) => {
        event.preventDefault();


        // validar los inputs del formulario con expresiones regulares
        const validar = validarInputs(...form.elements);

=======
    const form = document.querySelector('.formContactanos');
    const contenedorErrores = document.querySelector('.contenedor_errores_contactanos');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        // Obtener los valores de los campos de entrada
        const nombre = formData.get('nombreContactanos');
        const email = formData.get('emailContactanos');
        const comentario = formData.get('comentarioContactanos');

        // validar los inputs del formulario con expresiones regulares
        const validar = validarInputs(nombre, email, comentario);
>>>>>>> bbc3f5d97e80a0cb017653b6bcd5e76108be9c8b

        if (!validar) {
            return;
        }
        else {
<<<<<<< HEAD
            // Obtener los datos del formulario
            const formData = new FormData(form);
            formData.forEach((value, key) => {
                data[key] = value;
            });
=======
            const requestData = {
                nombre: nombre,
                email: email,
                comentario: comentario
            };
>>>>>>> bbc3f5d97e80a0cb017653b6bcd5e76108be9c8b

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
<<<<<<< HEAD
                body: JSON.stringify(formData)
              };

            try {
                const response = fetch('https://formsubmit.co/alanbc60@gmail.com', options)     
=======
                body: JSON.stringify(requestData)
              };

            try {
                const response = await fetch('https://formsubmit.co/submit', options);
>>>>>>> bbc3f5d97e80a0cb017653b6bcd5e76108be9c8b
                const data = response.json();
    
                if(response.ok) {
                    console.log("Email enviado");
                    // crear un modal de exito
                }
                else {
<<<<<<< HEAD
                    console.log("Error al enviar el email");
                }                
            } catch (error) {
                console.log(error);
=======
                    contenedorErrores.innerHTML = `
                    <div class="alert alert-danger" role="alert">
                        ${data.error}
                    </div>
                    `;
                }                
            } catch (error) {
                contenedorErrores.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Error al enviar la solicitud. Por favor, inténtelo de nuevo más tarde.
                </div>
                `;
>>>>>>> bbc3f5d97e80a0cb017653b6bcd5e76108be9c8b
            }
        }

    });
}); 


async function validarInputs(nombre, email, comentario) {

<<<<<<< HEAD
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
=======

    console.log("Nombre: " + nombre);
    console.log("Email: " + email);
    console.log("Comentario: " + comentario);
    const contenedorErrores = document.querySelector('.contenedor_errores_contactanos');

    let validacion = true;

    // validar que el nombre solo contenga letras y espacios, asi como acentuaciones
    let regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;

    // validar que el correo solo contenga letras, numeros, puntos, guiones, guion bajo y arroba
    let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    

    // limpiar el contenedor de errores

    contenedorErrores.innerHTML = '';

>>>>>>> bbc3f5d97e80a0cb017653b6bcd5e76108be9c8b

    if (!regex.test(nombre)) {
        validacion = false;
        // crear un contenedor de error
<<<<<<< HEAD
        alert("El nombre contiene caracteres no válidos.");  
=======
        contenedorErrores.innerHTML += `
        <div class="alert alert-danger" role="alert">
            El nombre contiene caracteres no válidos.
        </div>
        `;

        // Limpiar el contenedor de errores

        setTimeout(() => {
            contenedorErrores.innerHTML = '';
        }, 4000)

>>>>>>> bbc3f5d97e80a0cb017653b6bcd5e76108be9c8b
    } 

    if(!regexEmail.test(email)) {
        validacion = false;
<<<<<<< HEAD
        alert("El correo contiene caracteres no válidos, solo acepta letras, números, puntos, guiones y guion bajo.");
    }

=======
        
        // crear un contenedor de error
        contenedorErrores.innerHTML += `
        <div class="alert alert-danger" role="alert">
            El correo contiene caracteres no válidos.
        </div>
        `;

        // Limpiar el contenedor de errores

        setTimeout(() => {
            contenedorErrores.innerHTML = '';
        }, 4000)
    }


    // validacion del telefono
    if (comentario.value.length < 10) {
        validacion = false;
        contenedorErrores.innerHTML += `
        <div class="alert alert-danger" role="alert">
            El telefono debe tener al menos 10 números.
        </div>
        `;
    }


>>>>>>> bbc3f5d97e80a0cb017653b6bcd5e76108be9c8b
    // validar que el comentario no exceda los 255 caracteres
    if (comentario.value.length > 255) {
        validacion = false;
        alert("El comentario no puede tener más de 255 caracteres.");
    }

<<<<<<< HEAD
=======





>>>>>>> bbc3f5d97e80a0cb017653b6bcd5e76108be9c8b
    return validacion;

}


<<<<<<< HEAD


=======
function mostrarMensajeDeError(mensaje, tiempoVisible = 3000) {
    console.log("Entro a mostrar el error");
    const toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: tiempoVisible,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });
  
    return toast.fire({
      title: mensaje,
      icon: 'error',
      customClass: {
        popup: 'rounded'
      }
    });
  }
  
>>>>>>> bbc3f5d97e80a0cb017653b6bcd5e76108be9c8b




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




