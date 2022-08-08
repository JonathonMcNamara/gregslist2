import { api } from "./AxiosService.js";
import { House } from "../Models/House.js";
import { ProxyState } from "../AppState.js";


class HousesService{

    async getHouses(){
    let res = await api.get('/houses')
    ProxyState.houses = res.data.map(h => new House(h))
    }
   
}


export const housesService = new HousesService()