const {Airplane} = require('../models/index');

class AirplaneRepository {
    async getAirplanes(id){
            try{
             const airplane = await Airplane.findByPk(id);
             return airplane;
            }catch(error){
                console.log("Something went wrong while getting airplanes");
                throw error;
            }
    }

}    


module.exports = AirplaneRepository;
