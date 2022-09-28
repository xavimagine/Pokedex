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
}


const searchPokemon = event => {
    event.preventDefault();
    const { value } = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then(data => data.json())
        .then(response => renderPokemonData(response))
        .catch(err => renderNotFound())
}

const renderPokemonData = data => {
    const sprite =  data.sprites.other.dream_world.front_default;
    const { stats, types } = data;
console.log(data)
    // Recogemos los valores del data
    pokeName.textContent =data.name;
    pokeImg.setAttribute('src',sprite);
    pokeId.textContent= `Nº${data.id}`;
}