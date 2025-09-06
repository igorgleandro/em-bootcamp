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
    btn.classList.add("select-pokemon-button")
    pokemonButtons.appendChild(btn);
    fetchPokeAPI();
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