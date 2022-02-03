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
        
        const current = this.request(`pokemon?offset=${num}&limit=20`)
        const next = this.request(`pokemon?offset=${num + 20}&limit=20`)
        const prev = this.request(`pokemon?offset=${num - 20}&limit=20`)
        
        const allPromises = Promise.all([current, next, prev])

        let values = await allPromises
     
        let pokemonObj = {
            'prev' : values[2].data.results,
            'curr' : values[0].data.results,
            'next' : values[1].data.results
        }

        return pokemonObj
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