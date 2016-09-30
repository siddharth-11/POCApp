System.register(['angular2/angular2', 'angular2/router', '../core/data-service', './data-length-cmp'], function(exports_1, context_1) {
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
    var angular2_1, router_1, data_service_1, data_length_cmp_1;
    var DataListCmp;
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
            },
            function (data_length_cmp_1_1) {
                data_length_cmp_1 = data_length_cmp_1_1;
            }],
        execute: function() {
            DataListCmp = (function () {
                function DataListCmp(dataService, router) {
                    this.dataService = dataService;
                    this.router = router;
                    this.DataList = [];
                    console.log("Loading the data");
                    this.loadData();
                }
                DataListCmp.prototype.onSearch = function ($event) {
                    this.loadData($event.target.value);
                };
                DataListCmp.prototype.addData = function () {
                    this.router.navigate(['DataForm', { param: '1', a: 's' }]);
                };
                DataListCmp.prototype.deleteData = function (data) {
                    var _this = this;
                    console.log(data);
                    if (confirm('Are you sure?')) {
                        this.dataService.delete(data.EquipmentID).subscribe(function () {
                            _this.loadData();
                        });
                    }
                };
                DataListCmp.prototype.loadData = function (searchValue) {
                    var _this = this;
                    if (!searchValue)
                        searchValue = '';
                    this.dataService.getList(searchValue)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (DataList) { return _this.DataList = DataList; });
                };
                DataListCmp = __decorate([
                    angular2_1.Component({
                        selector: 'data-list'
                    }),
                    angular2_1.View({
                        templateUrl: 'app/components/data-list/data-list.html',
                        encapsulation: angular2_1.ViewEncapsulation.None,
                        directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, data_length_cmp_1.DataLengthCmp]
                    }), 
                    __metadata('design:paramtypes', [data_service_1.DataService, router_1.Router])
                ], DataListCmp);
                return DataListCmp;
            }());
            exports_1("DataListCmp", DataListCmp);
        }
    }
});

//# sourceMappingURL=../../../../../source-maps/public/app/components/data-list/data-list-cmp.js.map
