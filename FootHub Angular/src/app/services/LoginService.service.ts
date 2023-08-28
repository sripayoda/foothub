import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private basepath1 = "https://localhost:44377/api/Product";
  private basepath2 = "https://localhost:44377/api/User";

  constructor(private http:HttpClient) { }

  public getAllProducts():Observable<any>
  {
    return this.http.get(this.basepath1 );
  }

  public login(id: string,password : string):Observable<Object>
  {
    return this.http.get(`${this.basepath2}/${id},${password}`)
  }

}