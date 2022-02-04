const axios = require("axios")

const BASE_URL = 'http://127.0.0.1:8000/'

class AppAPI {


    static async request(url, data = {}, method = 'GET'){
        console.log(BASE_URL + url, data, method)
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

    static async addFavorite(data){
        try{ 
            await this.request('users/favorites/new', data, 'POST')
            return true
        }catch (err){
            console.log(err)
            return false
        }
    }

    static async addLike(data){
        let response = await this.request('pokemon/likes/add', data, 'POST')
        setTimeout(() => {
            console.log(JSON.parse(response))
        }, 1000);
    }

}

export default AppAPI