const axios = require("axios")

const BASE_URL = 'https://pokeapi.co/api/v2'

const { PokemonCache } = require('.././CACHE/cache')

class PokemonApi {


    static async request(url, data = {}, method = 'GET'){
        console.log('getting pokemon')
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
        let cacheCheck = PokemonCache.checkCache(`pokemon?offset=${num}&limit=10`)
        
        if(cacheCheck) return cacheCheck
        else{
            const response = await this.request(`pokemon?offset=${num}&limit=10`)
            PokemonCache.addToCache(`pokemon?offset=${num}&limit=10`, response.data.results)
            return response.data.results
        }
    }

    static async fetchPokemonData(id){
        const response = await this.request(`pokemon/${id}`)
        if(response.status === 200) return response.data
    }

    static async fetchPokemonAbilityData(id){
        const response = await this.request(`ability/${id}`)
        if(response.status === 200) return response.data
    }

    static async fetchPokmonMoves(id){
        const response = await this.request(`move/${id}`)
        if(response.status === 200) return response.data
    }

    static async fetchPokemonItems(id){
        const response = await this.request(`item/${id}`)
        if(response.status === 200) return response.data
    }

    static async fetchPokemonAttrInfo(id){
        const response = await this.request(`item-attribute/${id}`)
        if(response.status === 200) return response.data
    }

    
}

export default PokemonApi