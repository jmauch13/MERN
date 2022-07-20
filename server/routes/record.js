const express = require('express');

//recordRoutes is an instance of the express router.
//we use it to define our routes.
//router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

//connect to database
const dbo = require('../db/conn');

//convert id from string to ObjectId for the _id
const ObjectId = require('mongodb').ObjectId;

//get list of all records
recordRoutes.route('/record').get(function (req, res) {
    let db_connect = dbo.getDb('employees');
    db_connect
    .collection('records')
    .find({})
    .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

//get single record by id
recordRoutes.route('/record/:id').get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.rarams.id )};
    db_connect
    .collection('records')
    .findOne(myquery, function (err, result) {
        if (err) throw err;
    });
});

//create new record
recordRoutes.route('record/add').post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
    };
    db_connect.collection('records').insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.json(res);
    });
});

//update by id
recordRoutes.route('/update/:id').post(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    let newvalues = {
        $set: {
            name: req.body.name,
            position: req.body.position,
            level: req.body.level,
        },
    }
});

//delete a record
recordRoutes.route('/:id').delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    db_connect.collection('records').deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log('1 document deleted');
        response.json(obj);
    });
});

module.exports = recordRoutes;