const express = require('express');

const {PORT} = require('./config/serverConfig');

const apiRoutes = require('./routes/index');

const bodyParser = require('body-parser');
const UserRepository = require('./repository/user-repository');
const UserService = require('./services/user-service');

const {User,Role} = require('./models/index')
const db = require('./models/index');
const app = express();
// const bcrypt = require('bcrypt');
const prepareAndStartServer = () => {

  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({extended: true}));


  app.use('/api',apiRoutes);
  app.listen(PORT,async () => {
    console.log("Server Started on Port:  "  , PORT);


   if(process.env.DB_SYNC){
           db.sequelize.sync({alter:true});
   }

       const u1 = await User.findByPk(3);
       const r1 = await Role.findByPk(3);

      //  u1.addRole(r1);


       const response = await u1.hasRole(1);
       console.log(response);










 
  });


};

prepareAndStartServer();


// in get request we expect the data in url params whereas in post request we expect the data in body of the request
