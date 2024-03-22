/* const botonAnterior = document.querySelector('.btn-anterior');
const botonSiguiente = document.querySelector('.btn-siguiente');

    let indiceInicio = 0;
    const numTarjetasAMostrar = 4;
    const tarjetas = document.querySelectorAll('.card');

    function visibilidadTarjetas() {
        tarjetas.forEach((tarjeta, index) => {
            if (index >= indiceInicio && index < indiceInicio + numTarjetasAMostrar) {
                tarjeta.style.display = 'block';
            } else {
                tarjeta.style.display = 'none';
            }
        });
    }

    botonAnterior.addEventListener('click', () => {
        if (indiceInicio > 0) {
            indiceInicio = indiceInicio - numTarjetasAMostrar;
            visibilidadTarjetas();
        }
    });

    botonSiguiente.addEventListener('click', () => {
        if (indiceInicio + numTarjetasAMostrar < tarjetas.length) {
            indiceInicio = indiceInicio + numTarjetasAMostrar;
            visibilidadTarjetas();
        }
    });

    visibilidadTarjetas(); */