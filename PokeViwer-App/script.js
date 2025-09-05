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

  const pokeNextURL = pokemons.next
  const pokemonNextBox = document.getElementById("pagination")

  const pokePreviousURL = pokemons.previous
  const pokemonPreviousBox = document.getElementById("pagination")

pokemonButtons.innerHTML = "";
pokemonNextBox.innerHTML ="";
pokemonPreviousBox.innerHTML ="";



  pokeResults.forEach(pokemon => {
    const btn = document.createElement("button");
    btn.textContent = pokemon.name;
    btn.classList.add("select-pokemon-button")
    pokemonButtons.appendChild(btn);
    fetchPokeAPI();
  });


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

renderPokemon();



async function fetchNextAPI() {
  const api = apiNext;
  const response = await fetch(api);
  const data = await response.json();
  
  return data; 
}

async function renderNextPage() {
  const pokemonButtons = document.getElementById("pokemon-buttons");
  const pokemons = await fetchPokeAPI();

  const pokeResults = pokemons.results

  const pokeNextBtn = pokemons.next
  const pokePreviousBtn = pokemons.previous

  pokeResults.forEach(pokemon => {
    const btn = document.createElement("button");
    btn.textContent = pokemon.name;
    btn.classList.add("select-pokemon-button")
    pokemonButtons.appendChild(btn);
    fetchPokeAPI();
  });

 if(pokeNextBtn){
    const btn = document.createElement("button");
    btn.textContent = pokeNextBtn;
    btn.classList.add("select-pokemon-button");
    pokemonButtons.appendChild(btn);
    const apiNext = pokeNextBtn;
    
    }

  if(pokePreviousBtn){
    const btn = document.createElement("button");
    btn.textContent = pokePreviousBtn;
    btn.classList.add("select-pokemon-button")
    pokemonButtons.appendChild(btn)
    const apiPrevous = pokePreviousBtn;
    }  
}





