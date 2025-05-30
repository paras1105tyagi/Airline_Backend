const flights = require("../models/flights");
const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");
class FlightService {
  constructor() {
    this.AirplaneRepository = new AirplaneRepository();
    this.FlightRepository = new FlightRepository();
  }
  async createFlight(data) {
    try {
      // console.log(data.arrivalTime,data.departureTime);
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw { error: "Arrival time should be greater than departure time" };
      }
      const airplane = await this.AirplaneRepository.getAirplanes(
        data.airplaneId
      );
      const flight = await this.FlightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });

      return flight;
    } catch (error) {
      console.log("Something went wrong while creating flight");
      throw error;
    }
  }

  async getAllFlightData(data) {
    try {
        const flights = await this.FlightRepository.getAllFlights(data);
        return flights;
    } catch (error) {
      console.log("");
      throw error;
    }
  }

  async getFlight(flightId){
    try{
      const flight = await this.FlightRepository.getFlight(flightId);
      return flight;
    }catch(error){
      console.log("Sometjing went wrong while getting flight");
    }
  }

  async updateFlight(flightId, data) {
    try {
      const response = await this.FlightRepository.updateFlights(flightId, data);
   
      return response;
    } catch (error) {
      console.log("Something went wrong while updating a flight");
      throw error;
    }
  }
}

module.exports = FlightService;
