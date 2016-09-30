"use strict";
/**
 * Created by root on 29/9/16.
 */
var dbConnection = require('../../../core/db-connection');
var Sequelize = require('sequelize');
var fs = require('fs');
var parse = require('csv-parse');
var parser = parse({ delimiter: '|' }, function (err, data) {
    console.log(data);
});
var db = dbConnection();
var sequalizeModel = db.define('hospitaldata', {
    hospitalId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    EquipmentId: {
        type: Sequelize.STRING,
        allowNull: true
    },
    SystemId: {
        type: Sequelize.STRING,
        allowNull: true
    },
    Serial: {
        type: Sequelize.STRING,
        allowNull: true
    },
    Country: {
        type: Sequelize.STRING,
        allowNull: true
    },
    FacilityId: {
        type: Sequelize.STRING,
        allowNull: true
    },
    SourceSystem: {
        type: Sequelize.STRING,
        allowNull: true
    },
    Modality: {
        type: Sequelize.STRING,
        allowNull: true
    },
    InstallationDate: {
        type: Sequelize.STRING,
        allowNull: true
    },
    LifeCycle: {
        type: Sequelize.STRING,
        allowNull: true
    },
    ContractNumber: {
        type: Sequelize.STRING,
        allowNull: true
    },
    ContractType: {
        type: Sequelize.STRING,
        allowNull: true
    },
    ContractStatus: {
        type: Sequelize.STRING,
        allowNull: true
    },
    ProductId: {
        type: Sequelize.STRING,
        allowNull: true
    },
    SystemDescription: {
        type: Sequelize.STRING,
        allowNull: true
    },
    ContractStartDate: {
        type: Sequelize.STRING,
        allowNull: true
    },
    ContractEndDate: {
        type: Sequelize.STRING,
        allowNull: true
    },
    UsingDepartment: {
        type: Sequelize.STRING,
        allowNull: true
    },
    OwningDepartment: {
        type: Sequelize.STRING,
        allowNull: true
    }
});
sequalizeModel.sync({ force: true }).then(function (model) {
    fs.createReadStream(__dirname + '/Equipment.csv').pipe(parser).on('data', function (data) {
        console.log(data);
        model.create({
            EquipmentId: data[0],
            SystemId: data[1],
            Serial: data[2],
            Country: data[3],
            FacilityId: data[4],
            SourceSystem: data[5],
            Modality: data[6],
            InstallationDate: data[7],
            LifeCycle: data[8],
            ContractNumber: data[9],
            ContractType: data[10],
            ContractStatus: data[11],
            ProductId: data[12],
            SystemDescription: data[13],
            ContractStartDate: data[14],
            ContractEndDate: data[15],
            UsingDepartment: data[16],
            OwningDepartment: data[17]
        });
    });
});
exports.Model = sequalizeModel;

//# sourceMappingURL=../../../source-maps/module/serverPOC/models/data-model.js.map
