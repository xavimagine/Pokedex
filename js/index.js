const pokeCard = document.querySelector('[data-poke-card]');
const pokeName = document.querySelector('[data-poke-name]');
const pokeImg = document.querySelector('[data-poke-img]');
const pokeImgContainer = document.querySelector('[data-poke-img-container]');
const pokeId = document.querySelector('[data-poke-id]');
const pokeTypes = document.querySelector('[data-poke-types]');
const pokeStats = document.querySelector('[data-poke-stats]');
const pokeBG = document.querySelector('[data-poke-background]');


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
        .catch(_err => renderNotFound())
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
    cambiarFondo(types);
    wiki(data);
}


// types de los pokemons
const renderPokemonType = types =>{
    pokeTypes.innerHTML='';
    // resetealos tipos para una nueva busqueda
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typeColors[type.type.name];
        typeTextElement.textContent= type.type.name;
        typeTextElement.className="typepoke";
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
    });
}
const renderNotFound = () => {
    
    pokeName.textContent = 'No encontrado';
    pokeImg.setAttribute('src', '');
  
    pokeTypes.innerHTML = '';
    pokeStats.innerHTML = '';
    pokeId.textContent = '';
}

const cambiarFondo = types =>{
    const typeBackground = [
        { name : "electric", url:'../librery/background/electrico.png'},
        { name : "normal", url:'../librery/background/normal.png'},
        {name : "fire", url:'../librery/background/fuego.png'},
        { name : "water", url:'../librery/background/agua.png'},
        { name : "ice", url:'../librery/background/hielo.png'},
        { name : "rock", url:'../librery/background/roca.png'},
        { name : "flying", url:'../librery/background/volador.png'},
        { name : "grass", url:'../librery/background/planta.png'},
        { name : "psychic", url:'../librery/background/psiquico.png'},
        { name : "ghosth", url:'../librery/background/fantasma.png'},
        { name : "bug", url:'../librery/background/planta.png'},
        { name : "poison", url:'../librery/background/veneno.png'},
        { name : "ground", url:'../librery/background/rock'},
        { name : "dragon", url:'../librery/background/dragon.png'},
        { name : "steel", url:'../librery/background/metal.png'},
        { name : "fighting", url:'../librery/background/lucha.png'},
        { name : "default", url:'../librery/background/default.png'}
      ];
    pokeBG.innerHTML = `document.getElementById("fondo").src=typeBackground.default`;
const numTypes = types.length;

    switch (numTypes) {
        case 1:
            types.forEach( element => {
                const ftype = element.type.name;
                typeBackground.forEach(element1 => {
                    if(element1.name === ftype){
                        document.getElementById("fondo").src=element1.url;
                    }
                });
                
            });
          
               
            break;
        case 2:  
        const gtypos =[];
        types.forEach( element => {
            const ftype = element.type.name;
            gtypos.push(ftype);
        });
        console.log(gtypos)
        typeBackground.forEach( element => {
                if(gtypos[1] === element.name){
                    console.log("entre en if")
                    document.getElementById("fondo").src=element.url;
                }
       
            });
 
                break;
        default:
            document.getElementById("fondo").src=typeBackground.default;
            break;
    }
  }

 const wiki= data =>{
    const nombre= data.name;
    
    const cambio2 =document.getElementById("pokwiki2")  
    const cambio =document.getElementById("pokwiki")
    cambio.href =`https://www.wikidex.net/wiki/${nombre}`
    cambio2.href =`https://www.wikidex.net/wiki/${nombre}`
  
 }

   
 
