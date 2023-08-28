import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private basepath = "https://localhost:44377/api/User";

  constructor(private http:HttpClient) { }
  public signup(formData: any):Observable<any>
  {
    return this.http.post(this.basepath,formData);
  }

  public update(formData: any):Observable<any>
  {
    return this.http.put(this.basepath,formData);
  }

}