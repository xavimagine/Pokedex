const pokeCard = document.querySelector('[data-poke-card]');
const pokeName = document.querySelector('[data-poke-name]');
const pokeImg = document.querySelector('[data-poke-img]');
const pokeImgContainer = document.querySelector('[data-poke-img-container]');
const pokeId = document.querySelector('[data-poke-id]');
const pokeTypes = document.querySelector('[data-poke-types]');
const pokeStats = document.querySelector('[data-poke-stats]');

const typeBakcground = {
    electric:'../librery/background/',
    normal:'../librery/background/',
    fire:'../librery/background/fuego.png',
    water:'../librery/background/agua.png',
    ice:'../librery/background/hielo.png',
    rock:'../librery/background/roca.png',
    flying:'../librery/background/volador.png',
    grass:'../librery/background/planta.png',
    psychic:'../librery/background/psiquico.png',
    ghosth:'../librery/background/fantasma.png',
    bug:'../librery/background/planta.png',
    poison:'../librery/background/planta.png',
    ground:'../librery/background/rock',
    dragon:'../librery/background/volador.png',
    steel:'../librery/background/roca.png',
    fighting:'../librery/background/',
    default:'../librery/background/default.png',
};
const typeColors = {
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F',
};


const searchPokemon = event => {
    event.preventDefault();
    const { value } = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then(data => data.json())
        .then(response => renderPokemonData(response))
        .catch(err => renderNotFound())
}

const renderPokemonData = data => {
    const sprite =  data.sprites.front_default;
    const { stats, types } = data;
    // Recogemos los valores del data
    pokeName.textContent =data.name;
    pokeImg.setAttribute('src',sprite);
    pokeId.textContent= `Nº${data.id}`;
    renderPokemonType(types);
    renderStats(stats);
}
// Cambiar el fondo segun los tipos
// const setBackground = types =>{
//     // const oneType =
// }
// types de los pokemons
const renderPokemonType = types =>{
    pokeTypes.innerHTML='';
    // resetealos tipos para una nueva busqueda

    
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typeColors[type.type.name];
        typeTextElement.textContent= type.type.name;
        pokeTypes.appendChild(typeTextElement);
    });
}

const renderStats = stats =>{
    pokeStats.innerHTML='';
    stats.forEach(stat => {
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        const statElementNumber = document.createElement("div");
        statElementName.textContent= stat.stat.name;
        statElementNumber.textContent= stat.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementNumber);
        pokeStats.appendChild(statElement);
        console.log(statElementNumber)
    });
}
const renderNotFound = () => {
    if()
    pokeName.textContent = 'No encontrado';
    pokeImg.setAttribute('src', '');
  
    pokeTypes.innerHTML = '';
    pokeStats.innerHTML = '';
    pokeId.textContent = '';
}

// function cambiarFondo){
//     document.getElementById("fondo").src="image2.jpg";
//   }
