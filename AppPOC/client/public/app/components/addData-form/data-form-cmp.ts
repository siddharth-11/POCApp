﻿import {Component, View, FORM_DIRECTIVES, CORE_DIRECTIVES, EventEmitter} from 'angular2/angular2';
import {RouteParams, Router} from 'angular2/router';

import {DataService} from '../core/data-service';

@Component({
    selector: 'data-form'
})
@View({
    templateUrl: 'app/components/addData-form/data-form.html',
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class DataFormCmp {

    constructor(private routeParams: RouteParams, private router: Router, private dataService: DataService) {
        this.init();
    }
    
    errors: any[];
    formSaved: boolean = false;
    reputations: number[] = [1, 2, 3, 4, 5];
    formModel: App.IData = {
        EquimentID: undefined
    };


    private init() {

        var equipmentID = this.routeParams.get('EquipmentId');

        if (equipmentID) {

            this.dataService.one(parseInt(equipmentID))
                .map(res => res.json())
                .subscribe(formModel => {
                    this.formModel = formModel;
                });
        }
    }

    saveForm() {

        this.formSaved = false;

        this.dataService.saveData(this.formModel)
            .map(res => res.json())
            .subscribe(result => {
                this.errors = result.errors;
                this.formSaved = !this.errors;

                if (this.formSaved) {
                    this.fireEvent();
                }

            });
    }

    fireEvent() {
        this.dataService.formSavedEvent.next('');
    }

    get diagnostic() { return JSON.stringify(this.formModel); }


}
