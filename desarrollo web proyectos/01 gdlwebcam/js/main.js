(function() {
    "use strict";
    var regalo = document.querySelector('#regalo');

    document.addEventListener('DOMContentLoaded', function() {

        //Campos datos usuario

        var nombre = document.querySelector('#nombre');
        var apellido = document.querySelector('#apellido');
        var email = document.querySelector('#email');

        //Campos pase
        var pase_dia = document.querySelector('#pase_dia');
        var pase_2dias = document.querySelector('#pase_2dias');
        var pase_completo = document.querySelector('#pase_completo');

        //Campos botones
        var calcular = document.querySelector('#calcular');
        var errorDiv = document.querySelector('#error');
        var btnRegistro = document.querySelector('#btnRegistro');
        var lista_productos = document.querySelector('#lista_productos');
        var suma_total = document.querySelector('#suma_total');

        //Extras
        var camisas = document.querySelector('#camisa_evento');
        var etiquetas = document.querySelector('#etiquetas');
        var c1 = document.querySelector('#c1');

        if (calcular) {
            calcular.addEventListener('click', calcularMontos);

            pase_dia.addEventListener('blur', mostrarDias);
            pase_2dias.addEventListener('blur', mostrarDias);
            pase_completo.addEventListener('blur', mostrarDias);

            nombre.addEventListener('blur', validarCampos);
            apellido.addEventListener('blur', validarCampos);
            email.addEventListener('blur', validarCampos);
            email.addEventListener('blur', validarEmail);

            function validarCampos() {
                if (this.value === '') {
                    errorDiv.style.display = 'block';
                    errorDiv.innerHTML = 'este campo es obligatorio';
                    this.style.border = '1px solid orange';
                    errorDiv.style.border = '1px solid red';
                    errorDiv.style.margin = '1.6rem 0 0 0';

                } else {
                    errorDiv.style.display = 'none';
                    this.style.border = '1px solid gray';
                }
            }

            function validarEmail() {
                if (this.value.indexOf('@') > -1) {
                    errorDiv.style.display = 'none';
                    this.style.border = '1px solid gray';

                } else {
                    errorDiv.style.display = 'block';
                    errorDiv.innerHTML = 'email no valido';
                    this.style.border = '1px solid orange';
                    errorDiv.style.border = '1px solid red';
                    errorDiv.style.margin = '1.6rem 0 0 0';
                }
            }

            function calcularMontos(event) {
                event.preventDefault();
                if (regalo.value === '') {
                    alert('debes elegir un regalo');
                    regalo.focus();
                } else {
                    var boletosDia = parseInt(pase_dia.value, 10) || 0,
                        boletos2Dias = parseInt(pase_2dias.value, 10) || 0,
                        boletoCompleto = parseInt(pase_completo.value, 10) || 0,
                        cantCamisas = parseInt(camisas.value, 10) || 0,
                        cantEtiquetas = parseInt(etiquetas.value, 10) || 0;

                    var totalPago = (boletosDia * 30) + (boletos2Dias * 45) +
                        (boletoCompleto * 50) + ((cantCamisas * 10) * 0.93) +
                        (cantEtiquetas * 2);

                    var listadoProductos = [];
                    if (boletosDia >= 1) {
                        listadoProductos.push(boletosDia + ' pases por dia');
                    }
                    if (boletos2Dias >= 1) {
                        listadoProductos.push(boletos2Dias + ' pases por dos dias');

                    }
                    if (boletoCompleto >= 1) {
                        listadoProductos.push(boletoCompleto + ' pases completos');

                    }
                    if (cantCamisas >= 1) {
                        listadoProductos.push(cantCamisas + ' camisas');

                    }
                    if (cantEtiquetas >= 1) {
                        listadoProductos.push(cantEtiquetas + ' etiquetas');

                    }
                    lista_productos.style.display = 'block';
                    lista_productos.innerHTML = '';
                    for (let i = 0; i < listadoProductos.length; i++) {
                        lista_productos.innerHTML += listadoProductos[i] + '<br/>';
                    }
                    suma_total.innerHTML = '$ ' + totalPago.toFixed(2);

                }
            } //calcularMontos
            function mostrarDias() {
                var boletosDia = parseInt(pase_dia.value, 10) || 0,
                    boletos2Dias = parseInt(pase_2dias.value, 10) || 0,
                    boletoCompleto = parseInt(pase_completo.value, 10) || 0;

                var diasElegidos = [];

                if (boletosDia > 0) {
                    diasElegidos.push('viernes');
                }
                if (boletos2Dias > 0) {
                    diasElegidos.push('viernes', 'sabado');
                }
                if (boletoCompleto > 0) {
                    diasElegidos.push('viernes', 'sabado', 'domingo');
                }
                for (let i = 0; i < diasElegidos.length; i++) {
                    document.getElementById(diasElegidos[i]).style.display = 'block';
                }
            }
        }
    }); //DOMContentLoaded
}());

$(function() {
    //LETTERING
    $('.nombre-sitio').lettering();

    //MENU FIJO
    var windowheight = $(window).height();
    var barraAltura = $('.barra').innerHeight();

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > windowheight) {
            $('.barra').addClass('fixed');
            $('body').css({ 'margin-top': barraAltura + 'px' });
        } else {
            $('.barra').removeClass('fixed');
            $('body').css({ 'margin-top': '0px' });
        }
    });
    //PROGRAMA DE CONFERENCIA
    $('.programa-evento .info-curso:last').show();
    $('.menu-programa a:first').addClass('activo');
    $('.menu-programa a').on('click', function() {
        $('.menu-programa a').removeClass('activo');
        $(this).addClass('activo');
        $('.ocultar').hide();
        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);
        return false;
    });
    //ANIMACIONES PARA LOS NUMEROS
    $('.resumen-evento li:nth-child(1) p').animateNumber({ number: 6 }, 1200);
    $('.resumen-evento li:nth-child(2) p').animateNumber({ number: 15 }, 1200);
    $('.resumen-evento li:nth-child(3) p').animateNumber({ number: 3 }, 1200);
    $('.resumen-evento li:nth-child(4) p').animateNumber({ number: 9 }, 1200);

    //CUENTA REGRESIVA
    $('.cuenta-regresiva').countdown('2020/09/01 16:00:40', function(event) {
        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));
    });

    //MENU RESPONSIVE
    $('.menu-movil').on('click', function() {
        $('.navegacion-principal').slideToggle();
    });
});