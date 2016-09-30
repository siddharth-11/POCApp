"use strict";
var DataModel = require('../models/data-model');
var DataService = (function () {
    function DataService() {
    }
    DataService.prototype.getList = function (searchValue) {
        var findOptions = {
            order: [
                'EquipmentId'
            ]
        };
        if (searchValue) {
            findOptions.where = {
                $or: [
                    { EquipmentId: { $iLike: "%" + searchValue + "%" } },
                    { SystemId: { $iLike: "%" + searchValue + "%" } },
                    { Serial: { $iLike: "%" + searchValue + "%" } },
                    { Country: { $iLike: "%" + searchValue + "%" } },
                    { FacilityId: { $iLike: "%" + searchValue + "%" } },
                    { SourceSystem: { $iLike: "%" + searchValue + "%" } },
                    { Modality: { $iLike: "%" + searchValue + "%" } },
                    { InstallationDate: { $iLike: "%" + searchValue + "%" } },
                    { LifeCycle: { $iLike: "%" + searchValue + "%" } },
                    { ContractNumber: { $iLike: "%" + searchValue + "%" } },
                    { ContractType: { $iLike: "%" + searchValue + "%" } },
                    { ContractStatus: { $iLike: "%" + searchValue + "%" } },
                    { ProductId: { $iLike: "%" + searchValue + "%" } },
                    { SystemDescription: { $iLike: "%" + searchValue + "%" } },
                    { ContractStartDate: { $iLike: "%" + searchValue + "%" } },
                    { ContractEndDate: { $iLike: "%" + searchValue + "%" } },
                    { UsingDepartment: { $iLike: "%" + searchValue + "%" } },
                    { OwningDepartment: { $iLike: "%" + searchValue + "%" } }
                ]
            };
        }
        return DataModel.Model.findAll(findOptions);
    };
    DataService.prototype.get = function (EquipmentId) {
        return DataModel.Model.findById(EquipmentId);
    };
    DataService.prototype.create = function (request) {
        return DataModel.Model.create(request);
    };
    DataService.prototype.update = function (request) {
        return (DataModel.Model.findById(request.EquipmentId).then(function (dataInstance) {
            dataInstance.EquipmentId = request.EquipmentId;
            dataInstance.SystemId = request.SystemId;
            dataInstance.Serial = request.Serial;
            dataInstance.Country = request.Country;
            dataInstance.FacilityId = request.FacilityId;
            dataInstance.SourceSystem = request.SourceSystem;
            dataInstance.Modality = request.Modality;
            dataInstance.InstallationDate = request.InstallationDate;
            dataInstance.LifeCycle = request.LifeCycle;
            dataInstance.ContractNumber = request.ContractNumber;
            dataInstance.ContractType = request.ContractType;
            dataInstance.ContractStatus = request.ContractStatus;
            dataInstance.ProductId = request.ProductId;
            dataInstance.SystemDescription = request.SystemDescription;
            dataInstance.ContractStartDate = request.ContractStartDate;
            dataInstance.ContractEndDate = request.ContractEndDate;
            dataInstance.UsingDepartment = request.UsingDepartment;
            dataInstance.OwningDepartment = request.OwningDepartment;
            return dataInstance.save();
        }));
    };
    DataService.prototype.delete = function (EquipmentId) {
        console.log("inside the service" + EquipmentId);
        return DataModel.Model.findById(EquipmentId).then(function (dataInstance) {
            return dataInstance.destroy();
        });
    };
    return DataService;
}());
module.exports = DataService;

//# sourceMappingURL=../../../source-maps/module/serverPOC/services/data-service.js.map
