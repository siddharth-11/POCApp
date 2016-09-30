System.register(['angular2/angular2', 'angular2/router', '../core/data-service'], function(exports_1, context_1) {
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
    var angular2_1, router_1, data_service_1;
    var DataFormCmp;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            DataFormCmp = (function () {
                function DataFormCmp(routeParams, router, dataService) {
                    this.routeParams = routeParams;
                    this.router = router;
                    this.dataService = dataService;
                    this.formSaved = false;
                    this.reputations = [1, 2, 3, 4, 5];
                    this.formModel = {
                        EquimentID: undefined
                    };
                    this.init();
                }
                DataFormCmp.prototype.init = function () {
                    var _this = this;
                    var equipmentID = this.routeParams.get('EquipmentId');
                    if (equipmentID) {
                        this.dataService.one(parseInt(equipmentID))
                            .map(function (res) { return res.json(); })
                            .subscribe(function (formModel) {
                            _this.formModel = formModel;
                        });
                    }
                };
                DataFormCmp.prototype.saveForm = function () {
                    var _this = this;
                    this.formSaved = false;
                    this.dataService.saveData(this.formModel)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (result) {
                        _this.errors = result.errors;
                        _this.formSaved = !_this.errors;
                        if (_this.formSaved) {
                            _this.fireEvent();
                        }
                    });
                };
                DataFormCmp.prototype.fireEvent = function () {
                    this.dataService.formSavedEvent.next('');
                };
                Object.defineProperty(DataFormCmp.prototype, "diagnostic", {
                    get: function () { return JSON.stringify(this.formModel); },
                    enumerable: true,
                    configurable: true
                });
                DataFormCmp = __decorate([
                    angular2_1.Component({
                        selector: 'data-form'
                    }),
                    angular2_1.View({
                        templateUrl: 'app/components/addData-form/data-form.html',
                        directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, router_1.Router, data_service_1.DataService])
                ], DataFormCmp);
                return DataFormCmp;
            }());
            exports_1("DataFormCmp", DataFormCmp);
        }
    }
});

//# sourceMappingURL=../../../../../source-maps/public/app/components/addData-form/data-form-cmp.js.map
