const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const pool = require("./../database");
const sqlFunction = require('./sqlFunction.js');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
router.use(bodyParser());
const addNewReservation = function(reservation) {
  const sql = `insert into reservation ` +
              `(number_of_guests, meal_id,created_date) ` +
              `values('${reservation.number_of_guests}', '${reservation.meal_id}','${reservation.created_date}')` ;     
 return sql;
};

router.get("/", (request, response) => {  
    pool.query(sqlFunction.getAllRows('reservation'), function(err, results, fields) {
      if(err){
        console.error(err);
        return;
      }
      response.json(results);
    });  
});
router.post("/", (request, response) => {
  const reservation = request.body;  
  pool.query(addNewReservation(reservation), function(err, results, fields) {
    if(err){
      console.error(err);
      return;
  }
    response.json(results);
  });
});
router.get("/:id", (request, response) => {
  const reservationId = request.params.id;
  pool.query(sqlFunction.getRowById('reservation',reservationId), function(err, results, fields) {
    if(err){
      console.error(err);
      return;
  }
    response.json(results);    
  });
});
router.put("/:id", (request, response) => {
  const reservationId = request.params.id;
  const columnName = request.body.columnName;
  const value = request.body.value;
  pool.query(sqlFunction.updateRowById('reservation',reservationId,columnName,value), function(err, results, fields) {
    if(err){
      console.error(err);
      return;
  }
    response.send(`The row with id of ${reservationId} is updated!`);    
  });
});
router.delete("/:id", (request, response) => {
  const reservationId = request.params.id;  
  pool.query(sqlFunction.deleteRowById('reservation',reservationId), function(err, results, fields) {
    if(err){
      console.error(err);
      return;
  }    
    response.send(`The row with id of ${reservationId} is successfully deleted!`);    
  });
});
module.exports = router;