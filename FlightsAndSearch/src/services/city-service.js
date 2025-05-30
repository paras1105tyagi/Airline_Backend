const {CityRepository} = require('../repository/index');

class CityService {

    constructor(){
        this.cityRepostiory = new CityRepository();
    }
    async createCity(data) {
         try{
            const city = await this.cityRepostiory.createCity(data);
            return city;
         }catch(error){
            console.log("Error at service layer");
            throw {error};
         }
    }

    async deleteCity(cityId){
        try{
            const response = await this.cityRepostiory.deleteCity(cityId);
            return response;
        }catch(error){
           console.log("Error at service layer");
           throw {error};
        }
    }

    async updateCity(cityId,data){
        try{
            const city = await this.cityRepostiory.updateCity(cityId,data);
            return city;
        }catch(error){
           console.log("Error at service layer");
           throw {error};
        }
    }

    async getCity(cityId){
        try{
            const city = await this.cityRepostiory.getCity(cityId);
            return city;
        }catch(error){
           console.log("Error at service layer");
           throw {error};
        }
    }

    async getAllCities(filter){
        try{
            const cities = await this.cityRepostiory.getAllCities({name: filter.name});
            return cities;
        } catch (error) {
            console.log("Somethinf went wrong at the service layer");
            throw {error};
        }
    }

}
module.exports = CityService;