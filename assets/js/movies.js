import {filterName , filterGenre , optionGenre } from "./functions.js"

let contenedor = document.getElementById("contenedor");
let genresSelect = document.getElementById("genresSelect")
let movieSearch = document.getElementById("movieSearch")
let peliculas;
let genres;
let currentGenre;
let searchName;
let listPelId = [];
let fragmento = new DocumentFragment();
//sincronización fuera del evento click y del fetch
let localStPeli = JSON.parse(localStorage.getItem("favList"))
if(localStPeli){
listPelId=localStPeli;
}

fetch("https://moviestack.onrender.com/api/movies",{
  headers:{"x-api-key":"0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"}
}) 
.then(info => info.json())
.then(pelis => { peliculas = pelis.movies;
 genres = [...new Set(peliculas.map(pelicula=>pelicula.genres).flat())]

  for (const genre of genres) {
    genresSelect.innerHTML += optionGenre(genre)
  }

//  renderizar todas las movies
  elRenderPeli(peliculas,contenedor,fragmento)
// evento de los generos
  genresSelect.addEventListener("change",()=>
  {  currentGenre= genresSelect.value
      if(currentGenre){
      if(movieSearch){
      elRenderPeli(filterName(movieSearch.value,filterGenre(peliculas,currentGenre)),contenedor,fragmento)
      }else{
        elRenderPeli(filterGenre = (peliculas,currentGenre),contenedor,fragmento)
      }  
  }else{
    if(movieSearch){
    elRenderPeli(filterName(movieSearch.value,peliculas),contenedor,fragmento)
    }else{
      elRenderPeli(peliculas,contenedor,fragmento)
    }
  }
  })
// evento del titulo
  movieSearch.addEventListener("keyup",e=>{
    searchName = e.target.value;
      if(genresSelect.value){
      if(searchName){
      elRenderPeli(filterName(searchName,filterGenre(peliculas,genresSelect.value)),contenedor,fragmento)
      }else{
        elRenderPeli(filterGenre(peliculas,genresSelect.value),contenedor,fragmento)
      }  
  }else{
    if(searchName){
    elRenderPeli(filterName(searchName,peliculas),contenedor,fragmento)
    }else{
      elRenderPeli(peliculas,contenedor,fragmento)
    }
  }
  })

//  evento del click

contenedor.addEventListener("click",e=>{
let dataSetPelId = e.target.dataset.peliculaId
  if(dataSetPelId){
    if(!listPelId.includes(dataSetPelId)){
      listPelId.push(dataSetPelId)
    }else{
      listPelId=listPelId.filter(id=>id!=dataSetPelId)
    }
localStorage.setItem("favList",JSON.stringify(listPelId))

if(currentGenre){
  searchName? elRenderPeli(filterName(searchName,filterGenre(peliculas,currentGenre)),contenedor,fragmento) : elRenderPeli(filterGenre(peliculas,currentGenre),contenedor,fragmento)
  
}else{
  searchName? elRenderPeli(filterName(searchName,peliculas),contenedor,fragmento) : elRenderPeli(peliculas,contenedor,fragmento)

}
}})

});
//render de las cards
function elRenderPeli(array,ubicacion,frag){
  ubicacion.innerHTML=""; 
  if(array.length!=0){
  for (const pelicula of array) {
    frag.appendChild(renderCard(pelicula));
  }
  ubicacion.appendChild(frag);
  }else{ubicacion.innerHTML="<h4>Movie not found!</h4>"}}

// no renderiza contiene la estructura a renderizar de las card
let renderCard = (cardData) => {
  let card = document.createElement("article");
  card.innerHTML = cardConstructor(cardData);
  card.className =
    " w-[300px] lg:w-[200px] h-[360px] lg:h-[400px] xl:w-[300px] bg-black text-white p-4 flex flex-col justify-center gap-2 rounded-2xl hover:bg-purple-900 hover:shadow-[0px_6px_10px_8px_#4a5568] delay-150 relative";
  return card;  
};


  // interior card

 let cardConstructor = pelicula =>
  `${listPelId.includes(pelicula.id) ? `<div class="bg-red-500 w-[25px] h-[23px] self-end rounded-md absolute top-5" data-pelicula-id="${pelicula.id}"><img class="w-full cursor-pointer" src="../assets/img/heartCheck.png" data-pelicula-id="${pelicula.id}" alt="favorite symbole"></div>
    <img class="w-[220px] lg:w-[120px] xl:w-[250px] image-cover rounded-lg self-center border border-purple-800" src="https://moviestack.onrender.com/static/${
      pelicula.image
    }" alt="${pelicula.title}"> `
    :
    ` <div class="bg-purple-300 w-[25px] h-[23px] self-end rounded-md absolute top-5" data-pelicula-id="${pelicula.id}"><img class="w-full cursor-pointer" src="../assets/img/favoriteHeart.png" data-pelicula-id="${pelicula.id}" alt="favorite symbole"></div>
    <img class="w-[220px] lg:w-[120px] xl:w-[250px] image-cover rounded-lg self-center border border-purple-800" src="https://moviestack.onrender.com/static/${
      pelicula.image
    }" alt="${pelicula.title}">`}
    <h3 class="font-semibold text-base">${pelicula.title}</h3>
    <p class="font-sm">${pelicula.tagline}</p>
    <p class="text-justify text-xs h-[60px] ">${pelicula.overview.slice(
      0,
      140
    )} <a href="./details.html?id=${pelicula.id}" class="text-red-700 bg-black px-2 pb-[2px] pt-[1px] rounded-lg">...more</a></p>`;


   