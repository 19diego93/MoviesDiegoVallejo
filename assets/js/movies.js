import {filterName , filterGenre , cardConstructor , optionGenre } from "./functions.js"

let contenedor = document.getElementById("contenedor");
let genresSelect = document.getElementById("genresSelect")
let movieSearch = document.getElementById("movieSearch")
let peliculas;
let genres;
let currentGenre;
let searchName;


fetch("https://moviestack.onrender.com/api/movies",{
  headers:{"x-api-key":"0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"}
}) 
.then(info => info.json())
.then(pelis => { peliculas = pelis.movies;
  
  genres = [...new Set(peliculas.map(pelicula=>pelicula.genres).flat())]

  for (const genre of genres) {
    genresSelect.innerHTML += optionGenre(genre)
  }

  elRenderPeli(peliculas,contenedor)

  genresSelect.addEventListener("change",()=>
  {  currentGenre= genresSelect.value
   
    if(currentGenre){
      if(movieSearch){
      elRenderPeli(filterName(movieSearch.value,filterGenre(peliculas,currentGenre)),contenedor)
      }else{
        elRenderPeli(filterGenre = (peliculas,currentGenre),contenedor)
      }  
  }else{
    if(movieSearch){
    elRenderPeli(filterName(movieSearch.value,peliculas),contenedor)
    }else{
      elRenderPeli(peliculas,contenedor)
    }
  }
  })

  movieSearch.addEventListener("keyup",e=>{
    searchName = e.target.value;
      if(genresSelect.value){
      if(searchName){
      elRenderPeli(filterName(searchName,filterGenre(peliculas,genresSelect.value)),contenedor)
      }else{
        elRenderPeli(filterGenre = (peliculas,genresSelect.value),contenedor)
      }  
  }else{
    if(searchName){
    elRenderPeli(filterName(searchName,peliculas),contenedor)
    }else{
      elRenderPeli(peliculas,contenedor)
    }
  }
  })
});
  // funcion que lo que de se renderiza

 function elRenderPeli(array,ubicacion){
  contenedor.innerHTML=""; 
  if(array.length!=0){
let fragmento = new DocumentFragment(); 
 for (const pelicula of array) {
    fragmento.appendChild(renderCard(pelicula));
  }
  ubicacion.appendChild(fragmento);
}else{ubicacion.innerHTML="<h4>Movie not found!</h4>"}}

// no renderiza contiene la estructura a renderizar de las card
let renderCard = (cardData) => {
  let card = document.createElement("article");
  card.innerHTML = cardConstructor(cardData);
  card.className =
    " w-[300px] lg:w-[200px] h-[360px] lg:h-[400px] xl:w-[300px] bg-black text-white p-4 flex flex-col gap-3 rounded-2xl hover:bg-purple-900 hover:shadow-[0px_6px_10px_8px_#4a5568] delay-150";
  return card;  
};


//filtro por nombre


