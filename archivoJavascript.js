//alert('Hola archivo JavaScript')

var nombre = "Carlos Diaz"
var edad = 52
var estatura = 140

var concatenar = nombre + " " + edad;

//document.write(concatenar);
//document.write(concatenar);
//document.write(concatenar);

var datos = document.getElementById("datos");

/* (comentarios y se habilitan al borrar esta línea y la linea 38)
datos.innerHTML = `
    <h1>Soy datos<h1>
    <h2>Mi nombre es: ${nombre}</h2">
    <h3>Edad: ${edad}</h3>
    <h3>Estatura: ${estatura}</h3>
`;

//ESTRUCTURAS DE CONTROL -CONDICIONALES

if(estatura >= 150)
{
    datos.innerHTML += '<h1>Eres una persona ALTA</h1>'
} 
else
{
    datos.innerHTML += '<h1>Eres  una persona CHAPARRA</h1>'
}

for(var i=2019; i<=2023;i++)
{
    // bloque de instrucciones
    datos.innerHTML +="<h2>Conteo= </h2>" + i
}
*/


function MuestraDatos(nombre, edad, estatura)
{
    var misDatos = `
        <h1>Datos</h1>
        <h2>Mi nombre es: ${nombre}</h2">
        <h3>Edad: ${edad} años</h3>
        <h3>Estatura: ${estatura} cms</h3>
    `;

    return misDatos;
}

function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraDatos("Diana Perez", 28, 180)
}

imprimir();
