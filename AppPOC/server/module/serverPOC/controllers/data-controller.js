/**
 * Created by root on 29/9/16.
 */
"use strict";
var express = require('express');
var DataService = require('../services/data-service');
var router = express.Router();
var service = new DataService();
router.get('/list', function (req, res) {
    service.getList(req.query.searchValue).then(function (result) {
        res.send(result);
    }).catch(function (error) {
        res.send(error);
    });
});
router.get('/one', function (req, res) {
    var EquipmentId = req.query.EquipmentId;
    service.get(EquipmentId).then(function (result) {
        res.send(result);
    }).catch(function (error) {
        res.send(error);
    });
});
router.post('/create', function (req, res) {
    var request = req.body;
    service.create(request).then(function (result) {
        res.send(result);
    }).catch(function (error) {
        res.send(error);
    });
});
router.put('/update', function (req, res) {
    var request = req.body;
    service.update(request).then(function (result) {
        res.send(result);
    }).catch(function (error) {
        res.send(error);
    });
});
router.delete('/delete', function (req, res) {
    console.log(req);
    var EquipmentId = req.query.EquipmentId;
    console.log("In controller" + EquipmentId);
    service.delete(EquipmentId).then(function (result) {
        res.send(result);
    }).catch(function (error) {
        res.send(error);
    });
});
module.exports = router;

//# sourceMappingURL=../../../source-maps/module/serverPOC/controllers/data-controller.js.map
