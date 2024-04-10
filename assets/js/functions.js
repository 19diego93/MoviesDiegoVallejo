
//! movies
  // interior card
export let cardConstructor = pelicula =>
`<img class="w-[220px] lg:w-[120px] xl:w-[250px] image-cover rounded-lg self-center border border-purple-800" src="${
  pelicula.image
}" alt="${pelicula.title}">
  <h3 class="font-semibold text-base">${pelicula.title}</h3>
  <p class="font-lg">${pelicula.tagline}</p>
  <p class="text-justify text-sm">${pelicula.overview.slice(
    0,
    160
  )} <a href="./details.html?id=${pelicula.id}" class="text-red-700 bg-black px-2 pb-[2px] pt-[1px] rounded-lg">...more</a></p>`;

  //filtro nombre
export let filterName = (name , array)=>array.filter(pelicula => pelicula.title.toLowerCase().includes(name.trim().toLowerCase()))
  
//filtro genero
export let filterGenre = (array,filter) => array.filter(pelicula => pelicula.genres.includes(filter)) 

// opciones de genero
export let optionGenre = genre=>`<option value="${genre}">${genre}</option>`

//!details

export let estructuraDetails = pelicula=>
    `<img class="w-[300px] object-cover border rounded-lg" src="${pelicula.image}" alt="">
    <div class="w-4/5 lg:w-1/2">
        <h2 class="font-bold">${pelicula.title}</h2>
        <h3 class="font-semibold">${pelicula.tagline}</h3>
        <p>${pelicula.genres}</p>
        <p class="text-justify">${pelicula.overview}</p>
    </div>`

    //tablas
 export let trDetails1 = pelicula => `<tr><th class="px-3 py-2 border border-purple-800">original language</th><td class="px-3 py-2 border border-purple-800 text-center">${pelicula.original_language}</td></tr>
    <tr><th class="px-3 py-2 border border-purple-800">release date</th><td class="px-3 py-2 border border-purple-800 text-center">${pelicula.release_date}</td></tr>
    <tr><th class="px-3 py-2 border border-purple-800">runtime</th><td class="px-3 py-2 border border-purple-800 text-center">${pelicula.runtime} mins</td></tr>
    <tr><th class="px-3 py-2 border border-purple-800">status</th><td class="px-3 py-2 border border-purple-800 text-center">${pelicula.status}</td></tr>`
    
export let trDetails2 = pelicula => `
    <tr><th class="px-3 py-2 border border-purple-800">vote average</th><td class="px-3 py-2 border border-purple-800 text-center">${pelicula.vote_average} %</td></tr>
    <tr><th class="px-3 py-2 border border-purple-800">budget</th><td class="px-3 py-2 border border-purple-800 text-center">USD ${pelicula.budget}</td></tr>
    <tr><th class="px-3 py-2 border border-purple-800">revenue</th><td class="px-3 py-2 border border-purple-800 text-center">USD ${pelicula.revenue}</td></tr>` 
    