import {estructuraDetails, trDetails1, trDetails2} from"./functions.js"

const urlParams = new URLSearchParams(location.search)
let peliculaId = urlParams.get("id")
let contenedorDetails = document.getElementById("detailsContenedor")
let tableDetails1 = document.getElementById("table1")
let tableDetails2 = document.getElementById("table2")
let filtrarPeliculas;
let peliculas;

fetch("https://moviestack.onrender.com/api/movies",{
  headers:{"x-api-key":"0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"}
}) 
.then(info => info.json())
.then(pelis => { peliculas = pelis.movies;
    filtrarPeliculas = peliculas.find(pelicula => pelicula.id == peliculaId);

    tableDetails1.innerHTML = trDetails1(filtrarPeliculas);
    tableDetails2.innerHTML = trDetails2(filtrarPeliculas);
    contenedorDetails.innerHTML=estructuraDetails(filtrarPeliculas);

})
