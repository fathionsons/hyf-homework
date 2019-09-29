require('dotenv').config()

//Fathi class 10 week 4
const express=require('express');
const app= express();
const localtunnel = require('localtunnel')
const bodyParser = require ('body-parser');
const router =express.Router();
const PORT = process.env.PORT || 3000 ||5000;
console.log(PORT);
app.use(bodyParser.json())
router.use(bodyParser.urlencoded ({extended: false}));
const checkerRouter = require('./routercheck.js');
const incomingSms=require('./sms.js');
const kitchenRouter = require('./kitchen.js');
app.use('/check',checkerRouter);
app.use('/newSms',incomingSms);
app.use('/kitchen/order',kitchenRouter);
  app.listen(PORT, () => {
    console.log(`Server is at ${PORT}`);
    const tunnel = localtunnel(PORT, { subdomain : 'MySQLHyggeons'}, (err, tunnel) => {
        if (!err)
          console.log('Tunnel opened');
        else
          console.log('not opened: ', err);
      });
      
      tunnel.on('close', function() {
        console.log('closed');
      });
})