import {Injectable, EventEmitter} from 'angular2/angular2';
import {Http} from 'angular2/http';

@Injectable()
export class DataService {

    formSavedEvent = new EventEmitter();

    base: string = 'http://localhost:5000';
    
    constructor(private http: Http) {

    }
    
    //TODO: Figure out which type return get. Using any is not good solution.
    getList(searchValue: string): any{
        var params: ngHttp.RequestOptionsArgs = {
            method: 'GET'
        };

        return this.http.get(`${this.base}/api/data/list?searchValue=${searchValue}`, params);
    }

    one(EquipmentId: number): any {

        var params: ngHttp.RequestOptionsArgs = {
            method: 'GET'
        };

        return this.http.get('${this.base}/api/data/one?EquipmentId=${EquipmentId}', params);
    }

    saveData(request: App.IData): any {

        var action;
        if (request.EquipmentId) {
            return this.update(request)
        } else {
            return this.create(request);
        }

    }

    create(request: App.IData): any {
        
        return this.http.post('${this.base}/api/data/create', JSON.stringify(request));
    }

    update(request: App.IData): any {

        return this.http.put('${this.base}/api/data/update', JSON.stringify(request));
    }

    delete(EquipmentId: number): any {
        return this.http.delete(`${this.base}/api/data/delete?EquipmentId=${EquipmentId}`);
    }
}