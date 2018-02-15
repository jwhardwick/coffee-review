const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const jwt = require('express-jwt');
const fs = require('file-system');
const jwks = require('jwks-rsa');
const config = require('../config');
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

const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${config.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),
    aud: config.AUTH0_API_AUDIENCE,
    issuer: `https://${config.AUTH0_DOMAIN}/`,
    algorithm: 'RS256'
  });

const adminCheck = (req, res, next) => {
    // console.log(req.user);
    const roles = req.user[config.NAMESPACE] || [];
    if (roles.indexOf('admin') > -1) {
        next();
    } else {
        res.status(401).send({message: 'Not authorized for admin access'});
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

router.get('/roasters/admin', jwtCheck, adminCheck, (req, res) => {
    // res.send('Getting all admin roasters');
    db.all('SELECT * FROM Roasters', 
        (err, rows) => {
            if (err) {
                console.error(err);
                return res.status(500).send({messsage: err.message});
            } else {
                // console.log(rows);
                res.send(rows);
            }
        }
    )
});

router.get('/roasters/:roasterId', (req, res) => {
    const roasterId = req.params['roasterId']
    res.send('Getting roaster: ' + roasterId);
});

// Add a new coffee
router.post('/coffees/new', jwtCheck, (req, res) => {
    

    const coffeeName = req.body.coffeeName;
    const roasterId = req.body.roasterId;
    const details = req.body.details;
    const origin = req.body.origin;
    const imageURL = req.body.imageURL;
    const websiteURL = req.body.websiteURL;

    db.get(`
        SELECT * FROM Coffees
        WHERE coffeeName = ?
        AND roasterId = ?
        AND origin = ?
    `, [coffeeName, roasterId, origin], (err, existingCoffee) => {
        if (err) {
            return res.status(500).send({messsage: err.message});
        }
        else if (existingCoffee) {
            console.log('coffee alaready exists');
            return res.status(409).send({message: 'Coffee already exists'});
        }
        else {
            db.run(`
                INSERT INTO Coffees(coffeeId, roasterId, coffeeName, origin, imageURL, websiteURL, details)
                VALUES(NULL, ?, ?, ?, ?, ?, ?)
            `, [roasterId, coffeeName, origin, imageURL, websiteURL, details])
            res.send({message: 'coffee added'});
        }
    })
    
    
})

module.exports = router;