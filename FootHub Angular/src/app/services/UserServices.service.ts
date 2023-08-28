import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class UserServices{
    private basepath = "https://localhost:44377/api/User";
    private cartpath = "https://localhost:44377/api/Cart"
    
    constructor(private http:HttpClient) { }
    public login(id: string,password : string):Observable<Object>
    {
    return this.http.get(`${this.basepath}/${id},${password}`)
    }

    public signup(formData: any):Observable<any>
    {

    return this.http.post(this.basepath,formData);
    }

    public update(id: string,password: string,formData: any):Observable<any>
    {

    return this.http.put(`${this.basepath}/${id},${password}`,formData);
    }

    public delete(id : string, pass: string): Observable<any>
    {
        return this.http.delete(`${this.basepath}/${id},${pass}`)
    }

    public addcart(product : any): Observable<any>
    {
        return this.http.post(this.cartpath,product);
    }

    public cart(id : number): Observable<any>
    {
        return this.http.get(`${this.cartpath}/${id}`);
    }

    public deletefromcart(uid: number,pid : number): Observable<any>
    {
        return this.http.delete(`${this.cartpath}/${uid},${pid}`);
    }
}