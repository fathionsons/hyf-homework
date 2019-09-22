const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const pool = require("./../database");
const sqlFunction = require('./sqlFunction.js');
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
router.use(bodyParser());

const addNewReview = function(review) {
  const sql = `insert into review ` +
              `(title, description, review_meal_id, stars,created_date) ` +
              `values('${review.title}', '${review.description}','${review.review_meal_id}', '${review.stars}','${review.created_date}')` ;     
 return sql;
};

router.get("/", (request, response) => {  
    pool.query(sqlFunction.getAllRows('review'), function(err, results, fields) {
      if(err){
        console.error(err);
        return;
      }
      response.json(results);
    });  
});
router.post("/", (request, response) => {
  const review = request.body;  
  pool.query(addNewReview(review), function(err, results, fields) {
    if(err){
      console.error(err);
      return;
  }
    response.json(results);
  });
});
router.get("/:id", (request, response) => {
  const reviewId = request.params.id;
  pool.query(sqlFunction.getRowById('review',reviewId), function(err, results, fields) {
    if(err){
      console.error(err);
      return;
  }
    response.json(results);    
  });
});

router.put("/:id", (request, response) => {
  const reviewId = request.params.id;
  const columnName = request.body.columnName;
  const value = request.body.value;
  pool.query(sqlFunction.updateRowById('review',reviewId,columnName,value), function(err, results, fields) {
    if(err){
      console.error(err);
      return;
  }
    response.send(`The row with id of ${reviewId} is updated!`);    
  });
});

router.delete("/:id", (request, response) => {
  const reviewId = request.params.id;  
  pool.query(sqlFunction.deleteRowById('review',reviewId), function(err, results, fields) {
    if(err){
      console.error(err);
      return;
  }    
    response.send(`The row with id of ${reviewId} is successfully deleted!`);    
  });
});
module.exports = router;