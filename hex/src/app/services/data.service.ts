import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
///import { Observable } from 'rxjs/Observable';
 
/*const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};*/
 
@Injectable()
export class DataService {
 
    constructor(private http:HttpClient) {}

    getMenus() {
      return this.http.get('../assets/menus.json');
    }

    getWhen() {
        return this.http.get('../assets/when.json');
    }
}