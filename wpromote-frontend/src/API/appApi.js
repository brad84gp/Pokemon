// API built to connect to DJango backend. These connect to a custom CRUD API setup. Look to backend for adjustments. 

// axios, async, and await are all used to fire events asycnhronously

const axios = require("axios")

const BASE_URL = 'http://127.0.0.1:8000/'

class AppAPI {


    static async request(url, data = {}, method = 'GET'){
        try{
            return await axios({
                method : method,
                url : `${BASE_URL}${url}/`,
                data : JSON.stringify(data)
            })
        }
        catch (err){
            console.log(err)
        }
    }

    static async createUser(data){
        let response = await this.request('users/newUser', data, 'POST')
        return JSON.parse(response.data)
    }

    static async loginUser(data){
        let response = await this.request('users/getUser', data, 'POST')
        return JSON.parse(response.data)
    }

    static async updateUser(data){
        let response = await this.request('users/updateUser', data, 'PATCH')
        return JSON.parse(response.data)
    }

    static async deleteUser(data){
        let response = await this.request('users/deleteUser', data, 'DELETE')
        return response
    }

    static async addLike(data){
        let response = await this.request('pokemon/likes/add', data, 'POST')
        return JSON.parse(response.data)
    }

    static async addDislike(data){
        let response = await this.request('pokemon/likes/subtract', data, 'POST')
        return JSON.parse(response.data)
    }

    static async grabLikes(data){
        try{
            let response = await this.request('pokemon/likes/check', data, 'POST')
            return JSON.parse(response.data)
        }catch{
            return false
        }
    }

    static async addFavorite(data){
        let response = await this.request('users/favorites/new', data, 'POST')
        return JSON.parse(response.data)
    }

    static async removeFavorite(data){
        let response = await this.request('users/favorites/delete', data, 'DELETE')
        return JSON.parse(response.data)
    }

    static async checkFavorites(data){
        try{
            let response = await this.request('users/favorites/check', data, 'POST')
            return JSON.parse(response.data)
        }catch{
            return false
        }
    }

}

export default AppAPI