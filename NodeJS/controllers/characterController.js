const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Character } = require('../models/character');

router.get('/', (req, res) => {
    Character.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Characters : ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record given id : ${req.params.id}`);

    Character.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Character :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var chr = new Character({
        name: req.body.name,
        realm: req.body.realm,
        locale: req.body.locale,
    });
    chr.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Character Save: ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res)=>{
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    
    var chr = {
        name: req.body.name,
        realm: req.body.realm,
        locale: req.body.locale,
    };
    Character.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Character Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    
    Character.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Character Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;