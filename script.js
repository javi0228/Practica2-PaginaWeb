var slideIndex = 1;
showSlides(slideIndex);

var inputs = document.getElementsByClassName('input_form');

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function() {
        if (this.value.length >= 1) {
            this.nextElementSibling.classList.add('arriba');

        } else {
            this.nextElementSibling.classList.remove('arriba');
        }
    });
}

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function pedidoRealizado() {

    // Variable donde guardo el formulario
    var form = document.getElementById('formulario');



    if (form.nombre.value == 0) {
        swal('Campos vacios o incorrectos', 'Debe rellenar el campo "nombre"', 'error')
        form.nombre.value = "";
        form.nombre.focus();
        return false;
    }


    if (!validarEmail(form.correo.value)) {
        swal('Campos vacios o incorrectos', 'Debe rellenar el campo "correo electrónico"', 'error')
        form.correo.value = "";
        form.correo.focus();
        return false;

    }

    if (!validarNumeroTlf(form.telefono.value)) {
        swal('Campos vacios o incorrectos', 'Debe rellenar el campo "telefono"', 'error');
        form.telefono.value = "";
        form.telefono.focus();
        return false;


    }

    swal('Campos vacios o incorrectos', 'Debe rellenar el campo "telefono"', 'success');

    form.submit();

}



function validarEmail(valor) {
    if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(valor)) {
        return true;
    } else {
        return false;
    }
}

function validarNumeroTlf(valor) {
    if (valor.match(/^[0-9]+$/) && valor.length == 9) {
        return true;
    } else {
        return false;
    }
}