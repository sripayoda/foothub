import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class DataService
{   
    constructor(private http: HttpClient)
    {
    }

    getOccasions() : Observable<any>
    {
        return this.http.get("https://localhost:44377/api/CRUD/OcassionTable")
    }

    getProductType() : Observable<any>
    {
        return this.http.get("https://localhost:44377/api/CRUD/ProductType")
    }

    getBrand() : Observable<any>
    {
        return this.http.get("https://localhost:44377/api/CRUD/BrandTable")
    }

    getProduct(): Observable<any>
    {
        return this.http.get("https://localhost:44377/api/CRUD/ProductTable")
    }


}