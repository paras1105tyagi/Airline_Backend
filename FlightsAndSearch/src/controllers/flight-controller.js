const flights = require('../models/flights');
const {FlightService} = require('../services/index');
const {SuccessCodes} = require('../utils/error-codes');
const flightService = new FlightService();

const create = async (req,res) =>{
try{

    let flightRequestData = {
        flightNumber : req.body.flightNumber,
        airplaneId : req.body.airplaneId,
        departueAirportId:req.body.departureAirportId,
        arrivalAirportId: req.body.arrivalAirportId,
        arrivalTime: req.body.arrivalTime,
        departureTime: req.body.arrivalTime,
        price: req.body.price,
    }
    const flight = await flightService.createFlight(flightRequestData);
    return res.status(SuccessCodes.CREATED).json({
        data: flight,
        success: true,
        message: 'Flight created successfully',
        err:{}
    })
} catch(error){
    console.log(error);

    return res.status(500).json({
        data: {},
        success: false,
        message: 'Not able to create flight',
        err:error
    })
}
}


const getAll = async(req,res) => {
    try{
        const response = await flightService.getAllFlightData(req.query);
        return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            err: {},
            message: 'Flight fetched successfully'
        });
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch flights',
            err:error
        })
    }
}
const get = async (req,res) => {
    try{
        const response = await flightService.getFlight(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            err: {},
            message: 'Flight fetched successfully'
        });
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch flight',
            err:error
        })
    }
}


const update = async (req,res)=>{
    try{
        const response = await flightService.updateFlight(req.params.id,req.body);
        return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            err: {},
            message: 'Flight updated successfully'
        });
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update flight',
            err:error
        })
    }
}
module.exports={
create,
getAll,
get,
update
}