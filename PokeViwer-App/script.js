const apiURL = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20' ;

async function fetchPokeAPI(url = apiURL) {
  const api = url;
  const response = await fetch(api);
  const data = await response.json();
  
  return data; 
}

async function renderPokemon(url) {

  const pokemonButtons = document.getElementById("pokemon-buttons");
  const pokemons = await fetchPokeAPI(url);

  const pokeResults = pokemons.results

  const pokePreviousURL = pokemons.previous
  const pokemonPreviousBox = document.getElementById("pagination")
  const pokeNextURL = pokemons.next
  const pokemonNextBox = document.getElementById("pagination")

  
// Clean Before Render
    pokemonButtons.innerHTML = "";
    pokemonNextBox.innerHTML ="";
    pokemonPreviousBox.innerHTML ="";


//Render
  pokeResults.forEach(pokemon => {
    const btn = document.createElement("button");
    btn.textContent = pokemon.name;
    const pokeViwerURL = pokemon.url;
    btn.classList.add("select-pokemon-button")
    pokemonButtons.appendChild(btn);
    fetchPokeAPI();
    
    btn.addEventListener('click', (e) =>{
        e.preventDefault();
        renderPokemonViwer(pokeViwerURL); 
        console.log(pokeViwerURL) });
  });

//If have previous
  if(pokePreviousURL){
    const btn = document.createElement("button");
    btn.textContent = "<= Prev";
    btn.classList.add("select-pokemon-button");

    btn.addEventListener('click', (e) =>{
        e.preventDefault();
        renderPokemon(pokePreviousURL); 
        console.log(pokePreviousURL) });

    pokemonPreviousBox.appendChild(btn);
    
    }  
// If have Next
  if(pokeNextURL){
    const btn = document.createElement("button");
    btn.textContent = 'Next=>';
    btn.classList.add("select-pokemon-button");

    btn.addEventListener('click', (e) =>{
        e.preventDefault();
        renderPokemon(pokeNextURL); 
        console.log(pokeNextURL) });

    btn.addEventListener('click', () => fetchPokeAPI(pokeNextURL))

    pokemonNextBox.appendChild(btn);
    }

  }

  //Initial Render
renderPokemon();

//Pokemon Viwer

async function fetchViwerAPI(url) {
  const api = url;
  const response = await fetch(api);
  const data = await response.json();
  
  return data; 
}


async function renderPokemonViwer(url) {
  
  const apiURL = url;
  const pokemonViwer = document.getElementById("pokemonViwerBox");
  const pokemonImgViwer = document.getElementById("pokemonImageBox");
  const pokemonDetailViewer = document.getElementById("pokemonXpViewer")
 
  // Clean Before Render
    pokemonViwer.innerHTML = "";
    pokemonImgViwer.innerHTML ="";
    pokemonDetailViewer.innerHTML="";

    
  const pokemons = await fetchViwerAPI(apiURL);

  const pokeViwerResults = pokemons.name;
  console.log(pokeViwerResults);

  const divNumber = document.createElement("div");
  divNumber.classList.add("viwer-heading");
  divNumber.textContent =  "order #" + pokemons.order;
  pokemonViwer.appendChild(divNumber);

  const divName = document.createElement("div");
  divName.classList.add("viwer-name-pokemon");
  divName.textContent = pokemons.name;
  pokemonViwer.appendChild(divName);

  const divImg = document.createElement("img");
  divImg.classList.add("viwer-Img-pokemon");
  divImg.src = pokemons.sprites.front_default;
  pokemonImgViwer.appendChild(divImg);

  const pXp = document.createElement("p");
  pXp.classList.add("viwer-heading");
  pXp.textContent = "Base Experience: " + pokemons.base_experience + "XP";
  pokemonDetailViewer.appendChild(pXp);

  const pHeight = document.createElement("p");
  pHeight.classList.add("viwer-heading");
  pHeight.textContent = "Height: " + pokemons.height + " cm";
  pokemonDetailViewer.appendChild(pHeight);

  const pweight = document.createElement("p");
  pweight.classList.add("viwer-heading");
  pweight.textContent = "Weight: " + pokemons.weight + " grams";
  pokemonDetailViewer.appendChild(pweight);
 
}