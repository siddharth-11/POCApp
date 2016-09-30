System.register(['angular2/angular2', 'angular2/router'], function(exports_1, context_1) {
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
    var angular2_1, router_1;
    var DataLengthCmp;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            DataLengthCmp = (function () {
                function DataLengthCmp() {
                    console.log('DataLengthCmp');
                }
                __decorate([
                    angular2_1.Input(), 
                    __metadata('design:type', Number)
                ], DataLengthCmp.prototype, "length", void 0);
                DataLengthCmp = __decorate([
                    angular2_1.Component({
                        selector: 'data-length'
                    }),
                    angular2_1.View({
                        templateUrl: 'app/components/data-list/data-length.html',
                        directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DataLengthCmp);
                return DataLengthCmp;
            }());
            exports_1("DataLengthCmp", DataLengthCmp);
        }
    }
});

//# sourceMappingURL=../../../../../source-maps/public/app/components/data-list/data-length-cmp.js.map
