import {filterName , filterGenre , cardConstructor , optionGenre} from "./functions.js"

let contenedor = document.getElementById("contenedor");
let peliculas = data.map((pelicula) => pelicula);
let genres = [...new Set(peliculas.map(pelicula=>pelicula.genres).flat())]
let genresSelect = document.getElementById("genresSelect")
let movieSearch = document.getElementById("movieSearch")
// render card
let renderCard = (cardData) => {
  let card = document.createElement("article");
  card.innerHTML = cardConstructor(cardData);
  card.className =
    " w-[300px] lg:w-[200px] h-[360px] lg:h-[400px] xl:w-[300px] bg-black text-white p-4 flex flex-col gap-3 rounded-2xl hover:bg-purple-900 hover:shadow-[0px_6px_10px_8px_#4a5568] delay-150";
  return card;  
};
// acumulador pre render
let fragmento = new DocumentFragment();

for (const pelicula of peliculas) {
  fragmento.appendChild(renderCard(pelicula));
}
contenedor.appendChild(fragmento);

// Filtros por genero

 for (const genre of genres) {
  genresSelect.innerHTML += optionGenre(genre)
}
let currentGenre;

genresSelect.addEventListener("change",()=>
{  currentGenre= genresSelect.value
  if(currentGenre){
    contenedor.innerHTML ="";
  for (const iterator of filterGenre(peliculas,currentGenre)) {
    fragmento.appendChild(renderCard(iterator));
  }
  contenedor.appendChild(fragmento)}else{
    contenedor.innerHTML="";
      for (const iterator of peliculas) {
  fragmento.appendChild(renderCard(iterator));
}
contenedor.appendChild(fragmento);
  }
}
)

//filtros por nombre

movieSearch.addEventListener("keyup",e=>{
  let searchName = e.target.value;
  // si select tiene value primer if, sino el else 
  if(currentGenre){
    contenedor.innerHTML ="";
    if(filterName(searchName,filterGenre(peliculas,currentGenre)).length == 0){contenedor.innerHTML="<h4>Movie not found</h4>"}
    for (const iterator of filterName(searchName,filterGenre(peliculas,currentGenre))) {
      fragmento.appendChild(renderCard(iterator));
    }
    contenedor.appendChild(fragmento)
    }else{         
        contenedor.innerHTML ="";
        if(filterName(searchName,peliculas).length == 0){contenedor.innerHTML="<h4>Movie not found</h4>"}
        for (const iterator of filterName(searchName,peliculas)) {
          fragmento.appendChild(renderCard(iterator));
    }
    contenedor.appendChild(fragmento);
  }
})
