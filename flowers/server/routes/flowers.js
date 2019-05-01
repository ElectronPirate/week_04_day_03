var express = require('express');
var router = express.Router();
const SqlRunner = require('../db/sql_runner');

/* GET users listing. */
// router.get('/', function(req, res) {
//   res.status(200).json('respond with a resource');
// });

router.get('/', function(req, res){
  SqlRunner.run('SELECT * FROM flowers').then(result =>{
    res.status(200).json(result.rows);
  });
});

router.post('/', function(req, res) {
  SqlRunner.run("INSERT INTO flowers (name, light, water, temperature, humidity, feed, height_growth, toxicity, origin, monday, tuesday, wednesday, thursday, friday, saturday, sunday, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17 )", [req.body.name, req.body.light, req.body.water, req.body.temperature, req.body.humidity, req.body.feed, req.body.height_growth, req.body.toxicity, req.body.origin, req.body.monday, req.body.tuesday, req.body.wednesday, req.body.thursday, req.body.friday, req.body.saturday, req.body.sunday, req.body.image])
  .then((result) => {
    SqlRunner.run('SELECT * FROM flowers').then(result =>{
      res.status(200).json(result.rows);
    });
  });
});

router.delete('/:id', function(req, res) {
  SqlRunner.run("DELETE FROM flowers WHERE id = $1", [req.params.id])
  .then((result) => {
    SqlRunner.run('SELECT * FROM flowers').then(results =>{
      res.status(200).json(results.rows);
    });
    });
});





module.exports = router;
