
//! movies
  //filtro nombre
export let filterName = (name , array)=>array.filter(pelicula => pelicula.title.toLowerCase().includes(name.trim().toLowerCase()))
  
//filtro genero
export let filterGenre = (array,filter) => array.filter(pelicula => pelicula.genres.includes(filter)) 

// opciones de genero
export let optionGenre = genre=>`<option value="${genre}">${genre}</option>`


//!details
export let estructuraDetails = pelicula=>
    `<img class="w-[300px] object-cover border rounded-lg" src="https://moviestack.onrender.com/static/${pelicula.image}" alt="">
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
    <tr><th class="px-3 py-2 border border-purple-800">budget</th><td class="px-3 py-2 border border-purple-800 text-center">$${pelicula.budget}</td></tr>
    <tr><th class="px-3 py-2 border border-purple-800">revenue</th><td class="px-3 py-2 border border-purple-800 text-center">$${pelicula.revenue}</td></tr>` 
    
    