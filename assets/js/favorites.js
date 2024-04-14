let contenedor = document.getElementById("contenedor");
let peliculas;
let peliculasFav;
let genres;
let listCards=[];
let dataSetPelId;
let fragmento = new DocumentFragment(); 
fetch("https://moviestack.onrender.com/api/movies",{
  headers:{"x-api-key":"0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"}
}) 
.then(info => info.json())
.then(pelis => { peliculas = pelis.movies;
listCards = JSON.parse(localStorage.getItem("favList"))
if(listCards){
peliculasFav = peliculas.filter(pelicula => listCards.includes(pelicula.id))

elRenderPeli(peliculasFav,contenedor,fragmento)}
})

contenedor.addEventListener("click",e=>{
    dataSetPelId = e.target.dataset.peliculaId   
      if(dataSetPelId){    
        listCards = listCards.filter(id => id != dataSetPelId)
        peliculasFav = peliculasFav.filter(peli => peli.id != dataSetPelId)
    localStorage.setItem("favList",JSON.stringify(listCards))
    elRenderPeli(peliculasFav,contenedor,fragmento)
}
})

function elRenderPeli(array,ubicacion,frag){
    ubicacion.innerHTML=""; 
    if(array.length!=0){  
   for (const pelicula of array) {
      frag.appendChild(renderCard(pelicula));
    }
    ubicacion.appendChild(frag);
  }else{ubicacion.innerHTML="<h4>You do not have favorite Movies!</h4>"}}

let renderCard = (cardData) => {
    let card = document.createElement("article");
    card.innerHTML = cardConstructor(cardData);
    card.className =
      " w-[300px] lg:w-[200px] h-[360px] lg:h-[400px] xl:w-[300px] bg-black text-white p-4 flex flex-col justify-center gap-2 rounded-2xl hover:bg-purple-900 hover:shadow-[0px_6px_10px_8px_#4a5568] delay-150 relative";
    return card;  
  };

let cardConstructor = pelicula =>
  `<div class="bg-red-500 w-[25px] h-[23px] self-end rounded-md absolute top-5" data-pelicula-id="${pelicula.id}"><img class="w-full cursor-pointer" src="../assets/img/heartCheck.png" data-pelicula-id="${pelicula.id}" alt="favorite symbole"></div>
    <img class="w-[220px] lg:w-[120px] xl:w-[250px] image-cover rounded-lg self-center border border-purple-800" src="https://moviestack.onrender.com/static/${
      pelicula.image
    }" alt="${pelicula.title}">
    <p class="font-sm">${pelicula.tagline}</p>
    <p class="text-justify text-xs h-[60px] ">${pelicula.overview.slice(
      0,
      140
    )} <a href="./details.html?id=${pelicula.id}" class="text-red-700 bg-black px-2 pb-[2px] pt-[1px] rounded-lg">...more</a></p>`;