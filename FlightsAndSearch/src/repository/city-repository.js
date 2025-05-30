const { City } = require("../models/index");
const {Op} = require('sequelize');
class CityRepository {
  async createCity({ name }) {
    
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("Something went wrong while creating a city");
      throw { error };
    }

  }

  

  async deleteCity(cityid) {
    try {
      await City.destroy({
        where: {
          id: cityid,
        },
      });
      return true;
    } catch (error) {
      throw { error };
    }
  }

  async updateCity(cityid, data) {
    try {

        // const city = await City.update(data,{
        //     where: {
        //         id: cityid,
        //     },
        //     // returning: true,
        //     // plain: true,
        // });

        // below approach will return updated object in postman  

        const city = await City.findByPk(cityid);
        city.name = data.name;
        await city.save();
        return city;

        // return city;
    } catch (error) {
      console.log("Something went wrong while updating a city");
      throw { error };
    }
  }

  async getCity(cityid) {
    try {
      const city = await City.findByPk(cityid);
      return city;
    } catch (error) {
      console.log("Something went wrong while fetching a city");
      throw { error };
    }
  }

  async getAllCities(filter) { //filter can be empty
    try{   
       if(filter.name){
        const cities = await City.findAll(
          {
            where: {
              name: { 
                [Op.startsWith]: filter.name
              }
            }
          }
        );
        return cities;

      }
        const cities = await City.findAll() ;

        return cities;
    } catch (error){
      
      console.log("Something went wrong at the Repository level");
      throw {error};
    }
  }
}

module.exports = CityRepository;


