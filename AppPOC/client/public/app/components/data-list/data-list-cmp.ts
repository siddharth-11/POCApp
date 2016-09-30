import {Component, View, FORM_DIRECTIVES, CORE_DIRECTIVES, ViewEncapsulation} from 'angular2/angular2';
import {Router, RouteConfig, Route, ROUTER_DIRECTIVES} from 'angular2/router';
import {DataService} from '../core/data-service';
import {DataLengthCmp} from './data-length-cmp';

@Component({
    selector: 'data-list'
})
@View({
        templateUrl: 'app/components/data-list/data-list.html',
        encapsulation: ViewEncapsulation.None,
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, ROUTER_DIRECTIVES, DataLengthCmp]
})
export class DataListCmp {

    DataList: App.IData[] = [];

    constructor(private dataService: DataService, private router: Router) {
        console.log("Loading the data")
        this.loadData();
    }

    onSearch($event) {
        this.loadData($event.target.value);
    }

    addData() {
        this.router.navigate(['DataForm', { param: '1', a: 's' }]);
    }

    deleteData(data: App.IData) {
        console.log(data);
        if (confirm('Are you sure?')) {
            this.dataService.delete(data.EquipmentID).subscribe(() => {
                this.loadData();
            });
        }
    }

    private loadData(searchValue?: string) {

        if (!searchValue) searchValue = '';

        this.dataService.getList(searchValue)
            .map(res => res.json())
            .subscribe(DataList => this.DataList = DataList);
    }

}


