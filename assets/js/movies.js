let contenedor = document.getElementById("contenedor");
let peliculas = data.map((pelicula) => pelicula);

let cardConstructor = pelicula =>
  `<img class="w-[220px] lg:w-[120px] xl:w-[250px] image-cover rounded-lg self-center border border-purple-800" src="${
    pelicula.image
  }" alt="${pelicula.title}">
    <h3 class="font-semibold text-base">${pelicula.title}</h3>
    <p class="font-lg">${pelicula.tagline}</p>
    <p class="text-justify text-sm">${pelicula.overview.slice(
      0,
      160
    )} <a href="#" class="text-red-700 bg-black px-2 pb-[2px] pt-[1px] rounded-lg">...more</a></p>`;
    
let renderCard = cardData => {
  let card = document.createElement("article");
  card.innerHTML = cardConstructor(cardData);
  card.className =
    " w-[300px] lg:w-[200px] h-[360px] lg:h-[400px] xl:w-[300px] bg-black text-white p-4 flex flex-col gap-3 rounded-2xl hover:bg-purple-900 hover:shadow-[0px_6px_10px_8px_#4a5568] delay-150";
  return card;
  
};

let fragmento = new DocumentFragment();

for (const iterator of peliculas) {
  fragmento.appendChild(renderCard(iterator));
}

contenedor.appendChild(fragmento);
// console.log(fragmento);
