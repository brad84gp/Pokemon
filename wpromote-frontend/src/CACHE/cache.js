

let pokemonCache = {}



class PokemonCache {

    static checkCache(searchStr){
        if(pokemonCache[searchStr]) return pokemonCache[searchStr] 
    }

    static addToCache(searchStr, contents){
        pokemonCache[searchStr] = contents
    }

}




let pokemonCacheOffset = {}


class OffsetCache {

    static checkCache(searchStr){
        if(pokemonCacheOffset[searchStr]) return pokemonCacheOffset[searchStr] 
    }

    static addToCache(searchStr, contents){
        pokemonCacheOffset[searchStr] = contents
    }

}



module.exports = { PokemonCache, OffsetCache }