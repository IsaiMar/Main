let pokemonList = [];

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

const title = document.getElementById("title");
title.setAttribute("src", "./images/Pokedex_logo.png")

const poke_container = document.getElementById("poke-container");
const pokemon_count = 151;

const types = {
    fire: "",
    grass: "",
    electric: "",
    water: "",
    ground: "",
    rock: "",
    fairy: "",
    poison: "",
    bug: "",
    dragon: "",
    psychic: "",
    flying: "",
    fighting: "",
    normal: ""
};

const main_types = Object.keys(types);

const output = (pokemon) => {
    const pokemonElement = document.createElement("div");
    pokemonElement.classList.add("pokemon");
    let name = pokemon.name;
    let id = pokemon.id.toString().padStart(3, '0');
    let type = pokemon.types[0].type.name;

    const HTML = `
      <div class="img-container">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="">
      </div>
      <div class="info">
          <span class="number">#${id}</span>
          <h3 class="name">${name}</h3>
          <small class="type">Type: <span>${type}</span> </small>
      </div>
    `;

    pokemonElement.innerHTML = HTML;

    poke_container.appendChild(pokemonElement);
};

const fetchPokemons = async () => {
  for (let item = 1; item <= pokemon_count; item++) {
    const pokemon = await getPokemon(item);
    pokemonList.push(pokemon)
    output(pokemon)
  }
};

const getPokemon = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return await response.json();
};

fetchPokemons();
// output();

const reset = () => {
  document.querySelector("#poke-container").innerHTML = "";
}

const filterByType = () => {
  const filter = document.querySelector("#search").value;
  reset();
  pokemonList.forEach(element => {
    if (filter.length > 0){
      if (element.types[0].type.name === filter){
        output(element);
      }
    } else {
      output(element);
    }
  });

  // fetchPokemonsByType();
}

document.querySelector("#search-button").addEventListener("click", filterByType);


// var modal = document.getElementById("myModal");
// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("img-container");
// var modalImg = document.getElementById("pokemonImg");

// img.onclick = function() {
// modal.style.display = "block";
// modalImg.src = this.src;
// };

// var span = document.getElementsByClassName("close")[0];

// span.onclick = function() { 
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// const sortBy = () => {
//   reset();

//   let filter = document.querySelector("#sortBy").value;
//   switch (filter) {
//       case "templeNameAscending":
//           output(
//               templeList.sort((temple1, temple2) => {
//                   let templeName1 = temple1.templeName.toLowerCase();
//                   let templeName2 = temple2.templeName.toLowerCase();
//                   if(templeName1 < templeName2) return -1;
//                   else if(templeName1 > templeName2) return 1;
//                   else return 0;
//               })
//           )
//           break;
//       case "templeNameDescending":
//           output(
//               templeList.sort((temple1, temple2) => {
//                   let templeName1 = temple1.templeName.toLowerCase();
//                   let templeName2 = temple2.templeName.toLowerCase();
//                   if(templeName1 > templeName2) return -1;
//                   else if(templeName1 < templeName2) return 1;
//                   else return 0;
//               })
//           )
//           break;
//           default:
//               // using ternary operators
//               output(
//                 templeList.sort((temple1, temple2) =>
//                   temple1.templeName.toLowerCase() > temple2.templeName.toLowerCase()
//                     ? 1
//                     : temple2.templeName.toLowerCase() >
//                       temple1.templeName.toLowerCase()
//                     ? -1
//                     : 0
//                 )
//               );
//               break;
// }
// }

// document.querySelector("#search-button").addEventListener("change", sortBy);
