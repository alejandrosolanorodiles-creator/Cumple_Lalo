let paginaActual = 0;

const paginas = document.querySelectorAll(".pagina");

const portada = document.getElementById("portada");
const carta = document.getElementById("carta");
const final = document.getElementById("final");

const botonAnterior = document.getElementById("anterior");
const botonSiguiente = document.getElementById("siguiente");

const numeroPagina = document.getElementById("numeroPagina");



/* =========================
   ABRIR CARTA
========================= */

function abrirCarta() {

    portada.classList.remove("activa");

    carta.classList.add("activa");

    paginaActual = 0;

    mostrarPagina();

    crearConfeti();
}



/* =========================
   MOSTRAR PÁGINA
========================= */

function mostrarPagina() {

    for (let i = 0; i < paginas.length; i++) {

        paginas[i].classList.remove("activa");

    }


    paginas[paginaActual].classList.add("activa");


    numeroPagina.textContent =
        (paginaActual + 1) +
        " / " +
        paginas.length;



    /* BOTÓN ANTERIOR */

    if (paginaActual === 0) {

        botonAnterior.style.visibility = "hidden";

    } else {

        botonAnterior.style.visibility = "visible";

    }



    /* BOTÓN SIGUIENTE */

    if (paginaActual === paginas.length - 1) {

        botonSiguiente.textContent =
            "🎉 Terminar";

    } else {

        botonSiguiente.textContent =
            "Siguiente →";

    }

}



/* =========================
   SIGUIENTE
========================= */

function paginaSiguiente() {

    if (paginaActual < paginas.length - 1) {

        paginaActual++;

        mostrarPagina();

    } else {

        mostrarFinal();

    }

}



/* =========================
   ANTERIOR
========================= */

function paginaAnterior() {

    if (paginaActual > 0) {

        paginaActual--;

        mostrarPagina();

    }

}



/* =========================
   PANTALLA FINAL
========================= */

function mostrarFinal() {

    carta.classList.remove("activa");

    final.classList.add("activa");

    crearConfeti();

}



/* =========================
   CONFETI
========================= */

function crearConfeti() {

    const contenedor =
        document.getElementById("confeti");


    const emojis = [
        "🎉",
        "🎊",
        "🎈",
        "✨",
        "⭐",
        "🥳",
        "🎁",
        "🎂"
    ];


    for (let i = 0; i < 60; i++) {

        const pieza =
            document.createElement("div");


        pieza.classList.add(
            "confeti-pieza"
        );


        pieza.textContent =
            emojis[
                Math.floor(
                    Math.random() * emojis.length
                )
            ];


        pieza.style.left =
            Math.random() * 100 + "%";


        pieza.style.fontSize =
            (15 + Math.random() * 25) + "px";


        pieza.style.animationDuration =
            (3 + Math.random() * 4) + "s";


        pieza.style.animationDelay =
            Math.random() * 2 + "s";


        contenedor.appendChild(pieza);


        setTimeout(function () {

            pieza.remove();

        }, 8000);

    }

}