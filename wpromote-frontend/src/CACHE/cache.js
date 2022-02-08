// CACHE is just a javascript object that holds the keys as the search string and the results as the value.
// checked before each new pokemon fetch call. If it exists, it is returned, if not, it is created

let pokemonCache = {}

class PokemonCache {

    static checkCache(searchStr){
        if(pokemonCache[searchStr])return pokemonCache[searchStr] 
    }

    static addToCache(searchStr, contents){
        pokemonCache[searchStr] = contents
    }

}

module.exports = { PokemonCache }