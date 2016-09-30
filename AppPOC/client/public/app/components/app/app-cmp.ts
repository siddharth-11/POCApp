import {Component, bootstrap, View, ViewEncapsulation, FORM_DIRECTIVES, CORE_DIRECTIVES } from 'angular2/angular2';
import {RouteConfig, Route, ROUTER_DIRECTIVES } from 'angular2/router';

import {DataListCmp} from '../data-list/data-list-cmp';
import {DataFormCmp} from '../addData-form/data-form-cmp';
import {AboutCmp} from '../about/about-cmp';
import {DataService} from '../core/data-service';


@Component({
    selector: 'my-app'
})
@View({
    templateUrl: 'app/components/app/data-app.html',
    encapsulation: ViewEncapsulation.None,
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})
@RouteConfig([
    new Route({ path: '/', component: DataListCmp, as: 'DataList' }),
    new Route({ path: '/about', component: AboutCmp, as: 'About' }),
    new Route({ path: '/addData', component: DataFormCmp, as: 'DataForm' })
])
export class AppCmp {
    constructor(private dataService: DataService) {
        console.log("App initialized");
        this.dataService.formSavedEvent.toRx().subscribe();
    }
}
