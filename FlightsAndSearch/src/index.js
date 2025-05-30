const bodyParser = require("body-parser");
const express = require("express");
require("dotenv").config(); 
// const {City} = require("./models/index");
const PORT = require("./config/serverConfig").PORT; 
const CityRepository = require("./repository/city-repository");
const {Airport,City} = require('./models/index');
const ApiRoutes = require('./routes/index');
const setupAndStartServer =  async() =>{
const db = require('./models/index');
const app = express();
const {Airplane} = require('./models/index');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api',ApiRoutes);
app.listen(PORT, async() => {
    console.log(`Server is running on http://localhost:${PORT}`);  
   
    console.log(process.env.PORT);

    if (process.env.SYNC_DB === "true") {
        console.log("⏳ Syncing database...");
        await db.sequelize.sync({ alter: true });
        console.log("✅ Database synced.");
    } else {
        console.log("⏭️ Skipping DB sync.");
    }
    

    // await Airplane.create({
    //     modelNUmber: 'Bombardier CRJ',
    
    // });
































    // const city = await City.findOne({
    //     where: {
    //         id: 9
    //     }
    // });

    // const airports = await city.getAirports();
    // await city.createAirport({
    //     name: 'Tyagi bhai ka Airport'
    //   });
     
    // const newAirport = await Airport.findOne({
    //     where: {
    //         id: 11
    //     }
    // });
    // await city.addAirport(newAirport);
    // await 
      
    // console.log(airports);
    // console.log(city);
 
    // below function helps to find the airports with given  city data .

    // const airports = await Airport.findAll(
    //     {include:[{
    //         model:City
    //     }]}
    // );

    // console.log(airports);


    
    // console.log(db.City);
//   const Repo = new CityRepository();
//   Repo.createCity({name: "New Delhi"});
//  Repo.deleteCity(1);


    
});
}
setupAndStartServer();


// api to create multiple cities in one go may be pass an array in one go without using loop to iterate over city area

// write a crud for airport


// add an api in the city resource for getting all the airports of a city.


