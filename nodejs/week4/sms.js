const express= require('express');
const smsRouter=express.Router();
require('dotenv').config();
const accountSid=process.env.ACCOUNT_SID;
const authToken=process.env.AUTH_TOKEN;
const twillioNumber = process.env.TwillioNumber;
const myNumber = process.env.MyNumber;
const client = require('twilio')(accountSid, authToken);
const MessagingResponse = require('twilio').twiml.MessagingResponse;



const pool = require ('./data.js');

const orderClass=require('./orderClass.js');
console.log(orderClass);
console.log(orderClass.type);
const bodyParser=require('body-parser');
smsRouter.use (bodyParser.json ());
smsRouter.use(bodyParser.urlencoded({ extended: true }));
  function messageResponse(res, responseMassage){
    const twiml = new MessagingResponse();
    twiml.message(responseMassage);
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
  };

function createNewOrder(res,newOrderType){
  if(newOrderType ==='pizza' || newOrderType ==='pizza 1' || newOrderType ==='pizza 2'){
    try{
      const newOrder = new Order(newOrderType, 'ordered', new Date(), new Date())
      pool.query("insert order please ?", newOrder, (err, result, query) => {
        if (err) {
          throw err;
        } else {
          newOrder.id = result.insertId;
        console.log(`prepare your stomach${result.insertId}`);
        sendResponse (res, message);
        }
      });
    }catch(err){
      res.status(400);
      next(err)
    }
  }
}
function statusChecker (res, id) {
  pool.query ('select * from orders where id = ?', id, (err, results, fields) => {
      if (err) {
          console.error(err);
      } else {
          console.log(results);
          message = `the order status is: ${results[0].status}. Last updated: ${results[0].modified}`;
          sendResponse(res, message);
      } 
  }
  )
}

smsRouter.get('/',(req,res) =>{
client.messages
.create({
   body: 'jeg elsker fiskeri',
   from: 'twiloNumber',
   to: 'myNumber'
 })
.then(message => console.log(message.sid));
const twiml = new MessagingResponse();
twiml.message('hygge');  
})

smsRouter.post('/', (req, res) => { 
    let bodyListner= req.body.Body;
    console.log(bodyListner);
    bodyListner = body.toLowerCase().split(' ');
    console.log(bodyListner);
    let message;
    if (body.includes('help' || 'guide')){
      response = "click on menu or order"
      messageResponse(res,response);
    }
    else if (body.includes('menu')){
      
      response = " pizza 1 or pizza 2"
      messageResponse(res,response);
    }
    else if(body.includes('order')){
      response = createNewOrder(res,body[1])
      messageResponse(res,response);
    }
    else if(body.includes('status')){
      response= statusChecker(res,body[1])
      messageResponse(res,response);


    }
  else{
    response = 'Hej ! Hvad vil du?';
    messageResponse(res,response);
  }
  
 
  
  });

module.exports=smsRouter;