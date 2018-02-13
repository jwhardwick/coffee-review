const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const jwt = require('express-jwt');
const fs = require('file-system');

// DB
const db = new sqlite3.Database('database.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error('Database does not exist');
        const newDb = new sqlite3.Database('database.db', (error) => {
            if (error) {
                console.error(error);
            }
        });
        const sql = require('./schema');
        newDb.exec(sql);
        return newDb;
    }
});

// Auth
module.exports = (app, config) => {
    const jwtCheck = jwt({});

    const adminCheck = (req, res, next) => {
        const roles = req.user[config.NAMESPACE] || [];
        if (roles.indexOf('admin') > -1) {
            next();
        } else {
            res.status(401).send({message: 'Not authorized for admin access'});
        }
    }
}


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