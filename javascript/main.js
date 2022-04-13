// console.log('Hola desde un archivo externo de Javascript')


// DOM
// querySelector / querySelectorAll

/*
let links = document.querySelectorAll('a');

links.forEach(function(link){
    console.log(link);
});
*/

/*
let celdas = document.querySelectorAll('td');

celdas.forEach(function(td){
    td.addEventListener('click', function(){
        console.log(this)

    })
});
*/


// Obtener los elementos de la clase .close

let links = document.querySelectorAll('.close');

// Recorrerlos

links.forEach(function(link){
// Agregar un evento click a cada uno de ellos
    link.addEventListener('click', function(ev){
        // console.log(':)');
        ev.preventDefault();
        let content = document.querySelector('.content');

    // Quitarle las clases de animacion que ya tiene
        content.classList.remove('bounceInDown');
        content.classList.remove('animated');


    // Agregar clases para animar su salida
        content.classList.add('fadeOutUp');
        content.classList.add('animated');

        setTimeout(function(){
            location.href = '/';

     },1000);

    // setInterval(function(){
    //     location.href = '/';

    // },600);

    return false;
});

});

