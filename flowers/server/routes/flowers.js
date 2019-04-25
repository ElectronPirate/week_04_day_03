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
  SqlRunner.run("INSERT INTO flowers (name, sun, water, soil) VALUES ($1, $2, $3, $4)", [req.body.name, req.body.sun, req.body.water, req.body.soil])
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
