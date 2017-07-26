"use strict";

var express = require('express');
var mongo = require('mongodb');
var uuidv4 = require('uuid/v4'); 

var mProducts = require('./mymodules.products');
var mOrders = require('./mymodules.orders');
var app = express();

//Products
{
    //create
    app.put('/products', function (req, res) {
        res.end();
    })

    //update
    app.post('/products', function (req, res) {
        res.end();
    })

    //get list
    app.get('/products', function (req, res) {
        res.end(); 
    })

    //delete
    app.delete('/products', function (req, res) {
        res.end();
    })
}
//Orders
{
    app.put('/orders', function (req, res) {
        res.end();
    })

    app.post('/orders', function (req, res) {
        res.end();
    })

    app.get('/orders', function (req, res) {
        res.end();
    })

    app.delete('/orders', function (req, res) {
        res.end();
    })
}

app.listen(3000, function () {  
    console.log('Mongo Rest API listening on port 3000!');
})

