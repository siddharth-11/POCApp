System.register(['angular2/angular2', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular2_1, http_1;
    var DataService;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            DataService = (function () {
                function DataService(http) {
                    this.http = http;
                    this.formSavedEvent = new angular2_1.EventEmitter();
                    this.base = 'http://localhost:5000';
                }
                //TODO: Figure out which type return get. Using any is not good solution.
                DataService.prototype.getList = function (searchValue) {
                    var params = {
                        method: 'GET'
                    };
                    return this.http.get(this.base + "/api/data/list?searchValue=" + searchValue, params);
                };
                DataService.prototype.one = function (EquipmentId) {
                    var params = {
                        method: 'GET'
                    };
                    return this.http.get('${this.base}/api/data/one?EquipmentId=${EquipmentId}', params);
                };
                DataService.prototype.saveData = function (request) {
                    var action;
                    if (request.EquipmentId) {
                        return this.update(request);
                    }
                    else {
                        return this.create(request);
                    }
                };
                DataService.prototype.create = function (request) {
                    return this.http.post('${this.base}/api/data/create', JSON.stringify(request));
                };
                DataService.prototype.update = function (request) {
                    return this.http.put('${this.base}/api/data/update', JSON.stringify(request));
                };
                DataService.prototype.delete = function (EquipmentId) {
                    return this.http.delete(this.base + "/api/data/delete?EquipmentId=" + EquipmentId);
                };
                DataService = __decorate([
                    angular2_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DataService);
                return DataService;
            }());
            exports_1("DataService", DataService);
        }
    }
});

//# sourceMappingURL=../../../../../source-maps/public/app/components/core/data-service.js.map
