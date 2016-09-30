System.register(['angular2/angular2', 'angular2/router', '../data-list/data-list-cmp', '../addData-form/data-form-cmp', '../about/about-cmp', '../core/data-service'], function(exports_1, context_1) {
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
    var angular2_1, router_1, data_list_cmp_1, data_form_cmp_1, about_cmp_1, data_service_1;
    var AppCmp;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (data_list_cmp_1_1) {
                data_list_cmp_1 = data_list_cmp_1_1;
            },
            function (data_form_cmp_1_1) {
                data_form_cmp_1 = data_form_cmp_1_1;
            },
            function (about_cmp_1_1) {
                about_cmp_1 = about_cmp_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            AppCmp = (function () {
                function AppCmp(dataService) {
                    this.dataService = dataService;
                    console.log("App initialized");
                    this.dataService.formSavedEvent.toRx().subscribe();
                }
                AppCmp = __decorate([
                    angular2_1.Component({
                        selector: 'my-app'
                    }),
                    angular2_1.View({
                        templateUrl: 'app/components/app/data-app.html',
                        encapsulation: angular2_1.ViewEncapsulation.None,
                        directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        new router_1.Route({ path: '/', component: data_list_cmp_1.DataListCmp, as: 'DataList' }),
                        new router_1.Route({ path: '/about', component: about_cmp_1.AboutCmp, as: 'About' }),
                        new router_1.Route({ path: '/addData', component: data_form_cmp_1.DataFormCmp, as: 'DataForm' })
                    ]), 
                    __metadata('design:paramtypes', [data_service_1.DataService])
                ], AppCmp);
                return AppCmp;
            }());
            exports_1("AppCmp", AppCmp);
        }
    }
});

//# sourceMappingURL=../../../../../source-maps/public/app/components/app/app-cmp.js.map
