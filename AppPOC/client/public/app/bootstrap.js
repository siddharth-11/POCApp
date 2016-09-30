System.register(['angular2/angular2', 'angular2/router', 'angular2/http', './components/app/app-cmp', './services'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var angular2_1, router_1, http_1, app_cmp_1, services_1;
    var AppRequestOptions, APP_SERVICE_PROVICERS, APP_PROVIDERS;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_cmp_1_1) {
                app_cmp_1 = app_cmp_1_1;
            },
            function (services_1_1) {
                services_1 = services_1_1;
            }],
        execute: function() {
            AppRequestOptions = (function (_super) {
                __extends(AppRequestOptions, _super);
                function AppRequestOptions() {
                    _super.call(this);
                    this.headers.append('Access-Control-Allow-Origin', 'http://localhost:5000');
                    this.headers.append('Content-Type', 'application/json');
                }
                return AppRequestOptions;
            }(http_1.BaseRequestOptions));
            APP_SERVICE_PROVICERS = [
                services_1.DataService
            ];
            APP_PROVIDERS = [
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                angular2_1.provide(http_1.RequestOptions, { useClass: AppRequestOptions }),
                angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.PathLocationStrategy }),
                angular2_1.provide(router_1.APP_BASE_HREF, { useValue: '/' }),
                angular2_1.provide(router_1.ROUTER_PRIMARY_COMPONENT, {
                    useValue: app_cmp_1.AppCmp
                }),
            ];
            angular2_1.bootstrap(app_cmp_1.AppCmp, [APP_PROVIDERS, APP_SERVICE_PROVICERS]).catch(function (err) { return console.error(err); });
        }
    }
});

//# sourceMappingURL=../../../source-maps/public/app/bootstrap.js.map
