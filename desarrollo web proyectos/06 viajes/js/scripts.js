(function() {
    'use strict';
    document.addEventListener('DOMContentLoaded', function() {
        /*
        var logo = document.getElementById('logo');
        var navegacion = document.getElementById('navegacion');
        console.log(navegacion);
        navegacion.style.display = 'none';
        ______________________________________________________*/


        /*var navegacion = document.getElementsByClassName('navegacion');
        console.log(navegacion[1]);
        _______________________________________________________*/

        /*var enlaces = document.getElementsByTagName('a');
        console.log(enlaces.length);
        ________________________________________________________*/

        /*var enlacesSidebar = document.getElementById('sidebar').getElementsByTagName('a');
        console.log(enlacesSidebar);

        for (var i = 0; i < enlacesSidebar.length; i++) {
            enlacesSidebar[i].setAttribute('href', 'https://www.facebook.com');
        }
        _______________________________________________________*/

        /*var logo = document.querySelector('.logo');
        console.log(logo);

        var encabezado = document.querySelectorAll('article h2, p');
        console.log(encabezado);
        ____________________________________________________*/

        /*var enlaces = document.querySelectorAll('a');
        console.log(enlaces);

        for (var i = 0; i < enlaces.length; i++) {
            console.log(enlaces[i].innerText);
        }
        _______________________________________________________*/

        /*var enlaces = document.querySelectorAll('#menu ul li a');
        for (var i = 0; i < enlaces.length; i++) {
            console.log(enlaces[i].innerText);
            console.log(enlaces[i].attributes);
        }
        ________________________________________________________*/

        //CREAR CONTENIDO
        /*var sidebar = document.querySelector('#sidebar');
        var nuevoElemento = document.createElement('h1');
        var nuevoTexto = document.createTextNode('hola mundo');
        nuevoElemento.appendChild(nuevoTexto);
        sidebar.appendChild(nuevoElemento);

        //AGREGAR ENTRADA 6
        var enlaceSidebar = document.querySelector('#sidebar ul');
        //creando el enlace
        var nuevoEnlace = document.createElement('a');
        nuevoEnlace.setAttribute('href', '#');
        var textoEnlace = document.createTextNode('entrada 6');
        nuevoEnlace.appendChild(textoEnlace);
        //creando la lista
        var nuevaLista = document.createElement('li');
        nuevaLista.appendChild(nuevoEnlace);
        enlaceSidebar.appendChild(nuevaLista);
        ___________________________________________________*/

        //CLONAR NODO
        /*var contenido = document.querySelectorAll('main');
        var nuevoContenido = contenido[0].cloneNode(true);

        var sidebar = document.querySelector('aside');
        sidebar.insertBefore(nuevoContenido, sidebar.childNodes[3]);
        ________________________________________________________*/

        //CREANDO LISTA DE POST POPULARES
        /*var sidebar = document.querySelector('aside');
        var masVisitados = document.createElement('h2');
        var textoVisitados = document.createTextNode('post mas visitados');
        masVisitados.appendChild(textoVisitados);
        sidebar.insertBefore(masVisitados, sidebar.childNodes[0]);

        var contenido = document.querySelectorAll('main h2');
        for (var i = 0; i < contenido.length; i++) {
            var nuevoElemento = document.createElement('li');
            var nuevoTexto = document.createTextNode(contenido[i].firstChild.nodeValue);
            nuevoElemento.appendChild(nuevoTexto);
            sidebar.insertBefore(nuevoElemento, sidebar.childNodes[1]);
        }*/

        //ELIMINAR NODOS
        /* var primerPost = document.querySelector('main article');
         primerPost.parentNode.removeChild(primerPost);

         var enlaces = document.querySelector('#navegacion nav ul li a');
         enlaces.parentNode.removeChild(enlaces);
         _______________________________________________________*/

        //REEMPLAZAR NODOS
        var viejoNodo = document.querySelector('main h2');
        var nuevoNodo = document.querySelector('footer h2');
        viejoNodo.parentNode.replaceChild(nuevoNodo, viejoNodo);

        //REEMPLAZAR NODO CON UNO NUEVO
        var nuevoTitulo = document.createElement('h2');
        var nuevoTexto = document.createTextNode('hola mundo');
        nuevoTitulo.appendChild(nuevoTexto);
        var viejoNodo = document.querySelector('main h2');
        viejoNodo.parentNode.replaceChild(nuevoTitulo, viejoNodo);
    });

})();