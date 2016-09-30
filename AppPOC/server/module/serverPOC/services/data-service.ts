/**
 * Created by root on 29/9/16.
 */
import Sequelize = require('sequelize');
import DataModel = require('../models/data-model');


class DataService {

    getList(searchValue: string): Promise<DataModel.IDataInstance[]> {

        var findOptions: Sequelize.FindOptions = {
            order: [
                'EquipmentId'
            ]
        };

        if (searchValue) {
            findOptions.where = {
                $or: [
                    { EquipmentId: { $iLike: `%${searchValue}%` } },
                    { SystemId: { $iLike: `%${searchValue}%` } },
                    { Serial: { $iLike: `%${searchValue}%` } },
                    { Country: { $iLike: `%${searchValue}%` } },
                    { FacilityId: { $iLike: `%${searchValue}%` } },
                    { SourceSystem: { $iLike: `%${searchValue}%` } },
                    { Modality: { $iLike: `%${searchValue}%` } },
                    { InstallationDate: { $iLike: `%${searchValue}%` } },
                    { LifeCycle: { $iLike: `%${searchValue}%` } },
                    { ContractNumber: { $iLike: `%${searchValue}%` } },
                    { ContractType: { $iLike: `%${searchValue}%` } },
                    { ContractStatus: { $iLike: `%${searchValue}%` } },
                    { ProductId: { $iLike: `%${searchValue}%` } },
                    { SystemDescription: { $iLike: `%${searchValue}%` } },
                    { ContractStartDate: { $iLike: `%${searchValue}%` } },
                    { ContractEndDate: { $iLike: `%${searchValue}%` } },
                    { UsingDepartment: { $iLike: `%${searchValue}%` } },
                    { OwningDepartment: { $iLike: `%${searchValue}%` } }
                ]
            }
        }

        return DataModel.Model.findAll(findOptions);
    }

    get(EquipmentId: string): Promise<DataModel.IDataInstance> {
        return DataModel.Model.findById(EquipmentId);
    }

    create(request: App.IData): Promise<DataModel.IDataInstance> {
        return DataModel.Model.create(request);
    }

    update(request: App.IData): Promise<DataModel.IDataInstance> {

        return <any>(DataModel.Model.findById(request.EquipmentId).then((dataInstance) => {

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
    }

    delete(EquipmentId: string) {
console.log("inside the service"+EquipmentId);
        return DataModel.Model.findById(EquipmentId).then((dataInstance) => {
            return dataInstance.destroy();
        });
    }

}

export = DataService;