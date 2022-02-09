//  Third Party API conencting to the Pokemon.API. Fetching pokemon data with async await calls, 
// and parsing data to specific components




const axios = require("axios")

const BASE_URL = 'https://pokeapi.co/api/v2'

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
        
        const current = await this.request(`pokemon?offset=${num}&limit=20`)

        return current.data.results
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