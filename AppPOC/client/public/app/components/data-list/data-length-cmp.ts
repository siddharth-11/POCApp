import {Input, Component, View, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'data-length'
})
    @View({
        templateUrl: 'app/components/data-list/data-length.html',
        directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES]
    })
export class DataLengthCmp {
    @Input() length: number;

    constructor() {
        console.log('DataLengthCmp');
    }
}