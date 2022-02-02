const axios = require("axios")

const BASE_URL = 'https://pokeapi.co/api/v2'

const { PokemonCache, OffsetCache } = require('.././CACHE/cache')

class PokemonApi {


    static async request(url, data = {}, method = 'GET'){
        console.log(BASE_URL + url, data, method)
        try{
            return await axios({
                method : method,
                url : `${BASE_URL}/${url}`,
                headers : {
                    'Content-Type' : 'application/json'
                },
                data : JSON.stringify(data)
            })
        }
        catch (err){
            console.log(err)
        }
    }

    static async fetchAllPokemon(num){
        let cacheRes = PokemonCache.checkCache(`pokemon?offset=${num}&limit=50`)
        console.log(cacheRes)

        if(cacheRes) return cacheRes
        else{
            const response = await this.request(`pokemon?offset=${num}&limit=50`)
            if(response.status === 200) {
                PokemonCache.addToCache(`pokemon?offset=${num}&limit=50`, response.data)
                return response.data
            }
        }
    }

    static async fetchPokemonData(id){
        let checkOffsetCache = OffsetCache.checkCache(`pokemon/${id}`)

        if(checkOffsetCache) return checkOffsetCache
        else {
            const response = await this.request(`pokemon/${id}`)
            OffsetCache.addToCache(`pokemon/${id}`, response)
            return response
        }
    }

    static async fetchPokemonAbilityData(id){
        const response = await this.request(`ability/${id}`)
        if(response.status === 200) return response.data
    }

    
}

export default PokemonApi