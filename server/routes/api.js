const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/coffees', (req, res) => {
    db.all('SELECT * FROM Coffees', 
        (err, rows) => {
            if (err) {
                console.error(err);
            } else {
                // console.log(rows);
                res.send(rows);
            }
        }
    )
});

router.get('/coffees/:coffeeId', (req, res) => {
    const coffeeId = req.params.coffeeId.substr(1);
    // console.log(coffeeId);
    db.get('SELECT * FROM Coffees WHERE coffeeId = ?', coffeeId, 
        (err, row) => {
            if (err) {
                console.error(err);
            } else {
                // console.log(row);
                res.send(row);
            }
        }
    )
});

router.get('/roasters', (req, res) => {
    res.send('Getting all roasters');
});

router.get('/roasters/:roasterId', (req, res) => {
    const roasterId = req.params['roasterId']
    res.send('Getting roaster: ' + roasterId);
});

module.exports = router;