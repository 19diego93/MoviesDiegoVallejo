import {estructuraDetails, trDetails1, trDetails2} from"./functions.js"

const urlParams = new URLSearchParams(location.search)
let peliculaId = urlParams.get("id")
let filtrarPeliculas = data.find(pelicula => pelicula.id == peliculaId)
let contenedorDetails = document.getElementById("detailsContenedor")
let tableDetails1 = document.getElementById("table1")
let tableDetails2 = document.getElementById("table2")


tableDetails1.innerHTML = trDetails1(filtrarPeliculas);
tableDetails2.innerHTML = trDetails2(filtrarPeliculas);
contenedorDetails.innerHTML=estructuraDetails(filtrarPeliculas);